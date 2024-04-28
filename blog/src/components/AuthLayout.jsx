import React from 'react'

function Protected({children, authentication = true}) {
    // This will be responsible for navigating the users.
    // i.e if the user if authenticated already, they should not be navigated again to the login or signup page
    // But if the user wants to use something which needs login, then they should be navigated to the login page
  return (
    <>
        {children}
    </>
  )
}

export default Protected