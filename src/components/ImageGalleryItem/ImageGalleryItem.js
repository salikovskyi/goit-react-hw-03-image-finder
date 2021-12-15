import css from './ImageGalleryItem.module.css'


export default function ImageGalleryItem({picture, onClick}) {
    return (
    <li className={css.gallery_item} onClick={()=> onClick(picture.largeImageURL)}>
  <img src={picture.webformatURL} alt={picture.tags} className={css.image}/>
</li>
    )
}