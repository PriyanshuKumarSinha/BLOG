import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { service as appWriteService } from '../appwrite/config';
import Container from '../src/components/container/Container';
import Button from '../src/components/Button';

function Post() {
  const [post, setPost] = useState(null);
  const slug = useParams(); //{slug : ""}
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(async() => {
    if(slug){
      const post = await appWriteService.getPost(slug);
      if(post){
        setPost(post);
      }
      else{
        navigate("/")
      }
    }
  }, [slug, navigate])

  // Post should only be editable if user is author of the post
  const isAuthor = post && userData ? post.userId === userData.$id : false

  const deletePost = async(post) =>{
    const status = await appWriteService.deletePost(post.$id)
    if(status){
      await appWriteService.deleteFile(post.featuredImage);
      navigate("/");
    }
  }

  return post ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img src= {appWriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl'/>
          {isAuthor && (
            <div className='absolute-right-6 top-6'>
                <Link 
                  to={`/edit-post/${post.$id}`}
                />
                <Button className='mr-3' bgColor='bg-green-500'>
                  Edit
                </Button>
                <Button bgColor='bg-red-500' onClick = {deletePost}>
                  Delete
                </Button>
            </div>
          )}
        </div>
        <div className='w-full mb-6'>
          <h1 className='text-2xl font-bold'>{post.title}</h1>
          <div className='browser-css'>
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null
}

export default Post