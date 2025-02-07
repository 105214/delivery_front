import React, { useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './signUp.css'


function SignUp() {
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
      


    <Form>
    <Form.Group className="mb-3" controlId="formBasicProfilePic" id="profilePic">
       
        <Form.Control type="file" className="file-input" onChange={handleFileUpload} placeholder="Enter your name"/>
         {
          loading?"uploading":"done"
         }
          
        
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        
      </Form.Group>

      <InputGroup className="mb-3">
      <Form.Label>Mobile Number</Form.Label>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  


    </div>
  )
}

export default SignUp
