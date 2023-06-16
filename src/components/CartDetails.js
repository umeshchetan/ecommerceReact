import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Del, Add, Rmv_Dec } from './redux/actions'
import { useNavigate } from 'react-router-dom'
function CartDetails() {
    const getdata = useSelector((state) => state.cart_reducer.Cart_Data)
    const { id } = useParams()
    // console.log(id);

    const [data, setData] = useState([])

    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id == id
        });
        setData(compareData)
    }
    useEffect(() => {
        compare()
    }, [id])

    const dispatch = useDispatch()
    const history = useNavigate()

    const handledelete = (id) =>{
        dispatch(Del(id))
        history("/")
    }

    const handleInc = (item) =>{
        dispatch(Add(item))
    }

    const handleDec = (iteams) =>{
        dispatch(Rmv_Dec(iteams))
    }
    return (
        <div>
            
            {
                data.map((elements) => {
                    return (
                        <>
                        <div className='row container d-flex justify-content-between align-items-center'>
                            <div className='col'>
                                <Card.Img variant="top" src={elements.imgdata} style={{ width: "100%", height: "250px" }} />
                            </div>
                            <div className='col'>
                                <h2>Restaurant Name: {elements.rname}</h2>
                                <h2>Description: {elements.somedata}</h2>
                                <h2>Price: {elements.price}</h2>
                                <div className='d-flex justify-content-around align-items-center mb-3 mt-3' style={{width:"150px",height:"50px",cursor:"pointer",backgroundColor:"silver"}}>
                                    <span onClick={()=>handleDec(elements)}>-</span>
                                    <span>{elements.qnty}</span>
                                    <span onClick={()=>handleInc(elements)}>+</span>
                                </div>
                                <Button className="btn btn-danger" onClick={()=>handledelete(elements.id)}>Delete</Button>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    );
}

export default CartDetails;