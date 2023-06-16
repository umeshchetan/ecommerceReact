import React, { useState, useEffect } from 'react';
import '../App.css'
import { Nav, Container, Navbar, NavLink, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from "react-bootstrap"
import { Del } from './redux/actions'
import { useDispatch } from 'react-redux'
import axios from 'axios'


function Header() {
    // const [show, setShow] = useState(false)
    const [close, setClose] = useState(false)
    const [price, setPrice] = useState(0) // console.log(price);
    // const [data, setData] = useState([])
    // const [formdata, setFormdata] = useState({
    //     title: '',
    //     body: '',
    // });

    const getdata = useSelector((state) => state.cart_reducer.Cart_Data)
    //  console.log(getdata)

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(Del(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((item, k) => {
            price = item.price + price;
        })
        setPrice(price)
    }

    useEffect(() => {
        total();
    }, [total])

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //             .then((result) => setData(result.data))
    //     } catch (error) {
    //         console.log(Error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const handleChange = (e) => {
    //     const {name,value} = e.target
    //     setFormdata({...formdata,[name]:value})
    //     // setFormdata(values =>({ ...values, [e.target.name]: e.target.value }))
    // }
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const res =  await axios.post('https://jsonplaceholder.typicode.com/posts',formdata)
    //     // .then((result) => setFormdata(result.data));
    //     setData(res.data);
    // }

    // const hamdleDelete = async (id) =>{
    //     const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     setData(res.data.filter(p => p.id !== id))
    // }
    return (
        <div className='header'>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>E-Commerce</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        </Nav>
                        <div onClick={() => setClose(!close)} style={{ color: "#FFF" }}>
                            <h3 style={{ cursor: 'pointer' }} >Cart[{getdata.length}]</h3>
                        </div>
                    </Container>
                </Navbar>
                {close && <div show={close}>
                    <table className='row  cart-container' >
                        {
                            getdata && getdata.length > 0 ? (getdata.map((elem) => {
                                return (
                                    <>
                                        <tbody>
                                            <thead className='d-flex justify-content-around'>
                                                <td>Photo</td>
                                                <td>Product Details</td>
                                            </thead>
                                            <tr>
                                                <Link onClick={() => setClose(false)} to={`/cart/${elem.id}`} ><Card.Img variant="top" src={elem.imgdata} style={{ width: "90px", height: "90px", cursor: 'pointer' }} /></Link>
                                                <td className='row'><h4>Restaurant Name:</h4>{elem.rname}</td>
                                                <td className='row'><p><strong style={{ color: 'red' }}>$</strong>{elem.price}</p></td>
                                                <td className='row'><h4>Rating:{elem.rating}*</h4></td>
                                                <td className='row'><h3>Quantity:{elem.qnty}</h3></td>
                                                <Button className="btn btn-danger" onClick={() => handleDelete(elem.id)}>Delete</Button>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })
                            ) : (<div className='d-flex align-items-center justify-content-center'>
                                "No data Available"
                            </div>)
                        }
                        <h3>Total : {price}</h3>
                    </table >
                </div>}
            </div>
            {/* <form onSubmit={(e) => handleSubmit(e)}>
                Name: <input type="text" name="title" value={formdata.title || ''} onChange={(e) => handleChange(e)} /> <br />
                Title: <input type="text" name="body" value={formdata.body || ''} onChange={(e) => handleChange(e)} /> <br />
                <input type='submit' value="Add Data" />
            </form>
            <div>
                <table>
                    <tr>
                       
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        <Button className='btn btn-primary mx-3'>Edit</Button>
                                        <Button className='btn btn-danger' onClick={()=>hamdleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div> */}
        </div>
    );
}

export default Header;