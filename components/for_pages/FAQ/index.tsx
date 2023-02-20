import Accordion from '@/components/ui/Accordion'
import Image from 'next/image'
import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'

interface Props {

}

export default function FAQ({ }: Props) {

  const items = [
    { title: 'Who should run the TikTok Agency account?', content: <ul className={styles.list}><li>Small and medium-sized SMBs looking to run conversion ads. Units want to increase traffic to e-commerce platforms or brandings.</li></ul> },
    { title: 'To rent a TikTok Ad account, what do you need to prepare?', content: <ul className={styles.list}><li>Products, sevice which need to register</li><li>TikTok channel related to service, product</li></ul> },
    { title: 'How could we deal with disabled ad account?', content: <ul className={styles.list}><li>If you have to struggle to find a way to appeal disabled account with the personal TikTok ad account, CBA team will support to appeal it for free with the Agency ad account</li></ul> },
  ]

  return (
    <ContentComponent title='F.A.Q.' className={styles.root} id='faq'>
      <div className={styles.content}>
        <div className={styles.left}>
          {items.map((item, index) =>
            <Accordion key={index} title={item.title} content={item.content} />
          )}
        </div>
        <div className={styles.right}>
          <Image src={'/img/FAQ/bg.png'} alt='' fill />
        </div>
      </div>
    </ContentComponent>
  )
}
