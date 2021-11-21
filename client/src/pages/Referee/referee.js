import React from 'react';
import '../../App.css';
import RefereeSection from '../../components/RefereeSection';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function Referee() {
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
   <RefereeSection />
  </>
 );
}

export default Referee