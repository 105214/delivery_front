import React, { useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './userSignup.css'


function UserSignUP() {
  const [loading,setLoading]=useState(false)
  const handleFileUpload=async(event)=>{
   const file=event.target.files[0]
   if(!file) return
   setLoading(true)
   const data=new FormData()
   data.append("file",file)
   data.append("upload_preset","first_time")
   data.append("cloud_name","dgqvvmbee")
  const res= await fetch("https://api.cloudinary.com/v1_1/dgqvvmbee/image/upload",{
    method:"POST",
    body:data,
   })

   const uploadImageUrl=await res.json()
   console.log(uploadImageUrl.url)
   setLoading(false)
  }
  return (
    <div>
      <div className="container-fluid user-signup-main-box">
</div>
<div className="user-signup-sub-box">

        <div className="user-signup-image">

        </div>
<div className="signup-input-box">

    <Form>
    <Form.Group className="mb-3 user-image" controlId="formBasicProfilePic">
       
        <Form.Control type="file" className="file-input" onChange={handleFileUpload} placeholder="Enter your name"/>
         {/* {
          loading?"uploading":"done"
         }
           */}
        
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        
      </Form.Group>


    
    <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>mobile number</Form.Label>
        <Form.Control type="text" placeholder="+91 99xxxxxxx" />
        
      </Form.Group>

      {/* <InputGroup className="mb-3 d-flex flex-column">
      <Form.Label>Mobile Number</Form.Label><br />
        <InputGroup.Text id="basic-addon1" className='d-flex'>+91</InputGroup.Text>
        <Form.Control
          placeholder="Mobile number"
          aria-label="mobile-number"
          aria-describedby="basic-addon1"
        />
      </InputGroup> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="warning" type="submit" className='signup-button'>
        Submit
      </Button>
    </Form>
</div>
</div>
      </div>

  


   
  )
}

export default UserSignUP
