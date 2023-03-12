import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalletyItem';
// import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { pixabayApi } from 'services/pixabayAPI';

// import { ColorRing } from 'react-loader-spinner';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuerry } = this.props;

    if (prevProps.searchQuerry !== searchQuerry) {
      this.setState({ loading: true, images: null });

      pixabayApi(searchQuerry)
        .then(response => {
          console.log(response.json());
          // if (!response.ok) {
          //   return Promise.reject(new Error(`Image ${searchQuerry} not found`));
          // }

          // return response.json();
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        {error && <h1>{error}</h1>}
        {loading && <p>Loading...</p>}
        {images &&
          images.hits.map(image => (
            <ImageGalleryItem
              key={image.id}
              img={image}
              onClick={this.props.toggleModal}
            />
          ))}
      </>
    );
  }
}
