import './userButton.css'
import { useState } from 'react'
import Image from '../image/image'
const UserButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const currentUser = true
  return currentUser ? (
    <div className='userButton'>
        <Image path="/general/noAvatar.png" alt='user' className='userAvatar' />
        <Image path="/general/arrow.svg" onClick={() => setIsMenuOpen(!isMenuOpen)} alt='arrowDown' className='arrowDown' />
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
