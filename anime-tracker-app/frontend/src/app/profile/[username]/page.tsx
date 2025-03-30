// src/app/profile/[username]/page.tsx
'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Head from 'next/head'

const UserProfilePage = () => {
  const { username } = useParams()

  return (
    <>
      <Head>
        <title>{username}'s Profile - My Anime Tracker</title>
        <meta name="description" content={`Profile page of user ${username}`} />
      </Head>
      <div>
        <h1>Profile of {username}</h1>
        {/* Fetch and display user profile details */}
      </div>
    </>
  )
}

export default UserProfilePage