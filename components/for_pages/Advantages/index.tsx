import ContentComponent from '../Layout/ContentComponent'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function Advantages({ }: Props) {

  return (
    <ContentComponent title='Преимущества' className={styles.root}>
      <div className={styles.content}>
        <Item title='Премодерация' text=
          {() => <>
            <div className={styles.top}>
              Что такое премодерация в AdsAces: мы отправляем ваш креатив+линк+гео таргетинга для предварительной проверки аккаунт-менеджерам ТТ. Модераторы TikTok проверяют и выдают свои комментарии в течение 1-2 рабочих дней, которые мы направляем вам. Если все хорошо, то только после этого, мы приступаем к тестированию.</div>
            <div className={styles.bottom}>Что такое премодерация в AdsAces: мы отправляем ваш креатив+линк+гео таргетинга для предварительной проверки аккаунт-менеджерам ТТ. </div>
          </>}
          image='/img/Advantages/tiktok.png'
        />
        <Item title='Премодерация' text=
          {() => <>
            <div className={styles.top}>
              Что такое премодерация в AdsAces: мы отправляем ваш креатив+линк+гео таргетинга для предварительной проверки аккаунт-менеджерам ТТ. Модераторы TikTok проверяют и выдают свои комментарии в течение 1-2 рабочих дней, которые мы направляем вам. Если все хорошо, то только после этого, мы приступаем к тестированию.</div>
            <div className={styles.bottom}>Что такое премодерация в AdsAces: мы отправляем ваш креатив+линк+гео таргетинга для предварительной проверки аккаунт-менеджерам ТТ. </div>
          </>}
          image='/img/Advantages/wallet.png'
        />
      </div>
    </ContentComponent>
  )
}
