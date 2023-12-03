import React, { createContext, useEffect, useReducer } from "react";
import { Props, ColorProps } from "../types";
import {
  getColorList,
  resetColors,
  updateColor,
} from "../service/colorService";

interface ColorContextProps extends Props {
  resetColors: () => void;
}

interface ColorState {
  colors: ColorProps[];
}

type ColorAction =
  | { type: "setColors"; payload: ColorProps[] }
  | { type: "updateColor"; payload: { id: number } };

const colorReducer = (state: ColorState, action: ColorAction): ColorState => {
  switch (action.type) {
    case "setColors":
      return { ...state, colors: action.payload };
    case "updateColor":
      return {
        ...state,
        colors: state.colors.map((color) =>
          color.id === action.payload.id
            ? { ...color, count: color.count + 1 }
            : color
        ),
      };
    default:
      return state;
  }
};

export const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(colorReducer, { colors: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getColorList();
        dispatch({ type: "setColors", payload: response });
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    }
    fetchData();
  }, []);

  const handleClique = async (id: number) => {
    try {
      await updateColor(id);
      dispatch({ type: "updateColor", payload: { id } });
    } catch (error) {
      console.error("Erro ao enviar clique para o backend:", error);
    }
  };
  
  const resetColorsHandler = async () => {
    try {
      await resetColors();
      dispatch({
        type: "setColors",
        payload: state.colors.map((color) => ({ ...color, count: 0 })),
      });
    } catch (error) {
      console.error("Erro ao resetar contadores:", error);
    }
    window.location.reload();
  };

  const contextValue: ColorContextProps = {
    colors: state.colors,
    handleClique,
    resetColors: resetColorsHandler,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
