import { useState, useEffect } from 'react'
import ColorDisplay from "./components/ColorDisplay";
import { fetchRandomColor, ColorData } from './services/color';
import styled from 'styled-components'
import './App.css'

const AddButton = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  margin: 1rem 0;
`;

const ColorCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  max-width: 200px;
  margin-bottom: 1rem;
`;

function App() {
  const [color, setColors] = useState<ColorData[]>([]);

  const addColor = async () => {
    try {
      const newColor = await fetchRandomColor();
      setColors((prevColors) => [...prevColors, newColor]);
    } catch (error) {
      console.error("Error fetching color:", error);
    }
  };

  /*const fetchColor = async () => {
    try {
      const data = await fetchRandomColor();
      setColor(data);
    } catch (error) {
      console.error("Error fetching color:", error);
    }
  };*/
  
  useEffect(() => {
    addColor();
  }, []);
  if (!color) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <AddButton>
        <button onClick ={addColor}>
          Add New Color
        </button>
      </AddButton>
      <ColorCard>
        {color.map((c, index) => (
          <ColorDisplay key={index} hex={c.hex} rgb={c.rgb} hsl={c.hsl} />
        ))}
      </ColorCard>
      
    </>
  )
}

export default App
