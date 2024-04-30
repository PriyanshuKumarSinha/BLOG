import React from 'react'
import Container from '../src/components/container/Container'
import PostForm from '../src/components/PostForm/PostForm'

function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost