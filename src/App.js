import React, { Components } from 'react';
import './App.css';
import axios from 'axios';

//Components
import Container from './Components/Container/Container';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

import fetchPhotos from './services/fetchPhotos';

class App extends Components {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchPhotos
      .fetchPhotosWithQuery()
      .then(response => this.setState({ images: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    //Нужно добавить с 1:05:35
  }

  render() {
    console.log(this.state.images);

    return (
      <Container>
        <Searchbar />
        <ImageGallery
          images={this.state.images}
          isloading={this.state.isLoading}
        />
        <Button />
      </Container>
    );
  }
}

export default App;
