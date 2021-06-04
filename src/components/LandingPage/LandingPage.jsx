import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            The game Stocks and Bonds is a simple stock simulation game.  
            Where you buy stock progress to the next year make profit then 
            sell your stock and buy other stock to make even more profit.
            You are given 10 different stock to choose from but I don't suggest the 
            first one since it never changes.
          </p>

          <p>
            You are able to save your games as well.  And then reload them at any time.
            Register now to enjoy the wonderful game of Stocks and Bonds.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
