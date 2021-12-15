import css from './ImageGallery.module.css'

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({pictures, onClick}) {
    const element = pictures.map(picture => <ImageGalleryItem onClick={onClick} picture={picture} key={picture.id} {...picture}/>)
    return (
    <ul className={css.gallery}>
        {element}
    </ul>
    )
}