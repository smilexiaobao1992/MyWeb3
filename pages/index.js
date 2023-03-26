import Head from 'next/head'
import Banner from '../components/banner'
import Section from '../components/section'
import SectionImage from '../components/section_image'
import SectionAudio from '../components/section_audio'
import SectionVideo from '../components/section_video'


export default function Home() {
  return (
    <div class="mx-auto">
      <Head>
        <title>Welcome AILearn</title>
      </Head>
      <Banner/>
      <Section/>
      <SectionImage/>
      <SectionAudio/>
      <SectionVideo/>
      </div>
  )
}
