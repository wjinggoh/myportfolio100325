import React from 'react';
import styled, { keyframes } from "styled-components";
import image from "../img/2200440.jpg";
import githubimg from "../img/github.png";
import linkedinimg from "../img/linkedln.png";
import emailimg from "../img/email.png";


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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 20px;
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
  }
`;

const Button = styled.button`
  background-color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const OpenToWorkButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 150px;
  cursor: default;
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

    @media (max-width: 768px) {
      margin-left: 0;
      width: 200px;
    }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFE7E7;
  height: auto;
  width: 100%;
  margin-top: 50px;
  padding: 20px 0;

  h1 {
    font-family: 'Times New Roman', serif;
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  button {
    width: 150px;
    height: 50px;
    background-color: white;
    font-family: 'Times New Roman', serif;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 10px rgba(148, 148, 148, 0.6);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
      color: black;
    }

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
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
                    <OpenToWorkButton aria-label="Open to Work">
                        🟢 Open to Work
                    </OpenToWorkButton>
                </Intro>
                <Img>
                    <img src={image} alt="Wen Jing's Profile Picture" />
                </Img>
            </Container>
            <C2>
                <button>
                    <a href="https://drive.google.com/file/d/1_S0cBD0ilvsjFoc4SUJR1YIAPLLrzY_7/view?usp=sharing"
                        download="Your_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View My Resume Here↗
                    </a>
                </button>
            </C2>
            <C3>
                <h1>Let's Connect!</h1>
<Buttons>
  <button>
    <a href="https://github.com/wjinggoh" target="_blank" rel="noopener noreferrer">
      <img src={githubimg} alt="Github" />
      Github
    </a>
  </button>
  <button>
    <a href="https://www.linkedin.com/in/goh-wen-jing-4118a9236/?originalSubdomain=my" target="_blank" rel="noopener noreferrer">
      <img src={linkedinimg} alt="LinkedIn" />
      LinkedIn
    </a>
  </button>
  <button>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wjingggoh15@gmail.com&su=Let's Connect!&body=Hi Wen Jing," target="_blank" rel="noopener noreferrer">
      <img src={emailimg} alt="Email" />
      Email
    </a>
  </button>
</Buttons>
            </C3>
        </>
    );
};

export default LandingPage;