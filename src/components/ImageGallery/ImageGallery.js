import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ items, imageModal }) => {
  return (
    <ImageGalleryList>
      {items.map(el => (
        <ImageGalleryItem
          key={el.id}
          id={el.id}
          imageSrc={el.webformatURL}
          searchItem={el.tags}
          onItemClick={imageModal}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
