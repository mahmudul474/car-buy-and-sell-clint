import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Loading from '../../Sheard/Loading/Loading';
import BlogsCard from '../BlogsCard/BlogsCard';

const Blogs = () => {
   
  const [blogs, setBlog] = useState([])

  const [loading, setLoading] = useState(true)
   
    
  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => {
      setBlog(data)
      setLoading(false)
    })
    .catch(error => console.error(error))
  },[])

  if(loading){
    return <Loading/>
  }

  return (
    <div className='container'>
      <h2 className="text-center"> Our New Blogs</h2>

      <div class="row row-cols-1 row-cols-md-2 g-4 mt-4 mb-4">

        {
          blogs.map(blog => <BlogsCard 
            key={blog.id}
            blog={blog}
          ></BlogsCard>)
        }

      </div>

    </div>
  );
};

export default Blogs;