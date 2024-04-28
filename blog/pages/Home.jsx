import React from 'react'
import Container from '../src/components/container/Container'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Select from '../src/components/Select'
import PostCard from '../src/components/PostCard'
import Footer from '../src/components/Footer'

function Home() {
  const options = ["lorem", "ipsum", "hello"]
  return (
      <Container>
        <h1>Home</h1>

        <Button>
          Button Done
        </Button>

        <Input label= "username">
        </Input>

        <Select options = {options}
          label = "Status"
        >
        </Select>
        <PostCard></PostCard>
        <Footer/>
      </Container>
  )
}

export default Home