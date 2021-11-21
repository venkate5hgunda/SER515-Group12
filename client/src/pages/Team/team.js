import React from 'react';
import '../../App.css';
import TeamSection from '../../components/TeamSection/TeamSection'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Teams() {

    const [error, setError] = useSstate("")
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
   <TeamSection />
  </>
 );
}

export default Teams;