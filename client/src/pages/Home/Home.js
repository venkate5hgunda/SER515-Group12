import React, { useRef, useState } from "react"
import '../../App.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
import News from '../../components/News/News';
import Videos from '../../components/Videos/Videos';
function Home() {
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
   <HeroSection />
   <News />
   <Videos />
  </>
 );
}

export default Home;