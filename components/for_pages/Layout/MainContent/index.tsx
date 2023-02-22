import Button from '@/components/ui/Button'
import { CONTACTS, LINKS } from '@/types/constants'
import Link from 'next/link'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  isMobileMenu?: boolean
}

export default function MainContent({ isMobileMenu }: Props) {

  const items = [
    { label: 'About Us', link: LINKS.about },
    { label: 'Services', link: LINKS.services },
    { label: 'Advantages', link: LINKS.advantages },
    { label: 'Blog', link: LINKS.blog },
    { label: 'FAQ', link: LINKS.faq },
  ]

  return (
    <div className={classNames(styles.root, { [styles.mobile]: isMobileMenu })}>
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
      <Button href={CONTACTS.telegram} className={classNames(styles.btn, { [styles.none]: !isMobileMenu })}>
        Write
      </Button>
    </div>
  )
}
