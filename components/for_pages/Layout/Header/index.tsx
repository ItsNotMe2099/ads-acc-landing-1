import HiddenXs from '@/components/ui/HiddenXS'
import VisibleXs from '@/components/ui/VisibleXS'
import Image from 'next/image'
import { useState } from 'react'
import MainContent from '../MainContent'
import styles from './index.module.scss'

interface Props {

}

export default function Header({ }: Props) {

  const [isMenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false)

  const handleOpenMobileMenu = () => {
    if (typeof window !== undefined) {
      if (isMenuMobileOpen) {
        document.body.classList.remove('modal-open')
      } else {
        document.body.classList.add('modal-open')
      }

    }

    setMenuMobileOpen(!isMenuMobileOpen)
  }

  return (
    <div className={styles.root}>
      <HiddenXs>
        <MainContent />
      </HiddenXs>
      <VisibleXs>
        <>
          <div className={styles.mobile}>
            <div className={styles.label}>
              CAB Agency
            </div>
            {isMenuMobileOpen ?
              <div className={styles.menu} onClick={handleOpenMobileMenu} >
                <Image src={'/img/Header/close.svg'} alt='' fill />
              </div>
              :
              <div className={styles.menu} onClick={handleOpenMobileMenu}>
                <Image src={'/img/Header/menu.svg'} alt='' fill />
              </div>
            }
          </div>
          {isMenuMobileOpen &&
            <div className={styles.dropdownMobile}>
              <MainContent isMobileMenu/>
            </div>}
        </>
      </VisibleXs>
    </div>
  )
}
