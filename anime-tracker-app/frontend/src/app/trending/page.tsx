// src/app/page.tsx
import React from 'react'
import Head from 'next/head'

const TrendingPage = () => {
  return (
    <>
      <Head>
        <title>Trending - My Anime Tracker</title>
        <meta name="description" content="Track your favorite animes and discover new ones." />
      </Head>
      <div>
        <h1>This is the Trending Pager</h1>
      </div>
    </>
  )
}

export default TrendingPage