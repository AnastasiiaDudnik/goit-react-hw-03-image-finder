import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuerry: '',
  };

  onFormSubmit = searchQuerry => {
    this.setState({ searchQuerry });
  };

  render() {
    const { searchQuerry } = this.state;

    return (
      <div>
        <Toaster />
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuerry={searchQuerry} onClick={this.toggleModal} />
      </div>
    );
  }
}
