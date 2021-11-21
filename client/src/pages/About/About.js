import React from 'react'
import '../../App.css';
import AboutSection from '../../components/AboutSection/AboutSection';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function About() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }

 return (
  <div>
   <AboutSection />
  </div>
 )
}

export default About;