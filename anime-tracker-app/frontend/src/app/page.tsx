// src/app/page.tsx
import React from 'react'
import Head from 'next/head'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - My Anime Tracker</title>
        <meta name="description" content="Track your favorite animes and discover new ones." />
      </Head>
      <div>
        <h1>Welcome to My Anime Tracker</h1>
        {/* Other content */}
      </div>
    </>
  )
}

export default HomePage