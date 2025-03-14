import Image from '../image/image'
import UserButton from '../userButton/UserButton'
import './topBar.css'
const TopBar = () => {
  return (
    <div className='topBar'>
      {/* SEARCH */}
      <div className='search'>
        <Image path="/general/search.svg" alt='search' />
       <input type='text' placeholder='Search' />
      </div>

      {/* USER */}
      <UserButton/>
    </div>
  )
}

export default TopBar
