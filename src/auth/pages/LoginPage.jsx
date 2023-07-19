import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {

    navigate('/', { replace: true });

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
