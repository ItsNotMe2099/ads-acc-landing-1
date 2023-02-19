import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function Services({ }: Props) {

  return (
    <ContentComponent title='Услуги' className={styles.root} id='services'>
      <div className={styles.title}>
        Устали искать агентские аккаунты TikTok без НДС?
      </div>
      <div className={styles.content}>
        <Item title='US seller' text={() => <>Наша компания зарегистрирована в США, для резидентов Америки площадка TikTok не установила комиссию на пополнение Бизнес центра, то есть у нас нет НДС на пополнение кабинетов. Это значительно снижает наши затраты и дает нам возможность ставить низкую комиссию клиентам.</>} />
        <Item title='Комиссия'
          text=
          {() =>
            <div>Белые вертикали:от 0 до 2000 дейли - 10%<br />
              от 2000 до 5000 дейли - 6%<br />
              от 5000 и выше - 5%<br />
              Серые вертикали : 15% после пре-модерации.</div>
          } />
      </div>
    </ContentComponent>
  )
}
