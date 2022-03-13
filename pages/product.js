import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../components/card'


export default function product() {
  return (
    <div>
     <Head>
        <title>PRODUCTS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
     </Head>
         <Card/>
      <Link href="/">
        <a>Back to home</a>
      </Link>
  
  </div>
  )
}