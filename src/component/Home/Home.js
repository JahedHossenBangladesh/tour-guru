import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Data from '../FakeData/fakedata';
import Place from '../Place/Place';

const Home = () => {
   const [place,setPlace] = useState(Data);
   const [selectPlace, setSelectPlace] = useState([])
   const {name,description,pd} = selectPlace;
   const handleEventHandler =(place) => {
       console.log("Place is click",place)
       setSelectPlace(place)

   }
    return (


        <div className="row">
          <div className="col-sm-6">
          <Card style={{ width: '43.5rem' }}>
 
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>  
    <Link to={`/booking/${pd}`}> <Button variant="primary">Booking</Button></Link>
    
  </Card.Body>
</Card>
                
            </div>
            <div  className="col-sm-6">

                <div  className="row">
                {
                place.map(info => <Place handleEventHandler={handleEventHandler} location={info}></Place>)
            }
                </div>
            </div>

          
            
        </div>
    );
};

export default Home;