import { createIcon } from '../utils/icons.js'

export function initializeHeader() {
  const headerContainer = document.getElementById('header-container')
  
  headerContainer.innerHTML = `
    <header class="global-header" role="banner">
      <div class="header-container">
        <div class="header-main">
          <!-- Hamburger Menu Toggle -->
          <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          
          <!-- Brand Section -->
          <a href="/" class="brand-section" aria-label="PawPerfect Grooming - Go to homepage">
            <div class="brand-logo">
              ${createIcon('scissors')}
            </div>
            <div class="brand-text">
              <div class="brand-name">PawPerfect</div>
              <div class="brand-tagline">Professional Pet Care</div>
            </div>
          </a>
          
          <!-- Central Search Bar -->
          <div class="search-container">
            <div class="search-wrapper">
              <span class="search-icon">${createIcon('search')}</span>
              <input 
                type="search" 
                class="search-input" 
                placeholder="Search clients, pets, appointments, or services..."
                aria-label="Search"
                autocomplete="off"
              />
              <button class="search-clear" aria-label="Clear search" style="display: none;">
                ${createIcon('x')}
              </button>
              <kbd class="search-shortcut">⌘K</kbd>
            </div>
            
            <!-- Type-ahead Results Dropdown -->
            <div class="search-results" style="display: none;">
              <div class="search-results-section">
                <div class="search-results-title">Quick Actions</div>
                <button class="search-result-item">
                  ${createIcon('plus-circle')}
                  <div class="search-result-content">
                    <span class="search-result-label">New Appointment</span>
                    <span class="search-result-desc">Schedule a grooming session</span>
                  </div>
                  <kbd class="search-result-shortcut">⌘N</kbd>
                </button>
                <button class="search-result-item">
                  ${createIcon('user-plus')}
                  <div class="search-result-content">
                    <span class="search-result-label">Add Client</span>
                    <span class="search-result-desc">Register new pet owner</span>
                  </div>
                </button>
              </div>
              
              <div class="search-results-section">
                <div class="search-results-title">Recent Searches</div>
                <button class="search-result-item">
                  ${createIcon('clock')}
                  <div class="search-result-content">
                    <span class="search-result-label">Golden Retriever grooming</span>
                    <span class="search-result-meta">2 results</span>
                  </div>
                </button>
                <button class="search-result-item">
                  ${createIcon('clock')}
                  <div class="search-result-content">
                    <span class="search-result-label">Sarah Johnson</span>
                    <span class="search-result-meta">Client</span>
                  </div>
                </button>
              </div>
              
              <div class="search-results-footer">
                <span class="search-hint">
                  <kbd>↑↓</kbd> to navigate
                </span>
                <span class="search-hint">
                  <kbd>↵</kbd> to select
                </span>
                <span class="search-hint">
                  <kbd>esc</kbd> to close
                </span>
              </div>
            </div>
          </div>
          
          <!-- Session Info Panel -->
          <div class="session-panel">
            <div class="session-info">
              <span class="session-icon">${createIcon('calendar')}</span>
              <span class="session-text" id="current-date">Loading...</span>
            </div>
            
            <div class="user-menu">
              <button class="notification-btn" aria-label="View notifications">
                ${createIcon('bell')}
                <span class="notification-badge" aria-label="New notifications"></span>
              </button>
              
              <button class="user-avatar" aria-label="User menu" aria-haspopup="true">
                JD
              </button>
            </div>
          </div>
          
          <!-- Dropdown Menu -->
          <nav class="dropdown-menu" role="navigation" aria-label="Main navigation">
            <div class="dropdown-section">
              <div class="dropdown-title">Navigation</div>
              
              <a href="/" class="dropdown-item">
                ${createIcon('home')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Dashboard</span>
                  <span class="dropdown-desc">Overview & analytics</span>
                </div>
              </a>
              
              <a href="/clients" class="dropdown-item">
                ${createIcon('users')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Clients</span>
                  <span class="dropdown-desc">Pet owners & their pets</span>
                </div>
              </a>
              
              <a href="/appointments" class="dropdown-item">
                ${createIcon('calendar')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Appointments</span>
                  <span class="dropdown-desc">Schedule & bookings</span>
                </div>
                <span class="dropdown-badge">12</span>
              </a>
            </div>
            
            <div class="dropdown-section">
              <div class="dropdown-title">Business Operations</div>
              
              <a href="/services" class="dropdown-item">
                ${createIcon('sparkles')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Services & Pricing</span>
                  <span class="dropdown-desc">Grooming packages</span>
                </div>
              </a>
              
              <a href="/invoices" class="dropdown-item">
                ${createIcon('file-text')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Invoices</span>
                  <span class="dropdown-desc">Billing & payments</span>
                </div>
                <span class="dropdown-badge">3</span>
              </a>
              
              <a href="/reports" class="dropdown-item">
                ${createIcon('bar-chart')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Reports</span>
                  <span class="dropdown-desc">Business analytics</span>
                </div>
              </a>
            </div>
            
            <div class="dropdown-section">
              <div class="dropdown-title">Management</div>
              
              <a href="/inventory" class="dropdown-item">
                ${createIcon('package')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Inventory</span>
                  <span class="dropdown-desc">Products & supplies</span>
                </div>
              </a>
              
              <a href="/staff" class="dropdown-item">
                ${createIcon('user-check')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Staff Management</span>
                  <span class="dropdown-desc">Team & schedules</span>
                </div>
              </a>
              
              <a href="/settings" class="dropdown-item">
                ${createIcon('settings')}
                <div class="dropdown-content">
                  <span class="dropdown-label">Settings</span>
                  <span class="dropdown-desc">Business preferences</span>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `
  
  // Initialize interactive features
  initializeMenuToggle()
  initializeDateDisplay()
  initializeSearchBar()
  initializeUserMenuInteractions()
}

function initializeMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle')
  const dropdownMenu = document.querySelector('.dropdown-menu')
  let isAnimating = false
  
  menuToggle.addEventListener('click', () => {
    if (isAnimating) return
    
    const isOpen = dropdownMenu.classList.contains('active')
    
    if (isOpen) {
      // Closing animation
      isAnimating = true
      menuToggle.classList.remove('active')
      dropdownMenu.classList.add('closing')
      dropdownMenu.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')
      
      // Wait for animation to complete
      setTimeout(() => {
        dropdownMenu.classList.remove('closing')
        isAnimating = false
      }, 300)
    } else {
      // Opening animation
      isAnimating = true
      menuToggle.classList.add('active')
      dropdownMenu.classList.add('active')
      menuToggle.setAttribute('aria-expanded', 'true')
      
      // Stagger animation for menu items
      const items = dropdownMenu.querySelectorAll('.dropdown-item')
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 30}ms`
      })
      
      setTimeout(() => {
        isAnimating = false
      }, 300 + (items.length * 30))
    }
  })
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      if (dropdownMenu.classList.contains('active') && !isAnimating) {
        isAnimating = true
        menuToggle.classList.remove('active')
        dropdownMenu.classList.add('closing')
        dropdownMenu.classList.remove('active')
        menuToggle.setAttribute('aria-expanded', 'false')
        
        setTimeout(() => {
          dropdownMenu.classList.remove('closing')
          isAnimating = false
        }, 300)
      }
    }
  })
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownMenu.classList.contains('active') && !isAnimating) {
      isAnimating = true
      menuToggle.classList.remove('active')
      dropdownMenu.classList.add('closing')
      dropdownMenu.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.focus()
      
      setTimeout(() => {
        dropdownMenu.classList.remove('closing')
        isAnimating = false
      }, 300)
    }
  })
}

function initializeDateDisplay() {
  const dateElement = document.getElementById('current-date')
  
  function updateDate() {
    const now = new Date()
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }
    const formattedDate = now.toLocaleDateString('en-US', options)
    dateElement.textContent = formattedDate
  }
  
  updateDate()
  // Update date every minute
  setInterval(updateDate, 60000)
}

function initializeSearchBar() {
  const searchInput = document.querySelector('.search-input')
  const searchClear = document.querySelector('.search-clear')
  const searchResults = document.querySelector('.search-results')
  const searchWrapper = document.querySelector('.search-wrapper')
  let currentFocusIndex = -1
  
  // Mock data for type-ahead results
  const mockSearchData = {
    clients: [
      { name: 'Sarah Johnson', pets: ['Max (Golden Retriever)', 'Luna (Cat)'] },
      { name: 'Michael Chen', pets: ['Buddy (Labrador)'] },
      { name: 'Emily Davis', pets: ['Bella (Poodle)', 'Charlie (Beagle)'] },
      { name: 'Robert Wilson', pets: ['Rocky (German Shepherd)'] }
    ],
    appointments: [
      { client: 'Sarah Johnson', pet: 'Max', service: 'Full Grooming', date: 'Today, 2:00 PM' },
      { client: 'Michael Chen', pet: 'Buddy', service: 'Bath & Trim', date: 'Tomorrow, 10:00 AM' },
      { client: 'Emily Davis', pet: 'Bella', service: 'Nail Clipping', date: 'Dec 28, 3:00 PM' }
    ],
    services: [
      'Full Grooming Package',
      'Bath & Brush',
      'Nail Trimming',
      'Teeth Cleaning',
      'Flea Treatment'
    ]
  }
  
  // Show/hide clear button
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim()
    searchClear.style.display = value ? 'flex' : 'none'
    
    if (value.length > 0) {
      showSearchResults(value)
    } else {
      hideSearchResults()
    }
  })
  
  // Clear search
  searchClear.addEventListener('click', () => {
    searchInput.value = ''
    searchClear.style.display = 'none'
    hideSearchResults()
    searchInput.focus()
  })
  
  // Focus effects
  searchInput.addEventListener('focus', () => {
    searchWrapper.classList.add('focused')
    if (searchInput.value.trim()) {
      showSearchResults(searchInput.value.trim())
    }
  })
  
  searchInput.addEventListener('blur', (e) => {
    // Delay to allow clicking on results
    setTimeout(() => {
      if (!searchWrapper.contains(document.activeElement)) {
        searchWrapper.classList.remove('focused')
        hideSearchResults()
      }
    }, 200)
  })
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to focus search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      searchInput.focus()
      searchInput.select()
    }
    
    // Navigate results with arrow keys
    if (searchResults.style.display !== 'none') {
      const resultItems = searchResults.querySelectorAll('.search-result-item')
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        currentFocusIndex = Math.min(currentFocusIndex + 1, resultItems.length - 1)
        updateFocusedResult(resultItems, currentFocusIndex)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        currentFocusIndex = Math.max(currentFocusIndex - 1, -1)
        updateFocusedResult(resultItems, currentFocusIndex)
      } else if (e.key === 'Enter' && currentFocusIndex >= 0) {
        e.preventDefault()
        resultItems[currentFocusIndex].click()
      } else if (e.key === 'Escape') {
        hideSearchResults()
        searchInput.blur()
      }
    }
  })
  
  function showSearchResults(query) {
    const lowerQuery = query.toLowerCase()
    let resultsHTML = ''
    
    // Search clients
    const matchingClients = mockSearchData.clients.filter(client => 
      client.name.toLowerCase().includes(lowerQuery) ||
      client.pets.some(pet => pet.toLowerCase().includes(lowerQuery))
    )
    
    // Search appointments
    const matchingAppointments = mockSearchData.appointments.filter(apt =>
      apt.client.toLowerCase().includes(lowerQuery) ||
      apt.pet.toLowerCase().includes(lowerQuery) ||
      apt.service.toLowerCase().includes(lowerQuery)
    )
    
    // Search services
    const matchingServices = mockSearchData.services.filter(service =>
      service.toLowerCase().includes(lowerQuery)
    )
    
    // Build results HTML
    if (matchingClients.length > 0) {
      resultsHTML += `
        <div class="search-results-section">
          <div class="search-results-title">Clients & Pets</div>
          ${matchingClients.slice(0, 3).map(client => `
            <button class="search-result-item">
              ${createIcon('user')}
              <div class="search-result-content">
                <span class="search-result-label">${highlightMatch(client.name, query)}</span>
                <span class="search-result-desc">${client.pets.join(', ')}</span>
              </div>
              ${createIcon('chevron-right')}
            </button>
          `).join('')}
        </div>
      `
    }
    
    if (matchingAppointments.length > 0) {
      resultsHTML += `
        <div class="search-results-section">
          <div class="search-results-title">Appointments</div>
          ${matchingAppointments.slice(0, 3).map(apt => `
            <button class="search-result-item">
              ${createIcon('calendar')}
              <div class="search-result-content">
                <span class="search-result-label">${highlightMatch(apt.client, query)} - ${highlightMatch(apt.pet, query)}</span>
                <span class="search-result-desc">${apt.service} • ${apt.date}</span>
              </div>
              ${createIcon('chevron-right')}
            </button>
          `).join('')}
        </div>
      `
    }
    
    if (matchingServices.length > 0) {
      resultsHTML += `
        <div class="search-results-section">
          <div class="search-results-title">Services</div>
          ${matchingServices.slice(0, 3).map(service => `
            <button class="search-result-item">
              ${createIcon('sparkles')}
              <div class="search-result-content">
                <span class="search-result-label">${highlightMatch(service, query)}</span>
              </div>
              ${createIcon('chevron-right')}
            </button>
          `).join('')}
        </div>
      `
    }
    
    // Show no results message if empty
    if (!resultsHTML) {
      resultsHTML = `
        <div class="search-no-results">
          <div class="search-no-results-icon">${createIcon('search')}</div>
          <div class="search-no-results-text">No results found for "${query}"</div>
          <div class="search-no-results-hint">Try searching for clients, pets, or services</div>
        </div>
      `
    }
    
    // Add footer
    resultsHTML += `
      <div class="search-results-footer">
        <span class="search-hint">
          <kbd>↑↓</kbd> to navigate
        </span>
        <span class="search-hint">
          <kbd>↵</kbd> to select
        </span>
        <span class="search-hint">
          <kbd>esc</kbd> to close
        </span>
      </div>
    `
    
    searchResults.innerHTML = resultsHTML
    searchResults.style.display = 'block'
    currentFocusIndex = -1
    
    // Add click handlers to new result items
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        console.log('Selected:', item.querySelector('.search-result-label').textContent)
        hideSearchResults()
        searchInput.value = ''
        searchClear.style.display = 'none'
      })
    })
  }
  
  function hideSearchResults() {
    searchResults.style.display = 'none'
    currentFocusIndex = -1
  }
  
  function updateFocusedResult(items, index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add('focused')
        item.scrollIntoView({ block: 'nearest' })
      } else {
        item.classList.remove('focused')
      }
    })
  }
  
  function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark>$1</mark>')
  }
}

function initializeUserMenuInteractions() {
  const notificationBtn = document.querySelector('.notification-btn')
  const userAvatar = document.querySelector('.user-avatar')
  
  notificationBtn.addEventListener('click', () => {
    // Remove notification badge after click
    const badge = notificationBtn.querySelector('.notification-badge')
    if (badge) {
      badge.style.animation = 'fadeOut 0.3s ease-out'
      setTimeout(() => badge.remove(), 300)
    }
    
    console.log('Opening notifications panel...')
  })
  
  userAvatar.addEventListener('click', () => {
    console.log('Opening user profile menu...')
  })
}
