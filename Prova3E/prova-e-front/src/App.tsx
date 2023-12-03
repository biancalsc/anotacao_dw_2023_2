import React, { useState } from "react";
import { InputForm, ResultList } from "./components";
import { CalculateProvider } from "./context";
import styled from "styled-components";

const App: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);

  const handleCalculate = async (result: string) => {
    setResults([...results, result]);
  };

  return (
    <div>
      <CalculateProvider>
        <InputForm onCalculate={handleCalculate} />
        <ResultList results={results} />
      </CalculateProvider>
    </div>
  );
};

export default App;
