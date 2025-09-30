import React from "react";
import styled from "styled-components"; 

type ColorDisplayProps = {
  hex: string;
  rgb: string;
  hsl: string;
};

const Swatch = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 80px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0.2rem 0;
`;

const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;  /* constrain card width */
  box-sizing: border-box;
  justify-content: center;
`;

const ColorDisplay: React.FC<ColorDisplayProps> = ({ hex, rgb, hsl }) => {
  return (<ColorCard>
    <Swatch color={hex}/>
    <Label><strong>HEX: </strong>{hex}</Label>
    <Label><strong>RGB: </strong>{rgb}</Label>
    <Label><strong>HSL: </strong>{hsl}</Label>
  </ColorCard>
    
  );
};


export default ColorDisplay;
