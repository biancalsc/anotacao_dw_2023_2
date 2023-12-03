import React, { useEffect } from "react";
import styled from "styled-components";
import { useColor } from "../hooks/index";
import { ColorProps } from "../types";
import { ColorProvider } from "../contexts/Context";

const StyledDiv = styled.div`
  display: flex;
`;

interface StyledColorDivProps extends ColorProps {
  onClick: () => void;
}

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

const Colors: React.FC = () => {
  const { colors, handleClique, resetColors } = useColor();

  useEffect(() => {
    console.log("Itens da função list:", colors);
  }, [colors]);

  return (
    <ColorProvider>
      <StyledDiv>
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
        <StyledButton onClick={resetColors}>Resetar</StyledButton>
      </StyledDiv>
    </ColorProvider>
  );
};

export default Colors;
