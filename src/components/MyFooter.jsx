import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

 const MyFooter = function () {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
          Epibook.org
        
      </div>
    </MDBFooter>
  );
}

export default MyFooter