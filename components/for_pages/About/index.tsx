import Image from 'next/image'
import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Numbers from './Numbers'

interface Props {

}

export default function About({ }: Props) {

  return (
    <ContentComponent title='About Us' className={styles.root} id='about'>
      <div className={styles.left}>
        <Image className={styles.hand} src='/img/About/hand.png' alt='' fill />
        <div className={styles.text}>
          CBA Agency has been<br />providing TikTok agency<br />accounts for over three years.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <Numbers number='+201' text='Completed project' />
          <Numbers number='+250' text='Satisfied clients' />
        </div>
        <div className={styles.bottom}>
          <Numbers number='+294' text='Passed moderation' />
        </div>
      </div>
    </ContentComponent>
  )
}
