import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

function Login() {
  return (
    <div className='container-fluid'>
      <div className="login-main-image-box">
</div>
      <div className="d-flex p-0 form-box">
        <div className="input-image-box"></div>
<div className="input-box-text">
<Form>
  <h2 className="text-center">Login</h2>
  <div className="login-input-box pt-5 pb-5 ps-5 ms-5">
<Form.Group className="mb-3 email-box" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />

</Form.Group>

<Form.Group className="mb-3 password-box" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">

</Form.Group>
<Button variant="warning" className="login-button ms-4" type="submit">
Login
</Button>
<div className="forgot-password mt-3">
<p>forgot password?</p>
</div>
<p>don't have an account create one</p>
</div>
</Form>

</div>
</div>

      
         
   </div>

  




    
  )
}

export default Login
