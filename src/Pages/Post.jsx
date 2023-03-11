import React from 'react'
import { posts } from '../data'

const Post = () => {
    const post = posts[1]
  return (
    <div className='post'>
        <img src={post.img} alt="" className='postImg'/>
        <h2 className='postTitle'>{post.title}</h2>
        <p className='postDesc'>{post.desc}</p>
        <p className='postLongDesc'>{post.longDesc}</p>

    </div>
  )
}

export default Post