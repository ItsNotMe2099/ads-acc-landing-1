import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function Services({ }: Props) {

  return (
    <ContentComponent title='Services' className={styles.root} id='services'>
      <div className={styles.title}>
        Tired of looking for TikTok agent accounts without VAT?
      </div>
      <div className={styles.content}>
        <Item title='US seller' text={() => <>Our company is registered in the USA, for residents of America, the TikTok site has not set a commission for replenishing the Business Center, that is, we do not have VAT on replenishing cabinets. This significantly reduces our costs and enables us to charge low commissions to our clients.</>} />
        <Item title='Commission'
          text=
          {() =>
            <div>White verticals: from 0 to 2000 daily - 10%<br />
              from 2000 to 5000 daily - 6%<br />
              from 5000 and above - 5%<br />
              Gray verticals: 15% after pre-moderation.</div>
          } />
      </div>
    </ContentComponent>
  )
}
