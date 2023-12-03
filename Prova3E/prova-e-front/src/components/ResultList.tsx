import React from "react";
import styled from "styled-components";

interface ResultListProps {
  results: string[];
}

const StyledResultList = styled.div`
  margin-top: 8px;

  > div {
    margin-bottom: 8px;
  }
`;

export const ResultList: React.FC<ResultListProps> = ({ results }) => {
  return (
    <StyledResultList>
      {results
        .slice(0)
        .reverse()
        .map((result, index) => (
          <div key={index}>{result}</div>
        ))}
    </StyledResultList>
  );
};
