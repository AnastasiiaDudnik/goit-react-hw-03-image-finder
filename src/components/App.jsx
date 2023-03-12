import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuerry: '',
    selectedPhoto: null,
    modalOpen: false,
  };

  onFormSubmit = searchQuerry => {
    this.setState({ searchQuerry });
  };

  // передати он клік на фото
  selectPhoto = link => {
    this.setState({ selectPhoto: link });
  };

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  render() {
    const { searchQuerry, modalOpen } = this.state;

    return (
      <div>
        <Toaster />
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuerry={searchQuerry} onClick={this.toggleModal} />

        {/* {loading && <h2>Loading..</h2>} */}
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {modalOpen && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
