import FooterSphereMobileSvg from '@/components/svg/FooterSphereMobileSvg'
import InstSvg from '@/components/svg/InstSvg'
import TgSvg from '@/components/svg/TgSvg'
import { CONTACTS } from '@/types/constants'
import Image from 'next/image'
import Link from 'next/link'
import MainContent from '../MainContent'
import styles from './index.module.scss'

interface Props {

}

export default function Footer({ }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.sphere}>
        <Image src={'/img/bg/footer.svg'} alt='' fill />
      </div>
      <FooterSphereMobileSvg className={styles.mobileSphere} />
      <div className={styles.container}>
        <MainContent />
        <div className={styles.bottom}>
          <div className={styles.socials}>
            <Link className={styles.inst} href={CONTACTS.instagram}>
              <InstSvg />
            </Link>
            <Link href={CONTACTS.telegram}>
              <TgSvg />
            </Link>
          </div>
          <Link className={styles.email} href={`mailto:${CONTACTS.email}`}>
            HELLO@OFFICIAL.COM
          </Link>
        </div>
      </div>
    </div>
  )
}
