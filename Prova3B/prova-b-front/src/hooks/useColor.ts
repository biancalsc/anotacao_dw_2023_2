// hooks/useColor.ts
import { useContext } from "react";
import { ColorContext } from "../contexts/Context";

export const useColor = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error("useColor deve ser usado dentro de um ColorProvider");
  }

  return context;
};

export {};
