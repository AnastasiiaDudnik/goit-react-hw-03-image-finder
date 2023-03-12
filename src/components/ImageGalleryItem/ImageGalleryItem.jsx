import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <GalleryItem key={id}>
      <GalleryImage src={webformatURL} alt="" />
      {/* onClick=
      {() => onClick(largeImageURL)} */}
    </GalleryItem>
  ));
};
