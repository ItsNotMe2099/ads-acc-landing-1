import Button from '@/components/ui/Button'
import Image from 'next/image'
import { ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
  title: string
  text: () => ReactElement
}

export default function Item({ title, text }: Props) {

  return (
    <div className={styles.root}>
      <Image className={styles.bg} src={'/img/Services/bg.png'} alt='' fill />
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.text}>
        {text()}
      </div>
      <div className={styles.wrapper}>
        <Button style='blue'>More</Button>
      </div>
    </div>
  )
}
