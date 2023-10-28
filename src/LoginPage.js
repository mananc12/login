import React from 'react';
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Montserrat&family=Plaster&display=swap');
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LoginPage = () => {
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <SideImage>
          <img src='/login.png' alt="Side Image" />
        </SideImage>
        <LoginForm>
          <Title>Welcome Back!</Title>
          <InputContainer>
            <Input type="text" placeholder="Username or Email" />
            <InputIcon className="fa fa-user" />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" />
            <InputIcon className="fa fa-lock" />
          </InputContainer>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="rememberMe" />
            <CheckBoxLabel htmlFor="rememberMe">Remember me</CheckBoxLabel>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="agreeTerms" />
            <CheckBoxLabel htmlFor="agreeTerms">
              I agree to the <TermsLink>Terms and Conditions</TermsLink>
            </CheckBoxLabel>
          </CheckBoxContainer>
          <SubmitButton>Login</SubmitButton>
          <ForgotPassword>Forgot your password?</ForgotPassword>
          <RegisterLink>
            Don't have an account? <a href="#">Register Here</a>
          </RegisterLink>
          <SocialLogin>
            <SocialButton className="fa fa-google" />
            <SocialButton className="fa fa-facebook" />
          </SocialLogin>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #11998e, #38ef7d);
  font-family: 'Plex Sans', sans-serif; /* Use the imported font */
`;

const LoginForm = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  width: 360px;
  text-align: center;
  font-family: 'Plex Sans', sans-serif; /* Use the imported font */
`;

const SideImage = styled.div`
  top: 0;
  left: 0;
  width: 40%;
  height: 80%;
  overflow: hidden;
  animation: ${moveUpDown} 3s linear infinite;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 18px;
  background-color: #f5f5f5;
  color: #333;
`;

const InputIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #777;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CheckBoxLabel = styled.label`
  color: #333;
  font-size: 16px;
  user-select: none;
`;

const TermsLink = styled.a`
  text-decoration: underline;
  color: #11998e;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #11998e;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #38ef7d;
  }
`;

const ForgotPassword = styled.p`
  font-size: 16px;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
`;

const RegisterLink = styled.p`
  font-size: 16px;
  color: #11998e;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #11998e;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLogin = styled.div`
  margin-top: 30px;
`;

const SocialButton = styled.i`
  font-size: 36px;
  color: #11998e;
  margin: 0 15px;
  cursor: pointer;
`;

export default LoginPage;
