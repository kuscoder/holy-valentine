import { useState } from 'react'
import { classNames } from '@utils/classNames'
import { useFocusOut } from '@hooks/useFocusOut'
import { Flow } from '@shared/Animations/Flow'
import chevronDown from '/chevron-down.svg'
import css from './Select.module.scss'

export const Select = ({ className, label, optional, placeholder, textIsEmpty, value, setValue, options }) => {
   const [focus, setFocus] = useState(false)

   const container = useFocusOut(focus, () => {
      setFocus(false)
   })

   const chooseHandler = value => () => {
      setFocus(false)
      setValue(value)
   }

   return (
      <div
         className={classNames(className, css.select, { [css.focus]: focus })}
         ref={container}
      >
         <label className={css.target}>
            <p>
               {label} {optional && <span>({optional})</span>}
            </p>

            <button
               className={classNames('focus-accent', css.value)}
               onFocus={() => setFocus(true)}
               type="button"
            >
               <span className={classNames({ [css.placeholder]: !value })}>{value || placeholder}</span>

               <img
                  src={chevronDown}
                  alt="chevronDown"
               />
            </button>
         </label>

         <Flow
            type="fade"
            active={focus}
         >
            <ul className={classNames('scroll-y', css.options)}>
               {options.map(option => (
                  <li
                     className={classNames(css.option, { [css.choosed]: option.value === value })}
                     key={option.value}
                  >
                     <button
                        type="button"
                        onClick={chooseHandler(option.value)}
                     >
                        <span>{option.label}</span>
                     </button>
                  </li>
               ))}

               {!options.length && <li className={css.empty}>{textIsEmpty}</li>}
            </ul>
         </Flow>
      </div>
   )
}
