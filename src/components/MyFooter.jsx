import React from 'react';
import  Container  from 'react-bootstrap';

 const MyFooter = function () {
  return (
    <div className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <Container className='p-4'></Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
          Epibook.org
        
      </div>
    </div>
  );
}

export default MyFooter