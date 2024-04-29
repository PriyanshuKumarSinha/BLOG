import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { service as appWriteService } from '../appwrite/config';
import Container from '../src/components/container/Container';
import PostForm from '../src/components/PostForm/PostForm.jsx'

function EditPost() {
  const [post,setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(async ()=>{
    if(slug){
      const post = await appWriteService.getPost(slug)
      if(post){
        setPost(post);
      }
      else{
        navigate('/')
      }
    }
  },[slug, navigate]);

  return (
    <div className="py-6">
      <Container>
        <PostForm post = {post}/>
      </Container>
    </div>
  )
}

export default EditPost