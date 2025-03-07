import './gallery.css'
import { items } from '../../constant/pinimg'
console.log(items)
const Gallery = () => {
  return (
    <div className='gallery'>
    {items.map((item) => (
        <div className='galleryItem' key={item.id}>
          <img src={item.media} alt={item.id} />
        </div>
      ))}
    </div>
  )
}

export default Gallery