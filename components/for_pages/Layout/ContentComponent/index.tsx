import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  title: string
  className?: string
  id: string
}

export default function ContentComponent({ children, title, className, id }: Props) {

  return (
    <div className={styles.root} id={id}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={classNames(styles.content, className)}>
        {children}
      </div>
    </div >
  )
}
