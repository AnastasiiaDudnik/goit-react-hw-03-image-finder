export const ImageGalleryItem = ({
  img: { webformatURL, largeImageURL },
  onClick,
}) => {
  return (
    <li>
      <img src={webformatURL} alt="" onClick={() => onClick(largeImageURL)} />
    </li>
  );
};
