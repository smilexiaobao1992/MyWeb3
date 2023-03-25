import Head from 'next/head'
import Banner from '../components/banner'
import Section from '../components/section'
import Section1 from '../components/section1'

export default function Home() {
  return (
    <div class="mx-auto">
      <Head>
        <title>Welcome Web3</title>
      </Head>
      <Banner/>
      <Section/>
      <Section1/>
      </div>
  )
}
