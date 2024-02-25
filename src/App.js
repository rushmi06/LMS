import React, { useState } from 'react';
import Card from './components/Card';
import Styled from 'styled-components';

function App() {
  const [mssg, setMssg] = useState("");
  const [mssgColor, setMssgColor] = useState("");

  const showMessage = (message, color) => {
    setMssg(message);
    setMssgColor(color);
    setTimeout(() => {
      setMssg("");
    }, 1000);
  };

  const like = () => {
    showMessage("Your Image Liked successfully", "#dc2626");
  };

  const save = () => {
    showMessage("Your Image saved successfully", "#2563eb");
  };

  const StyeldDiv = Styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    position:relative;
    gap:40px;
    padding:40px;
  `;

  const StyledAlert = Styled.div`
    position:fixed;
    background-color:${mssgColor};
    right:20px;
    top:20px;
    width:50%;
    padding:15px 10px;
    border-radius:10px;
    color:dark-green;
    font-weight:bold;
    color:white;
  `;

  const images = Array.from({ length: 12 }, (_, index) => `https://source.unsplash.com/random/200X300?${index}?animal`);

  return (
    <StyeldDiv>
      {mssg && <StyledAlert>{mssg}</StyledAlert>}
      {images.map((image, index) => <Card image={image} key={index} like={like} save={save} />)}
    </StyeldDiv>
  );
}

export default App;
