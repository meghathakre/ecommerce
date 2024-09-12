import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
 import w1 from "../images/1438_x_476_banner.jpg";
 import w2 from "../images/pure.jpg";
 import w3 from "../images/neck.webp";
 import w4 from "../images/bengles.jpg";
import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {addcartData} from './addtocartSlice';
import img from '../images/model2.jpg';


const Home=()=>{
    const[mydata,setMydata]=useState([]);
    const dispatch=useDispatch();
    const loadData=()=>{
        let api="http://localhost:3000/product";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const addDatatocart=(id,name,cate,brand,price,desc,images)=>{
      dispatch(addcartData({id:id,name:name,category:cate,brand:brand,price:price,descrption:desc,images:images, qnty:1}))
    }


  
    const ans=mydata.map((key)=>{
        return(
            <>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.images} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <h4 style={{color:"blue",fontsize:"14px"}}>Brand:{key.brand} {""} For-{key.category}</h4>
        <Card.Text>
          {key.description}
        </Card.Text>
    <h4 style={{color:"red",fontsize:"16px"}}> price :{key.price}</h4>
        <Button variant="primary" onClick={()=>{addDatatocart(key.id,key.name,key.category,key.brand,key.price,key.description,key.images)}}>Add To Cart</Button>
      </Card.Body>
    </Card>




            
            </>
        )
    })
    return(

        <>
        <Carousel>
      <Carousel.Item>
       <img src={w1} style={{width:"100%",height:"530px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={w2} style={{width:"100%",height:"530px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={w3} style={{width:"100%",height:"530px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={w4} style={{width:"100%",height:"530px"}}/>
        <Carousel.Caption>
          <h3>Fouth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div id="proheading">
<h1>Our Premium Product</h1>
    </div>
    <div id ="homeproduct">
      {ans}
    </div>
    </>
    )
}
export default Home;