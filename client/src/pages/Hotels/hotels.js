import React, { useRef, useState } from "react"
import '../../App.css';
import HotelSection from '../../components/HotelSection/HotelSection';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Hotels() {
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
  <>
   <HotelSection />
  </>
 );
}

export default Hotels;