import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Place = (props) => {
const{name,img,description,id} = props.location;


return (
        <div className="col-sm-4 places">


            <Card style={{ width: '15rem' ,border:"",   marginTop: "20px"}} >


            <button onClick={() => props.handleEventHandler(props.location)} style={{margin:"px"}}>
            
            <Card.Img variant="top" src={img} style={{padding:"2px"}}/>
             
             
              </button>  

  
</Card>
        </div>
    );
};

export default Place;