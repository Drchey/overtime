import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/no-time.svg'

const LoginScreen = () => {
  return (
    <div className="login-div">
      <div className="login-img">
        <img src={img} alt="" style={{ objectFit: 'contain' }} />
      </div>
      <div className="login-form">
        <form>
          <p> Login to Your Account </p>
          <div className="form-group">
            <label> Email Address </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input type="password" className="form-control" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="form-link">
              <button type="submit"> Sign In </button>
              <Link className="forgot_password" to="/reset">
                {' '}
                Forgot Password
              </Link>
            </div>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingTop: '30px',
              }}
            >
              or
            </p>
            <Link
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingTop: '30px',
                color: 'teal',
                fontSize: '30px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
              to="/register"
            >
              Don't Have An Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen
