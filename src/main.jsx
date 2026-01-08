import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Supports weights 100-900
import '@fontsource-variable/roboto';
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
