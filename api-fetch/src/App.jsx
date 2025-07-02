import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [comments, setComments] = useState({})
  const [activePostId, setActivePostId] = useState(null)

  const finalFetch = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const final = await res.json()
      setData(final)

    } catch (error) {
      console.log(error, "error")
    }

  }
  useEffect(() => {
    finalFetch()
  }, [])

  const handleTitleClick = async (postId) => {
    if(activePostId == postId){
      setActivePostId(null)
      return 
    }

    setActivePostId(postId)

    if(!comments[postId]){
      try {
        const res = await fetch( `https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const data = await res.json();
        setComments((prev) => ({...prev, [postId]: data}));
      } catch (error) {
        console.log("error fetching comments", error)
      }
    }
  };
  

  return (
   <div>
    {data.map((post) => (
      <div className='container'>
        <h3 className='heading'  style={{ cursor: "pointer" }}
            onClick={() => handleTitleClick(post.id)}>{post.title}</h3>
        <p>{post.body}</p>

        {activePostId === post.id && comments[post.id] && (
          <div>
            <h4>Comments: </h4>
            {comments[post.id].map((comment) => (
              <div key={comment.id}>
                <p><strong>{comment.name}</strong>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
   </div>
  )
}

export default App
