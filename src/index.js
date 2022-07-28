import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://flashcard-appl.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>  
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

