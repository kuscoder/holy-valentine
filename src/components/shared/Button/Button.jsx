import { classNames } from '@utils/classNames'
import css from './Button.module.scss'

export const Button = ({ className, label, theme, ...props }) => (
   <button
      className={classNames(className, css.button, css[theme])}
      type="button"
      {...props}
   >
      {label}
   </button>
)
