import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Victor Mtz');

    navigate(lastPath, { replace: true });

  }

  return (
    <>
    
      <div className="bg-dark">
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">

          <button
            className="btn btn-outline-light"
            onClick={onLogin}
          >
            Login
          </button>

        </div>
      </div>
    
    </>
  )
}
