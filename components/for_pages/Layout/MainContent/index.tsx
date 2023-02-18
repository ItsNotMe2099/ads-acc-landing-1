import Button from '@/components/ui/Button'
import { LINKS } from '@/types/constants'
import Link from 'next/link'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  isMobileMenu?: boolean
}

export default function MainContent({ isMobileMenu }: Props) {

  const items = [
    { label: 'О нас', link: LINKS.about },
    { label: 'Услуги', link: LINKS.services },
    { label: 'Приемущество', link: LINKS.advantages },
    { label: 'Блог', link: LINKS.blog },
    { label: 'FAQ', link: LINKS.faq },
  ]

  return (
    <div className={classNames(styles.root, {[styles.mobile]: isMobileMenu})}>
      {!isMobileMenu ? <div className={styles.label}>
        CAB Agency
      </div> : null}
      <div className={styles.list}>
        {items.map((i, index) =>
          <Link className={styles.item} href={i.link} key={index}>
            {i.label}
          </Link>
        )}
      </div>
      <Button className={styles.btn}>
        Написать
      </Button>
    </div>
  )
}
