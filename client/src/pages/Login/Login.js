import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useCookies } from 'react-cookie';

export default function Login() {

  var dict ={"admin@test.com":"admin","referee@test.com":"referee","coach@test.com":"coach","teamdir@test.com":"team-director",
            "micheal@test.com":"admin","johndoe@test.com":"admin","demo1":"admin","refereedir@test.com":"referee-director",
            "tournamentdir@test.com":"tournament-director"}

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [ userCookie, setUserCookie] = useCookies(['user']);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      if(emailRef.current.value in dict){
        setUserCookie("username",emailRef.current.value);
        setUserCookie("rolename",dict[emailRef.current.value]);
        history.push("/"+dict[emailRef.current.value]+"-profile")
      }
      else{
        history.push("/")
      }
    } catch(e) {
      console.log(e);
      setError("Failed to log in")
    }
    window.location.reload(false);
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" style={{"margin-top": "20px" }} type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3" style={{"margin": "20px 0px" }}>
            <Link to="/">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{"margin-bottom": "20px" }}>
        Need an account? <Link to="/">Sign Up</Link>
      </div>
      <div className={"p-3"}>
        <h6>Copyright and Terms of Use Statement
        Please read before attempting to log in.
         </h6>
         <p>
        Information and products are made available on this web site subject to the following terms and conditions. By accessing this site, you agree to these terms and conditions. Rivershark, Inc. reserves the right to change these terms and conditions, and the products, services, prices, and programs mentioned in this site at any time, without notice, at its sole discretion.

        Rivershark, Inc. reserves the right to seek all remedies available by law and in equity for any violation of these terms and conditions. Any rights not expressly granted herein are reserved.

        The information on this web site is protected by international copyright laws. Except as specifically permitted, no portion of this web site may be distributed or reproduced by any means, or in any form, without Rivershark, Inc's prior written permission. 
        
      
        COPYRIGHT NOTICE: © 1999 - 2021 Rivershark, Inc. All rights reserved.

        "Rivershark" and "www.tourneycentral.com" are trade names of Rivershark, Inc.
      
        </p>
      </div>
    </>
  )
}
