import BannerSphereMobileSvg from '@/components/svg/BannerSphereMobileSvg'
import BannerSphereLgSvg from '@/components/svg/BannerSphereLgSvg'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import styles from './index.module.scss'
import BannerSphereSmSvg from '@/components/svg/BannerSphereSmSvg'

interface Props {

}

export default function Banner({ }: Props) {

  return (
    <div className={styles.root}>
      <BannerSphereMobileSvg className={styles.sphereMobile} />
      <div className={styles.top}>
        <BannerSphereLgSvg className={styles.sphereTopLeft} />
        <BannerSphereSmSvg className={styles.sphereTopRight} />
        <div className={styles.img}>
          <Image src={'/img/Banner/hearth.png'} alt='' fill />
        </div>
        <div className={styles.text}>
          TIKTOK ADVERTISER ACCOUNTS<br /> FROM OFFICIAL US AGENCY
        </div>
      </div>
      <div className={styles.bottom}>
        <BannerSphereLgSvg className={styles.sphereBottomRight} />
        <BannerSphereSmSvg className={styles.sphereBottomLeft} />
        <Button style='blue'>Let&apos;s start</Button>
        <Button href='/#services'>To learn more</Button>
      </div>
    </div>
  )
}
