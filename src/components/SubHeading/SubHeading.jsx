import React from 'react';


import{images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
    <p className='p__cormant'>{title}</p>
    <img src= {images.spoon} className='spoon__img' alt='' />
  </div>
);

export default SubHeading;
