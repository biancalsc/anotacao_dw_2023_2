/* 17 -
Certo aqui estamos quase acabando, vamos para parte mais básica que é html e css
O Arley pediu para usarmos componentização, separe os componentes conforme o Arley
pede, no meu caso eu só preciso de 1, explicação de cada trecho do código abaixo

Dica, avance para o passo 19 para poder olhar para o componente e assim poder ver
o que está fazendo

Quando acabar de entender siga para ./index.ts
*/

import React, { useEffect } from "react";
import styled from "styled-components";
// Na minha prova o Arley pediu para fazer uso do styled-components
import { useColor, ColorProvider } from "../hooks/index";
import { ColorProps } from "../types";

// Estilo geral para o container dos componentes
const StyledDiv = styled.div`
  display: flex;
`;

// Interface para as props do componente StyledColorDiv
interface StyledColorDivProps extends ColorProps {
  onClick: () => void;
}

// Estilo para o componente que representa uma cor
const StyledColorDiv = styled.div<StyledColorDivProps>`
  background: ${(ColorProps) => ColorProps.background};
  color: ${(ColorProps) => ColorProps.color};
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
`;

// Estilo para o botão de resetar cores
const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 45px;
`;

// Componente principal Colors
const Colors: React.FC = () => {
  // Utiliza o hook useColor para obter as cores e funções relacionadas
  const { colors, handleClique, resetColors } = useColor();

  // Efeito colateral para logar os itens da lista de cores sempre que ela é alterada
  useEffect(() => {
    console.log("Itens da função list:", colors);
  }, [colors]);

  // Renderiza o componente Colors com base nas cores e funções obtidas do hook
  return (
    <ColorProvider>
      {/* Obs: Fazendo uso do Wrapper como foi definido em context */}
      <StyledDiv>
        {/* Mapeia a lista de cores para renderizar componentes StyledColorDiv */}
        {colors.map((color: ColorProps) => (
          <StyledColorDiv
            key={color.id}
            background={color.background}
            color={color.color}
            id={color.id}
            count={color.count}
            onClick={() => handleClique(color.id)}
          >
            {color.count}
          </StyledColorDiv>
        ))}
        {/* Renderiza o botão de resetar cores com a função resetColors vinculada ao clique */}
        <StyledButton onClick={resetColors}>Resetar</StyledButton>
      </StyledDiv>
    </ColorProvider>
  );
};

// Exporta o componente Colors como padrão
export default Colors;
