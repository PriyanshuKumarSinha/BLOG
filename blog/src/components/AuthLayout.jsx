import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {
    // This will be responsible for navigating the users.
    // Here we will check two condition : 
    //  1. if the user is auththenticated : authStatus
    //  2. if the element needs authentication : authentication

    // Like Home page needs authentication
    //  therefore, to visit home page, authentication should be true and authstatus should also be true


  const authStatus = useSelector((state)=>state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    if(authentication && authStatus !== authentication){
      // authentication === true && authStatus !== true
      // page where authentication is required is Home Page
      // authStatus != true means the user is not logged in 
      // that means the user needs to login to visit this page
      navigate('/login')
    }else if(!authentication && authStatus !== authentication){
      // authentication === false => !authentication = true && authStatus === true
      // pages where authentication is not required are : login and signup pages
      // login and singup pages will only be available if the user is not already authenticated (i.e authStatus === false)
      navigate('/')
    }
    setLoader(false);
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>
  // if the loader === true show nothing on screen, once its false, show the children on the screen
}

export default Protected


