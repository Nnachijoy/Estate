import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Card, Form , Button, Image, FormControl} from 'react-bootstrap';
import firstlistingimage from '../../assets/firstlistingimage.png';
import pencil from '../../assets/pencil.png'; 
import secondcardlisting from '../../assets/secondcardlisting.png';
import thirdcardlisting from '../../assets/thirdcardlisting.png';
import fourthcardlisting from '../../assets/fourthcardlisting.png';
import fifthcardlisting from '../../assets/fifthcardlisting.png';
import sixthcardlisting from '../../assets/sixthcardlisting.png';
import bath from '../../assets/bath.png';
import bed from '../../assets/bed.png';
import room from '../../assets/room.png';
import sqft from '../../assets/sqft.png';
import Search from '../../assets/Search.png';
import dropdown from '../../assets/dropdown.png';
import sorry from '../../assets/sorry.png';
import bell from "../../assets/bell.png";
import profile from '../../assets/profile.png';
import searchlight from '../../assets/searchlight.png';


const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: secondcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];



const Favorites = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [currentView, setCurrentView] = useState('Approved');

  const handleFocus = () => {
    setShowIcon(false);
  };

  const handleBlur = () => {
    setShowIcon(true);
  };

  const [selectedAction, setSelectedAction] = useState({
    forSale: 'For sale',
    price: 'Price',
    bedsBath: 'Beds & Bath',
    homeType: 'Home Type',
    more: 'More',
  });

  const handleSelect = (category, action) => {
    setSelectedAction(prevState => ({
      ...prevState,
      [category]: action
    }));
  };

  



  return (
    <div>
       <div className="d-block d-md-none bg-white" style={{ height: "62px", width: "400px", marginLeft: "-30px" }}>
  <Container className="p-3 d-flex align-items-center" style={{ position: 'relative', marginLeft: "10px" }}>
    <h3 className="flex-grow-1 mt-1" style={{marginLeft:"60px", color:"#FF7B29", fontFamily:"Syne", fontWeight:"700", fontSize:"22px"}}>RealHomes</h3>
    <div className="d-flex align-items-center">
      <Image
        src={bell}
        className="mr-2 mx-2 mb-2 bell"
        style={{
          maxWidth: '15px',
          maxHeight: '15px'
        }}
      />
      <Image
        src={profile}
        className="prof"
        style={{
          maxWidth: '35px',
          maxHeight: '35px',
          marginRight:"20px"
        }}
        roundedCircle
      />
    </div>
  </Container>
</div>

      <div className="container d-none d-md-block mb-5">
        <Container className="p-3" style={{ position: 'relative', marginLeft:"-30px" }}>
          <div className="d-flex align-items-center position-absolute  profile-container">
            <Image
              src={bell}
              className="mr-2 mx-2 mb-4 bell"
            />
            <Image
              src={profile}
              className="prof"
              style={{
                maxWidth: '65px',
                maxHeight: '65px'
              }}
              roundedCircle
            />
          </div>
        </Container>
      </div>

      <Container>
        <Row>
        <Col xs={12} md={6} className="bg-light p-3 d-flex justify-content-between align-items-center">
        <div className="m-2"> 
        <h3 className='my-listing mt-1'>Favorites</h3>
      </div>  
        </Col>
         <Col xs={12} md={6} className="d-flex flex-column align-items-end mt-4">
            <Form inline className="mt-2 search search-form search-form-mobile d-flex align-items-center">
              <FormControl type="text" placeholder="Search" className="search-input" />
              <Image src={searchlight} className="ml-2" />
            </Form>
          </Col>  
        </Row>
      </Container>

    <div className="filters-container container">
        <div className="position-relative search-container">
          {showIcon && <img src={Search} alt="searchicon" className="search-icon" />}
          <Form.Control
            className="custom-input pl-5"
            placeholder="Search city, neighborhood, zip address"
            aria-label="Search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className='dropdown-container px-3'>
            <Dropdown onSelect={(e) => handleSelect('forSale', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.forSale}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('price', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.price}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('bedsBath', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.bedsBath}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('homeType', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.homeType}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={(e) => handleSelect('more', e)}>
              <Dropdown.Toggle id="dropdown-basic" className="bg-white rounded-5 my-1 custom-dropdown-toggle">
                {selectedAction.more}
                <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Action 1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="Action 2">Action 2</Dropdown.Item>
                <Dropdown.Item eventKey="Action 3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            

            <button className='apply-filter'>Apply Filter</button>



          
          </div>
        </div>





        
      </div>


      <Container className='mt-3'>
  <Row>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={firstlistingimage} alt="card-image" className="" />
        <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>


    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={secondcardlisting} alt="card-image" className="" />
           <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>

    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
          <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={firstlistingimage} alt="card-image" className="" />
        <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>


    <Col className='mb-5'>
      <Card border='light' bg='light' className="">
        <img src={secondcardlisting} alt="card-image" className="" />
           <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>

    <Col style={{marginBottom:"180px"}}>
      <Card border='light' bg='light' className="">
        <img src={thirdcardlisting} alt="card-image" className="" />
          <button className='custom-button'>SELL</button>
        <div className='card-body'>
          <h3 className='card-price m-1 p-1'>$148,000</h3>
          <div className='card-text m-1 p-1'>
            Block 45, Rockvale manors, Apo, Abuja
          </div>
          <div className="listing-details m-1 p-1">
            <div className="listing-detail-item">
              <img src={bed} alt="bed icon" />
              3 beds
            </div>
            <div className="listing-detail-item">
              <img src={room} alt="room icon" />
              2 Rooms
            </div>
            <div className="listing-detail-item">
              <img src={bath} alt="bath icon" />
              2 Baths
            </div>
            <div className="listing-detail-item">
              <img src={sqft} alt="sqft icon" />
              120sqft
            </div>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</Container>
    </div>
    
  )
}

export default Favorites