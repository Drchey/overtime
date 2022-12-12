import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/no-time.svg'

const RegisterScreen = () => {
  return (
    <div className="login-div">
      <div className="login-img">
        <img src={img} alt="" style={{ objectFit: 'contain' }} />
      </div>
      <div className="login-form">
        <form>
          <p>Sign Up Here</p>
          <p style={{ color: 'red', fontSize: '16px' }}>
            NB : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Obcaecati, eligendi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Obcaecati, eligendi.
          </p>
          <div className="form-group">
            <label>Name </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label> Email Address </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>User Role</label>
            <select className="form-control">
              <option>Choose ...</option>
              <option value="">Manager (1st Line)</option>
              <option value="">Line Manager (2nd Line )</option>
              <option value="">Exec Manager (3rd Line ) </option>
            </select>
          </div>

          <div className="form-group">
            <label> Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label> Confirm Password</label>
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
              <button type="submit"> Sign Up</button>
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
              to="/login"
            >
              Already Have an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
