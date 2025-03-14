
import Image from '../image/image'
import './leftBar.css'
const leftBar = () => {
  return (
    <div className='leftBar'>
    <div className='menuIcons'>
        <a href='#' className='menuIcon'>
            <Image path="/general/logo.png" alt='menuIcon' className='logo' />
        </a>
        <a href='#' className='menuIcon'>
            <Image path="/general/home.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <Image path="/general/create.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <Image path="/general/updates.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <Image path="/general/messages.svg" alt='menuIcon' />
        </a>

    </div>
    <a href='#'>
            <Image path="/general/settings.svg" alt='menuIcon' />
        </a>
    </div>
  )
}

export default leftBar
