import { useState } from 'react'
import './App.css'
import conf from '../conf/conf'
import { authService } from '../appwrite/auth'
import { service } from '../appwrite/config'

function App() {
  const [count, setCount] = useState(0)
  // const email = "1@1.com"
  // const password = 123
  // console.log(authService.createAccount({email, password}))
  // console.log(service.createPost({
  //   title : "title", 
  //   content : "content", 
  //   featuredImage : "featuredImage", 
  //   status : "active", 
  //   userId : "userId", 
  //   slug : "slug"}))
  return (
    <div className='w-full '>
      <h1 className='text-3xl p-4 font-bold'>Blog Website </h1>
      <ul>
      <li>APP URL : {conf.appwriteUrl}</li>
      <li>PROJECT ID : {conf.appwriteProjectId}</li>
      <li>DATABASE ID : {conf.appwriteDatabaseId}</li>
      <li>COLLECTION ID : {conf.appwriteCollectionId}</li>
      <li>BUCKET ID : {conf.appwriteBucketId}</li>
      </ul>
    </div>
  )
}

export default App
