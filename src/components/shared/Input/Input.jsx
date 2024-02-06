import { classNames } from '@utils/classNames'
import css from './Input.module.scss'

export const Input = ({ className, label, optional, ...props }) => {
   return (
      <label className={classNames(className, css.input)}>
         <p>
            {label} {optional && <span>(опц.)</span>}
         </p>

         <input {...props} />
      </label>
   )
}
