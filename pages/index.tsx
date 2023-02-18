import About from '@/components/for_pages/About'
import Advantages from '@/components/for_pages/Advantages'
import Banner from '@/components/for_pages/Banner'
import FAQ from '@/components/for_pages/FAQ'
import Layout from '@/components/for_pages/Layout'
import Services from '@/components/for_pages/Services'
import styles from './index.module.scss'


export default function Index() {
  return (
    <Layout>
      <Banner />
      <About />
      <Services />
      <Advantages />
      <FAQ />
    </Layout>
  )
}
