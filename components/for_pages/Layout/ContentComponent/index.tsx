import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  title: string
  className?: string
}

export default function ContentComponent({ children, title, className }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={classNames(styles.content, className)}>
        {children}
      </div>
    </div >
  )
}
