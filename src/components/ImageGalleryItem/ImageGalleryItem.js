import { ImageGalleryLi, ImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ onItemClick, id, imageSrc, searchItem }) => {
  return (
    <ImageGalleryLi onClick={onItemClick} key={id}>
      <ImageGallery src={imageSrc} alt={searchItem} id={id} />
    </ImageGalleryLi>
  );
};
export default ImageGalleryItem;
