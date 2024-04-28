import React from 'react'
import {Link} from 'react-router-dom'
import {service as appWriteService} from '../../appwrite/config'

function PostCard({
    $id,
    title,
    featuredImage = "file-662e6d35002f50846b7d",
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appWriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'
                />
            </div>
            <h2 className={`text-xl font-bold`}>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard