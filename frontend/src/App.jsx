import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <>
      <Header />
      <div className="container mx-auto mt-6">
        <Outlet>
          <Home />
          <LoginPage />
          <RegistrationPage />
        </Outlet>
      </div>
        
    </>
  )
}

export default App
