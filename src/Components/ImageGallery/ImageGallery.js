import React from 'react';

import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import LoaderOn from '../Loader/LoaderOn';

const ImageGallery = ({ images, isLoading }) => {
  return (
    <ul className={style.ImageGallery}>
      {isLoading ? <LoaderOn /> : <ImageGalleryItem images={images} />}
    </ul>
  );
};

export default ImageGallery;
