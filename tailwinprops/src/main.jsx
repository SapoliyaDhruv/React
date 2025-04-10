import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Components/card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card userName="Dhruv1" aboutMe="fdgfgfdgfdgggggggggbgbgbgjfiughfugh" txtBtn="click1"/>
    <Card userName="Dhruv2" aboutMe="djghfghfgifughwfiughfwuigfjbg" txtBtn="click2"/>
    <Card userName="Dhruv3" aboutMe="kjghadghdiughiughiuerghiruegiuerg" txtBtn="click3"/>
    
  </StrictMode>,
)
