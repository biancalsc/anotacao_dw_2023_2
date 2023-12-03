/* 13 -
"Este arquivo (ColorProvider.tsx) é responsável por criar um contexto de cores no React.
Um contexto no React é uma forma de compartilhar dados entre componentes, permitindo que
certos dados estejam disponíveis para componentes específicos sem a necessidade de passar
esses dados por meio de props manualmente." -ChatGPT

Bom, meio que esse código é completamente desnecessário mas a prova me força a usar então vamos
expmicar né, esse trecho meio que serve para se comunicar com outros arquivos, é como se a função dele
fosse compactar o código, ele chama aquelas funções do colorService e as reescreve agora definindo
seus conteudos como váriaveis e etc. Fornecendo essas informações para um fúturo componente

Siga agora para ./index.ts
*/

import React, { createContext, useEffect, useReducer } from "react";
import { Props, ColorProps } from "../types";
import { getColorList, resetColors, updateColor } from "../service/index";

// Interface para o contexto de cores, estendendo o tipo Props criando o método resetColors
interface ColorContextProps extends Props {
  resetColors: () => void;
}

// Interface para o estado do contexto de cores
interface ColorState {
  colors: ColorProps[];
}

// Tipos de ações disponíveis para atualizar o estado
type ColorAction =
  | { type: "setColors"; payload: ColorProps[] }
  | { type: "updateColor"; payload: { id: number } };

// Redutor que define como o estado é atualizado com base nas ações
const colorReducer = (state: ColorState, action: ColorAction): ColorState => {
  switch (action.type) {
    // Ação para definir as cores no estado
    case "setColors":
      return { ...state, colors: action.payload };

    // Ação para atualizar a contagem de uma cor no estado
    case "updateColor":
      return {
        ...state,
        colors: state.colors.map((color) =>
          color.id === action.payload.id
            ? { ...color, count: color.count + 1 }
            : color
        ),
      };

    // Ação padrão, retorna o estado inalterado
    default:
      return state;
  }
};

// Criação do contexto de cores com o tipo inicial
export const ColorContext = createContext<ColorContextProps | undefined>(
  undefined
);

// Componente que fornece o contexto de cores aos componentes filhos
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Uso do hook useReducer para gerenciar o estado com o redutor colorReducer
  const [state, dispatch] = useReducer(colorReducer, { colors: [] });

  // Efeito colateral para buscar as cores do backend ao montar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Chama a função para obter a lista de cores do backend
        const response = await getColorList();
        // Despacha uma ação para definir as cores no estado
        dispatch({ type: "setColors", payload: response });
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    }
    // Chama a função de busca ao montar o componente
    fetchData();
  }, []);

  // Função para lidar com o clique em uma cor
  const handleClique = async (id: number) => {
    try {
      // Chama a função para atualizar a contagem no backend
      await updateColor(id);
      // Despacha uma ação para atualizar a contagem no estado local
      dispatch({ type: "updateColor", payload: { id } });
    } catch (error) {
      console.error("Erro ao enviar clique para o backend:", error);
    }
  };

  // Função para resetar os contadores de cores
  const resetColorsHandler = async () => {
    try {
      // Chama a função para resetar os contadores no backend
      await resetColors();
      // Despacha uma ação para resetar os contadores no estado local
      dispatch({
        type: "setColors",
        payload: state.colors.map((color) => ({ ...color, count: 0 })),
      });
    } catch (error) {
      console.error("Erro ao resetar contadores:", error);
    }
    // Recarrega a página para refletir as alterações
    window.location.reload();
  };

  // Objeto contendo os valores que serão disponibilizados no contexto
  const contextValue: ColorContextProps = {
    colors: state.colors,
    handleClique,
    resetColors: resetColorsHandler,
  };

  // Renderiza o provedor de contexto com os componentes filhos
  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
