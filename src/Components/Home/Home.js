import React, { useState, useEffect } from 'react';
import Post from '../Post/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [] )

    return (
            <div>
                {
                  posts.map(posts => <Post posts ={posts}></Post>)
                }
            </div>

    );
};

export default Home;