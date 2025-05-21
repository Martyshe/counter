import s from './Button.module.css'
type Props = {
    title: string
    onClick?: ()=>void
    disabled?: boolean
}

export function Button({ title, onClick, disabled }: Props) {
  return (
    <button disabled={disabled} className={disabled ? s.disabledBtn : s.normalBtn } onClick={onClick}>{title}</button>
  )
}
