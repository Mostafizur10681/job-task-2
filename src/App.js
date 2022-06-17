
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Components/Home/Home';
import Login from './Pages/Components/Login/Login';
import Regsiter from './Pages/Components/Login/Regsiter';
import RequireAuth from './Pages/Components/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Regsiter></Regsiter>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
