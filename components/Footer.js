import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{"background-color":"#4056a1","color":"white"}}
    >
      <MDBContainer className='p-3 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center' style={{paddingBottom:"10px"}}>
            <span className='me-3'style={{color:"White"}}>Create Your Campaign Now</span>
            <MDBBtn type='button' outline color="light" rounded href='http://localhost:3000/campaigns/new'>
              Create Campaign!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ color:"grey",backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright :  
        <a className='text-white' href='http://localhost:3000'>
            bitstart.com
        </a>
      </div>
    </MDBFooter>
  );
}