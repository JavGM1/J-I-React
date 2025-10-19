import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css' // IMPORTANTE: importa el CSS de Bootstrap aquí
import './styles.css' // tus estilos personalizados (opcional)
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // importa el JS de Bootstrap para data-bs-* (carrusel)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
