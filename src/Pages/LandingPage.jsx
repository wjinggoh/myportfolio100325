import React from 'react';
import styled, { keyframes } from "styled-components";
import image from "../2200440.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  gap: 30px;
  justify-content: flex-end;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #FFE7E7;
  height: 350px;
  width: 800px;
  border-radius: 30px;
  position: relative;
  text-align: left;
`;

const OpenToWorkButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: white;
  padding: 10px 20px;
  border: none;
  width: 150px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 300px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 100px;
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

const C2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  button {
    width: 400px;
    height: 100px;
    border: none;
    background-color: white;
    border-radius: 50px;
    box-shadow: 6px 7px 5px 5px rgb(148, 148, 148);
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 8px 9px 7px rgba(148, 148, 148, 0.6);
    }

    a {
      font-family: 'Times New Roman', serif;
      font-size: 30px;
      font-weight: bold;
      color: black;
      text-decoration: none;
    }
  }
`;

const C3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFE7E7;
  height: 350px;
  width: 100%;
  margin-top: 50px;

  h1 {
    font-family: 'Times New Roman', serif;
    font-size: 50px;
  }
`;

const LandingPage = () => {
    return (
        <>
            <Container>
                <Intro>
                    <h1 style={{ fontSize: '50px', fontFamily: 'Times New Roman, serif' }}>Hi, I'm Wen Jing!</h1>
                    <h3 style={{ fontSize: '35px', fontFamily: 'Times New Roman, serif' }}>A fresh graduate<br /> with 2 years <br />software development
                        <br />experience</h3>
                    <OpenToWorkButton>
                        🟢 Open to Work
                    </OpenToWorkButton>
                </Intro>
                <Img>
                    <img src={image} alt="Wen Jing" />
                </Img>
            </Container>
            <C2>
                <button>
                    <a href="https://drive.google.com/file/d/1_S0cBD0ilvsjFoc4SUJR1YIAPLLrzY_7/view?usp=sharing"
                        download="Your_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume Here↗
                    </a>
                </button>
            </C2>
            <C3>
                <h1>Let's Connect!</h1>
            </C3>
        </>
    );
};

export default LandingPage;
