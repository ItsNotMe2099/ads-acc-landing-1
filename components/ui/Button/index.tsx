import styles from './index.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { IButton } from 'types/types'

interface Props extends IButton {
  children?: React.ReactNode
  disabled?: boolean
  href?: string
  className?: string
  fluid?: boolean
  target?: string
  style?: 'white' | 'blue'
}

export default function Button(props: Props) {

  const getClassName = () => {
    return classNames(
      {
        [styles.fluid]: props.fluid,
        [styles.white]: props.style === 'white',
        [styles.blue]: props.style === 'blue'
      }, props.className
    )

  }

  return props.href ?
    <Link
      href={props.href}
      onClick={props.onClick}
      target={props.target}
      className={`${styles.link} ${getClassName()}`}>

      {props.children}

    </Link>
    :
    <button onClick={props.onClick} type={props.type}
      disabled={props.disabled || props.spinner}
      className={`${styles.btn} ${getClassName()}`}>
      <span className={classNames({
        [styles.text]: true,
        [styles.textHidden]: props.spinner,
      })}>{props.children}</span>
    </button>
}

Button.defaultProps = {
  type: 'button',
}
