import AppRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import { db } from './firebaseConnection'

import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="app">
    <ToastContainer />
    <AppRoutes/>
    </div>
  );
}

export default App;
