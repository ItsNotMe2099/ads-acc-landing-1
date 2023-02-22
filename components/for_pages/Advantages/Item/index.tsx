import Button from '@/components/ui/Button'
import { CONTACTS } from '@/types/constants'
import Image from 'next/image'
import { ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
  title: string
  text: () => ReactElement
  image: string
}

export default function Item({ title, text, image }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.text}>
          {text()}
        </div>
        <div className={styles.wrapper}>
          <Button style='blue' href={CONTACTS.telegram}>Let&apos;s start</Button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.img}>
          <Image src={image} alt='' fill />
        </div>
      </div>
    </div>
  )
}
