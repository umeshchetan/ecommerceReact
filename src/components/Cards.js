import React, { useState } from 'react';
import Cardsdata from './Cardsdata';
import { Card, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Add } from './redux/actions';

function Cards() {
    const [data, setData] = useState(Cardsdata)

    const dispatch = useDispatch()

    const handleSendData = (e) =>{
        dispatch(Add(e));
        // console.log(e);
    }

    return (
        <div className='row d-flex align-items-center justify-content-center' style={{zIndex:"100"}}>
            {
                data.map((items, idx) => {
                    return (
                            <Card className='m-3' style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={items.imgdata} style={{ width: "100%", height: "250px" }} />
                                    <Card.Body>
                                        <Card.Title><h2>Name</h2>{items.rname}</Card.Title>
                                        <Card.Text>
                                            {items.somedata}
                                            <p><h3>Price</h3>{items.price}</p>
                                            <p><h3>Rating</h3>{items.rating}*</p>
                                        </Card.Text>
                                        <Button onClick={()=>handleSendData(items)} variant="primary">Add Item</Button>
                                    </Card.Body>
                                </Card>
                    )
                })
            }
        </div>
    );
}

export default Cards;