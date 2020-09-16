import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Data from '../FakeData/fakedata';
import Place from '../Place/Place';

const Home = () => {
   const [place,setPlace] = useState(Data);
   const handleEventHandler =(place) => {
       console.log("Place is click",place)

   }
    return (


        <div className="row">
          <div className="col-sm-6">
          <Card style={{ width: '42rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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