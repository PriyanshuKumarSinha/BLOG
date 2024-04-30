import React from 'react'
import {service as appwriteService} from "../appwrite/config.js"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../src/components/container/Container.jsx'
import PostCard from '../src/components/PostCard.jsx'
import { useSelector } from 'react-redux'

function Home() {

  const [posts, setPosts] = useState([])
  const userData = useSelector((state)=>state.auth.userData)

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  if (!userData && posts.length === 0) {
    return (
      <div className='w-full py-8 '>
      <Container>
        <div className="flex flex-wrap">
          <h1>Login to read posts</h1>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex">
          {posts.map((post) => (
            <div className="p-2 " key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home