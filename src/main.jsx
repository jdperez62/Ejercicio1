import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MiComponente from './Micomponente.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h2>Ejemplo de Componente con Props</h2>
    <MiComponente color="red" fontSize="32px"/>
    <MiComponente color="blue" fontSize="24px"/>
    <MiComponente color="green" fontSize="18px"/>
  </StrictMode>,
)
