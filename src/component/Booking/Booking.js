import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../FakeData/fakedata'

const Booking = (props) => {


     const {pd} = useParams()
    const [fakedata,setFakedata]=useState(Data);
    const [match,setMatch] = useState([]);
console.log(fakedata);
    useEffect(() =>{
const bookingData = fakedata.filter(pt => pt.pd === pd)
console.log('booking',bookingData);
setMatch(bookingData);

    },[])
console.log(match);

     console.log(pd)
    return (
        <div>
            <p>This is boooking</p>
        </div>
    );
};

export default Booking;