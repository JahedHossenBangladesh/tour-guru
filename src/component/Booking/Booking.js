import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Data from '../FakeData/fakedata';

const Booking = () => {


   let {id} = useParams()
       const [fakedata,setFakedata]=useState(Data);
        const [metch,setMetch] = useState([]);
        const {name,description} = metch;
         const newid = metch.id;     
 useEffect(() =>{
const bookingData = fakedata.find(pt => pt.id == id)
console.log('booking', bookingData);
setMetch(bookingData);

    },[])

    console.log('match',metch);
     
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
            <p>  the name is {metch.name}</p>
            <p>This is the {description}</p>
</div>


</div>       
 </div>
    );
};

export default Booking;