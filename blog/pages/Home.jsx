import React from 'react'
import Container from '../src/components/container/Container'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Select from '../src/components/Select'
import PostCard from '../src/components/PostCard'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import LogoutBtn from '../src/components/Header/LogoutBtn'
import RTE from '../src/components/RTE'
import PostForm from '../src/components/Post-orm/PostForm'

function Home() {
  const options = ["lorem", "ipsum", "hello"]
  return (
    <Container>
        <PostForm/>
        <h1>Home</h1>

        <Button>
          Button Done
        </Button>
        <LogoutBtn />
        <Input label= "username">
        </Input>

        <Select options = {options}
          label = "Status"
        >
        </Select>
        <PostCard></PostCard>

        <Header>
          
        </Header>

        <Footer/>
        

      </Container>
  )
}

export default Home