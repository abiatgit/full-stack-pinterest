import './userButton.css'
import { useState } from 'react'
const UserButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const currentUser = true
  return currentUser ? (
    <div className='userButton'>
        <img src="/general/noAvatar.png" alt='user' className='userAvatar' />
        <img src="/general/arrow.svg" onClick={toggleMenu} alt='arrowDown' className='arrowDown' />
        {isMenuOpen && <div className='userOptions'>
            <button className='userOption' >Profile</button>
            <button className='userOption'>Settings</button>
            <button className='userOption'>Logout</button>
        </div>}
    </div>
) : (
    
     <a className='loginButton' href='/login'>Login</a>
)}



export default UserButton
