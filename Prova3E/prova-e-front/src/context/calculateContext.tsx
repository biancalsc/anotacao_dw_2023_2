import React, { createContext, useContext } from "react";
import { calcularOperacao } from "../services";

interface CalculateContextType {
  calcularOperacao: (
    a: string,
    b: string,
    operation: string
  ) => Promise<string>;
}

export const CalculateContext = createContext<CalculateContextType | undefined>(
  undefined
);

export const CalculateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CalculateContext.Provider value={{ calcularOperacao: calcularOperacao }}>
      {children}
    </CalculateContext.Provider>
  );
};

export const useCalcular = () => {
  const context = useContext(CalculateContext);
  if (!context) {
    throw new Error(
      "useCalcular deve ser usado dentro de um CalculateProvider"
    );
  }
  return context;
};
