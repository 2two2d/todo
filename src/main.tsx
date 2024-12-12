import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import Router from "@settings/router";
import "./index.css"
import {Provider} from "react-redux";
import {store} from "@settings/store";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <Router/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
