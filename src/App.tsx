import './styles/App.css'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import {TermProvider} from "./TermContext";
import {FetchProvider} from "./FetchContext";


const App = () => {




    return (
          <BrowserRouter>
              <FetchProvider>
              <TermProvider>
              <MainRouter />
              </TermProvider>
              </FetchProvider>
          </BrowserRouter>
  );
      };

      export default App;
