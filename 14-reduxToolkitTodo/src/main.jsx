import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {store} from './App/store'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
   
   <Provider store={store}>
    <App />
 </Provider>
)