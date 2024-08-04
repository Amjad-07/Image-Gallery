import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i1.jpg';
import i5 from './img/i2.jpg';
import i6 from './img/i2.jpg';
import i7 from './img/i1.jpg';
import i8 from './img/i2.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Images() {
  return (
    <>
    <h1>Image Gallery</h1>
    
    <div className='image-container'>
      <div className='Image-gallery'>
        <img src={i1} alt="Image 1" />
        <img src={i2} alt="Image 2" />
        <img src={i3} alt="Image 3" />
        <img src={i4} alt="Image 4" />
        <img src={i5} alt="Image 5" />
        <img src={i6} alt="Image 6" />
        <img src={i7} alt="Image 7" />
        <img src={i8} alt="Image 8" />
      </div>
    </div>
    </>
  );
}

root.render(<Images />);
