import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainPage from './MainPage'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
