import '../src/index.css'
// @deno-types="@types/react"
import { StrictMode } from 'react'
// @deno-types="@types/react-dom/client"
import { createRoot } from 'react-dom/client'
import Credits from "../src/components/credits/Credits.tsx";
import Header from "../src/components/common/Header.tsx";
import Footer from "../src/components/common/Footer.tsx";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Header />
    <Credits />
    <Footer />
  </StrictMode>
)
