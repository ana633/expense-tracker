import React from "react";
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="6f096867-c3d5-47f0-8459-8d1e3aeb98cf" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
        document.getElementById('root')

);