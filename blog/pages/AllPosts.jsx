import React, { useEffect, useState } from 'react'
import { service as appWriteService } from '../appwrite/config';
import Container from '../src/components/container/Container';
import PostCard from '../src/components/PostCard';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts().then((posts)=> setPosts(posts.documents))
  }, []);

  if(posts?.length === 0){
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1>Login to Read Post</h1>
        </div>
      </Container>
    </div>
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) =>
            <div
              key={post.$id}
              className='p-2 w-1/4'>

              <PostCard
                {...post} />
            </div>

          )}
        </div>
      </Container>
    </div>

  )

}

export default AllPosts