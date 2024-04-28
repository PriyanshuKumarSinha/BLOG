import { useState } from 'react'
import './App.css'
import conf from '../conf/conf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Blog Website 
      <ul>
      <li>APP URL : {conf.appwriteUrl}</li>
      <li>PROJECT ID : {conf.appwriteProjectId}</li>
      <li>DATABASE ID : {conf.appwriteDatabaseId}</li>
      <li>COLLECTION ID : {conf.appwriteCollectionId}</li>
      <li>BUCKET ID : {conf.appwriteBucketId}</li>
      </ul>
    </>
  )
}

export default App
