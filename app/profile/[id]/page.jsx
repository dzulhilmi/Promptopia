"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({params}) => {
  const [posts, setPosts] = useState([]);
  const searchparams = useSearchParams();
  const userId = params.id;
  const userName = searchparams.get('name');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      
      setPosts(data);
    }

    if(userId) fetchPosts();
  }, [userId])

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
    />
  )
}

export default UserProfile