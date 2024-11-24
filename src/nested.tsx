import './index.css'
// @deno-types="@types/react"
import { StrictMode } from 'react'
// @deno-types="@types/react-dom/client"
import { createRoot } from 'react-dom/client'
import Credits from "./components/credits/Credits.tsx";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Header />
    <Credits />
    <Footer />
  </StrictMode>
)
