// src/app/anime/[id]/page.tsx
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const AnimeDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Anime Details - {id}</title>
        <meta name="description" content={`Details about the anime with ID ${id}`} />
      </Head>
      <div>
        <h1>Anime Details for {id}</h1>
        {/* Fetch and display anime details based on the ID */}
      </div>
    </>
  )
}

export default AnimeDetailsPage