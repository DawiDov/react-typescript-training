import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/pages/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
