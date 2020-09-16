import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Place = (props) => {
const{name,img,description} = props.location;


return (
        <div className="col-sm-4 places">
            <Card style={{ width: '15rem' ,border:"",   marginTop: "20px"}} >

            <button onClick={() => props.handleEventHandler(props.location)} style={{margin:"px"}}>
            <Card.Img variant="top" src={img} style={{padding:"2px"}}/>
              </button>  

  {/* <Card.Body>
<Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary" onClick={() => props.handleEventHandler(props.location)}>Go somewhere</Button>
  </Card.Body> */}
</Card>
        </div>
    );
};

export default Place;