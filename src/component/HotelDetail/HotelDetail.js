import React, { useContext, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PlaceContext} from '../../App'
import data from '../../component/FakeDataDetail/FakeDataDetail';
import Locationdetai from '../Location/Locationdetai';
import Maap from '../Maap/Maap';
import './HotelDetail.css'



const HotelDetail = () => {
    
    const [matchPlace,setMatchPlace] = useContext(PlaceContext);
 const [hotel,setHotel] =  useState(data);
 const [selectHotel,setSelectHotel] = useState({});

//  console.log("matchplace",matchPlace);
//  console.log("hotel",hotel);



 useEffect(() => {

    const bookingHotel = hotel.find(st => st.pid == matchPlace.id )
    console.log("book",bookingHotel)
    setSelectHotel(bookingHotel); 
   
              },[])
;
console.log("Selecthotel", selectHotel);
   
// const {img1,img1detail,img2,img2detail,img3,img3detail} = selectHotel;

    return (
        <div>
        <div className="row">
            <div  className="col-sm-6">
            <Card style={{ width: '28rem' }}>
  <Card.Img variant="top" src={selectHotel.img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    {selectHotel.img1detail}
    </Card.Text>
  </Card.Body>
</Card>
<br/>
<Card style={{ width: '28rem' }}>
<Card.Img variant="top" src={selectHotel.img2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     {selectHotel.img2detail }
    </Card.Text>
  </Card.Body>
</Card>

<br/>
<Card style={{ width: '28rem' }}>
<Card.Img variant="top" src={selectHotel.img3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     {selectHotel.img3detail }
    </Card.Text>
  </Card.Body>
</Card>
</div>


<div  className="col-sm-6">
<div className="google-map-code">
          <iframe src={selectHotel.hotel} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

       
        </div>

</div>

</div>








            
</div> 

    );
};

export default HotelDetail;