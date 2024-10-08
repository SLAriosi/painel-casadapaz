import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Login from './screens/Login.tsx'
import Cadastro from './screens/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
