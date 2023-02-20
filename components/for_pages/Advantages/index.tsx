import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function Advantages({ }: Props) {

  const steps = [
    { step: 1, desc: 'Customers provide Website/Landing page, Link shop on e-commerce platform, TikTok channel to run' },
    { step: 2, desc: 'The client top up all advertising fees and budgets.' },
    { step: 3, desc: 'Completing information, BC registers TikTok ad accounts for customers' },
    { step: 4, desc: 'BC shares TikTok Agency ad account with customers via email' }
  ]

  return (
    <ContentComponent title='Advantages' className={styles.root} id='advantages'>
      <div className={styles.content}>
        <Item title='Pre-moderation' text=
          {() =>
            <div className={styles.steps}>
              {steps.map((i) =>
                <div className={styles.text} key={i.step}>
                  <div className={styles.step}>
                    Step {i.step}
                  </div>
                  <div className={styles.desc}>
                    {i.desc}
                  </div>
                </div>
              )}
            </div>}
          image='/img/Advantages/tiktok.png'
        />
        <Item title='Pre-moderation' text=
          {() => <>
            <div className={styles.top}>
              What is pre-moderation in AdsAces: we send your creative+link+geo targeting to TT account managers for preliminary verification. TikTok moderators review and issue their comments within 1-2 business days, which we send to you. If everything is fine, then only after that, we proceed to testing.</div>
            <div className={styles.bottom}>What is pre-moderation in AdsAces: we send your creative+link+geo targeting to TT account managers for preliminary verification. </div>
          </>}
          image='/img/Advantages/wallet.png'
        />
      </div>
    </ContentComponent>
  )
}
