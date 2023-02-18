import styles from './index.module.scss'

interface Props {
  number: string
  text: string
}

export default function Numbers({ number, text }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.number}>
        {number}
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}
