import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

reportWebVitals()
