import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='72674811640-v951plshpcju1b2vcbto103gn0dqme45.apps.googleusercontent.com'>
    <App/>

    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
