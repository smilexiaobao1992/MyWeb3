import Head from 'next/head'
import Carousel from '../components/carousel'
import Section from '../components/section'

export default function Home() {
  return (
    <div class="container mx-auto">
      <Head>
        <title>Welcome Web3</title>
      </Head>
      <Carousel/>
      <Section/>
      </div>
  )
}
