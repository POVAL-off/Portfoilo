import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import theme from "./settings/theme";
import "./styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
    link: createUploadLink({ uri: 'http://localhost:5000/graphql' })
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
