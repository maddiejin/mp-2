import { useState, useEffect } from 'react'
import ColorDisplay from "./components/ColorDisplay";
import { fetchRandomColor } from './services/color';
import type { ColorData } from './services/color';
import styled from 'styled-components'
import './App.css'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* center all horizontally */
  gap: 1rem;
  width: 100%;
`;

const Header = styled.header<{bg:string}>`
  background: ${(props) => props.bg || '#282c34'} ;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  color: white;
  text-align: center;
`;

const GenerateButton = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  margin: 1rem 0;
`;

const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;        /* allow wrapping */
  justify-content: center; /* horizontal centering */
  gap: 1rem;               /* space between cards */
  `;

function App() {
  const [color, setColors] = useState<ColorData[]>([]);
  const lastColor = color[color.length - 1]?.hex || '#282c34';

  const addColor = async () => {
    try {
      const newColor = await fetchRandomColor();
      setColors((prevColors) => [...prevColors, newColor]);
    } catch (error) {
      console.error("Error fetching color:", error);
    }
  };
  
  useEffect(() => {
    addColor();
  }, []);
  if (!color) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <PageWrapper>
        <Header bg={lastColor}>
          <h1>Random Color Generator</h1>
        </Header>
        <GenerateButton>
          <button onClick ={addColor}>
            Generate New Color
          </button>
        </GenerateButton>
        <ColorContainer>
          {color.map((c, index) => (
            <ColorDisplay key={index} hex={c.hex} rgb={c.rgb} hsl={c.hsl} />
          ))}
        </ColorContainer>
      </PageWrapper>
      
      
    </>
  )
}

export default App
