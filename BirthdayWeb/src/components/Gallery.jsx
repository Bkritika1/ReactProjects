import './Gallery.css'

export default function Gallery() {
  const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'] // Replace with your image names

  return (
    <div className="gallery">
      <h2>Our Cutest Memories 📸</h2>
      <div className="grid">
        {photos.map((photo, index) => (
          <img key={index} src={`/assets/photos/${photo}`} alt={`us-${index}`} />
        ))}
      </div>
    </div>
  )
}
