import Image from 'next/image'
import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Numbers from './Numbers'

interface Props {

}

export default function About({ }: Props) {

  return (
    <ContentComponent title='О нас' className={styles.root} id='about'>
      <div className={styles.left}>
        <Image className={styles.hand} src='/img/About/hand.png' alt='' fill />
        <div className={styles.text}>
          AdsAces более трех лет<br /> предоставляет агентские<br /> аккаунты TikTok.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <Numbers number='+201' text='Завершенный проект' />
          <Numbers number='+250' text='Довольных клиентов' />
        </div>
        <div className={styles.bottom}>
          <Numbers number='+294' text='Прошедших модерацию' />
        </div>
      </div>
    </ContentComponent>
  )
}
