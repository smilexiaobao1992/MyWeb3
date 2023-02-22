import Head from 'next/head'
import Banner from '../components/banner'
import Section from '../components/section'

export default function Home() {
  return (
    <div class="container mx-auto">
      <Head>
        <title>Welcome Web3</title>
      </Head>
     <Banner/>
      <Section/>
      </div>
  )
}
