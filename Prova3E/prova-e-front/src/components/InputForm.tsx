import React, { useState } from "react";
import { useCalculate } from "../hooks";
import styled from "styled-components";

interface InputFormProps {
  onCalculate: (result: string) => void;
}

const StyledInputForm = styled.div`
  border: 1px solid #555555;
  padding: 10px;
  display: inline-block;

  > label > input {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
    width: 45px;
    height: 25px;
    font-size: 12px;
    text-align: right;
    padding-right: 5px;
    border: 1px solid #000000;
    border-radius: 5px;
  }

  > label > select {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
    width: 45px;
    height: 30px;
    border: 1px solid #0000000;
    border-radius: 5px;
    text-align: right;
    padding-right: 5px;
  }

  > button {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 8px;
    margin-left: 5px;
    width: 100px;
    height: 30px;
    border: none;
    background: #888888;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const { calcularOperacao } = useCalculate();
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [loading, setLoading] = useState(false);

  const calcular = async () => {
    try {
      setLoading(true);
      const result = await calcularOperacao(a, b, operation);
      onCalculate(result);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledInputForm>
      <label htmlFor="numeroA">
        <input
          id="numeroA"
          type="text"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </label>
      <label htmlFor="operacao">
        <select
          id="operacao"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">+</option>
          <option value="diff">-</option>
          <option value="mult">*</option>
          <option value="divide">/</option>
          <option value="pow">^</option>
        </select>
      </label>
      <label htmlFor="numeroB">
        <input
          id="numeroB"
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </label>
      <button id="calcular" onClick={calcular} disabled={loading}>
        {loading ? "Carregando..." : "Obter"}
      </button>
    </StyledInputForm>
  );
};
