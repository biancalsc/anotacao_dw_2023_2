// hooks/useCalculate.ts
import { useContext } from "react";
import { CalculateContext } from "../context"; // Substitua pelo caminho correto do seu contexto

export const useCalculate = () => {
  const context = useContext(CalculateContext);
  if (!context) {
    throw new Error(
      "useCalculate deve ser usado dentro de um CalculateProvider"
    );
  }
  return context;
};

export {};
