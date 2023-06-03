import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carosel.css';

import AddPost from './AddPost';


import axios from 'axios';


const apidata = "https://jsonplaceholder.typicode.com/posts"
const apidata1 = `https://jsonplaceholder.typicode.com/comments`

const Carosel = () => {

  const [post, setTitle] = useState([]);
  const [coment, setComents] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get(apidata);

      setTitle(response.data)


    }
    getStoreData();
    
  }, []);
useEffect(()=>{
  async function getComentsData(){
    const res = await axios.get(apidata1);
    setComents(res.data)
    console.log(res.data)
  }
  getComentsData();
  
},[]);
  return (

    <div className='block_main'>
     
        <Carousel variant="dark" className='carosel_size'>
          {post.map((post) => (
            <Carousel.Item>

              <div className='position_carosel_block'>
              <div className='post_block'>
                <div className='id_post'>Post_id: {post.id}</div>
                <div className='title_post'>Title: {post.title}</div>
                <div className='body_post'>Body: {post.body}</div>
              </div>
              <div className='coment_block'>
                
              {coment
                  .filter((coment) => coment.postId == post.id)
                  .map((coment) => (
                    <div key={coment.id}>
                      <div className='id_coments'>PostId:{coment.postId}</div>
                      <div className='name_coments'>Name: {coment.name}</div>
                      <div className='email_coments'>Email: {coment.email}</div>
                      <div className='body_coments'>Body: {coment.body}</div>
                    </div>
                  ))}
                  
              </div>
              </div>
             
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
  )
}
export default Carosel
