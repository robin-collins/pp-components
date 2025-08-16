import './style.css'
import { initializeHeader } from './components/header.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  
  // Create header container
  const headerContainer = document.createElement('div')
  headerContainer.id = 'header-container'
  
  app.appendChild(headerContainer)
  
  // Initialize header component only
  initializeHeader()
})
