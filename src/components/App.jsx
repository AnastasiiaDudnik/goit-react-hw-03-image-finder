import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <div>
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
