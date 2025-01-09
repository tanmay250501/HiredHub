import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContextProvider } from './context/AppContext.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>

  </BrowserRouter>
)
