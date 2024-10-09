import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./themes/index.js";
import "./styles/globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
              <App />
          </ChakraProvider>
      </QueryClientProvider>
  </StrictMode>,
)
