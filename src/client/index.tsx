import App from '../react/App'
import * as React from 'react'
import { hydrate } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('app-root')
)