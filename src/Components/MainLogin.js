import React from 'react';
import glamorous from 'glamorous';

const Button = glamorous.button({
  display: 'inline-block',
  color: '#011627',
  fontSize: '16px',
  padding: '8px 16px',
  border: '1px solid #011627',
  borderRadius: '4px',
});

const LoginBox = glamorous.div({
  width: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FDFFFC',
  margin: '0 auto',
  borderRadius: '10',
  padding: '15px',
});

const Div = glamorous.div({
  display: 'inherit',
  fontSize: '20px',
});

const Title = glamorous.p({
  display: 'inline-block',
  color: '#011627',
  margin: 0,
  marginBottom: 15,
});

const Divider = glamorous.hr({
  color: '#f00',
  backgroundColor: '#f00',
  heigth: '5px',
  width: '100%',
});

const TextBox = glamorous.input({
  display: 'block',
  width: '100%',
  height: '20px',
  fontSize: '20px',
  padding: '10px 10px 10px 5',
  textAlign: 'inherit',
  border: 'none',
  borderBottom: '1px solid #757575',
  marginBottom: '20px',
});

const MainLogin = () => (
  <LoginBox>
    <Div>
      <Title>Login Screen</Title>
    </Div>
    <TextBox placeholder="Email" />
    <TextBox placeholder="Password" type="password" />
    <Button> Login </Button>
  </LoginBox>
);

export default MainLogin;
