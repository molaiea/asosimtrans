import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const ContactUs = () => {
  return (
    <section className="contact">
      <h2 className="h1-responsive font-weight-bold text-center white dim pb5">
        CONTACTEZ-NOUS
      </h2>
      <MDBRow className='rowcont'>
        
        <MDBCol lg="12">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container m-5"
            style={{ height: "500px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyRyt2um2sw0RdIT0i7fQ-Lw&key=AIzaSyClYVsprSy2kCEjXdo_TT1-IffmQvI_ZpY"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              className='mapframe'
            />
          </div>
          <br />
          
          <MDBRow className="text-center textcont">
            <MDBCol md="12">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="white">Agadir, ....</p>
              <p className="mb-md-0 white">Marocs</p>
            </MDBCol>
            <MDBCol md="14">
              <MDBBtn tag="a" floating color="blue" className="accent-1 ml4">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="white">+212666605037</p>
              <p className="mb-md-0 white">Lun - Ven, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="14">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0 white">oid@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        
      </MDBRow>

    </section>
  );
}

export default ContactUs;