import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Data from '../FakeData/fakedata';
import { PlaceContext} from '../../App'


const Booking = () => {
  const [matchPlace,setMatchPlace] = useContext(PlaceContext);
// above code is from material ui

   let {id} = useParams();
       const [fakedata,setFakedata]=useState(Data);
        const [metch,setMetch] = useState([]);
        const {name,description} = metch;
          
         setMatchPlace(metch);

        

 useEffect(() =>{
const bookingData = fakedata.find(pt => pt.id == id)
// console.log('booking', bookingData);
setMetch(bookingData);

    },[fakedata, id])


//     console.log('match',metch);
             
// console.log('matchPlace',matchPlace);
     
    return (
        <div  className="background">

            <div  className="row">
      <div  className="col-sm-6">
      <Card style={{ width: '39rem', height:'39rem',padding:'5rem'}}>

  <Card.Body>
    <Card.Title><h2>{name}</h2></Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div  className="col-sm-6">
<Card style={{ width: '39rem', height:'39rem',padding:'5rem'}}>
<Card.Body>
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Orgin</Form.Label>
    <Form.Control type="text" placeholder="Dhaka" required/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Destination</Form.Label>
    <Form.Control type="text" placeholder={name} />
  </Form.Group>

<div  className="row">
  <div  className="col-sm-6"><h5>Form:  -<input type="date" id="myDate" value="2014-02-09"required></input>  </h5></div>
  <div  className="col-sm-6"><h5>To:  -<input type="date" id="myDate" value="2014-02-09" required></input>  </h5></div>
</div>
<Link to={"/hotelDetail"}>
<Button variant="primary" size="lg" block>
   Start Booking
  </Button>
  </Link>
</Form>
</Card.Body>
</Card>
</div>


</div>       
 </div>
    );
};

export default Booking;