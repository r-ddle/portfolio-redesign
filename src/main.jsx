import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-gradient-to-r from-blue-200 to-cyan-200">
            <App />
        </div>
    </StrictMode>,
)
