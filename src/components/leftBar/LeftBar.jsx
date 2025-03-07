
import './leftBar.css'
const leftBar = () => {
  return (
    <div className='leftBar'>
    <div className='menuIcons'>
        <a href='#' className='menuIcon'>
            <img src="/general/logo.png" alt='menuIcon' className='logo' />
        </a>
        <a href='#' className='menuIcon'>
            <img src="/general/home.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <img src="/general/create.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <img src="/general/updates.svg" alt='menuIcon' />
        </a>
        <a href='#' className='menuIcon'>
            <img src="/general/messages.svg" alt='menuIcon' />
        </a>

    </div>
    <a href='#'>
            <img src="/general/settings.svg" alt='menuIcon' />
        </a>
    </div>
  )
}

export default leftBar
