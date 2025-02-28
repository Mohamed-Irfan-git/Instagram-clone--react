import { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then((data)=> data.json())
        .then(data => setPosts(data)).
        catch(err => console.log(err))
    }, [])
    console.log(posts)
  return (
    <>
    <h1>Feed</h1>
    <div className='d-flex justify-content-center'>
      
        {posts.length > 0? (
          <div>
            {posts.map((post) => (
              <div className='my-3' key={post.postId}>
                <div className='d-flex'>
                  <img className="dp rounded-circle" src={post.profileImage} alt="No profile" />
                  <h5>{post.username}</h5>
                </div>
                <img className='image img-fluid rounded-3 my-4' src={post.imageUrl} alt="no-photo" />
                <div>
                <i className="bi bi-heart text-dark fs-4"></i>
                <i className="bi bi-chat text dark fs-4"></i>
                <i className="bi bi-share text-dark fs-4"></i>
                <i className="bi bi-send text-dark fs-4"></i>
                </div>
                <div>
                  <b>{post.likes} Likes</b>

                </div>
                <p className='mb-5'>
                  {post.caption}
                </p>

              </div>

            ))}
          
            
          </div>
        ) : (
          <div>
            Loading posts
          </div>
        )
      }
    </div>
    </>
  )
}

export default Posts
