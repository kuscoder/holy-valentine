import { useState } from 'react'
import { toast } from 'react-toastify'

import { useLocales } from '@hooks/useLocales'
import { useShare } from '@hooks/useShare'

import { Input } from '@shared/Input'
import { Select } from '@shared/Select'
import { Button } from '@shared/Button'

import icon from '/android-chrome-192x192.png'
import css from './Create.module.scss'

const Create = () => {
   const [locales, language] = useLocales()
   const share = useShare()

   const [form, setForm] = useState({
      name: '',
      proposal: '',
      consent: '',
      dissent: '',
      language
   })

   const onSubmit = e => {
      e.preventDefault()

      const title = locales.share_title
      const url = window.location.origin + '?' + new URLSearchParams(form)

      share({
         title,
         url,
         success: () => toast.success(locales.copy_success),
         error: () => {
            toast.error(locales.copy_error)
            setTimeout(alert, 2000, url)
         }
      })
   }

   return (
      <main className={css.create}>
         <form
            className={css.form}
            onSubmit={onSubmit}
            noValidate={true}
         >
            <div className={css.icon}>
               <img src={icon} />
            </div>

            <Input
               label={locales.create_name}
               placeholder={locales.create_name_example}
               optional={true}
               value={form.name}
               onChange={e => setForm(state => ({ ...state, name: e.target.value }))}
            />

            <Input
               label={locales.create_proposal}
               placeholder={locales.create_proposal_example}
               optional={true}
               value={form.proposal}
               onChange={e => setForm(state => ({ ...state, proposal: e.target.value }))}
            />

            <Input
               label={locales.create_consent}
               placeholder={locales.create_consent_example}
               optional={true}
               value={form.consent}
               onChange={e => setForm(state => ({ ...state, consent: e.target.value }))}
            />

            <Input
               label={locales.create_dissent}
               placeholder={locales.create_dissent_example}
               value={form.dissent}
               onChange={e => setForm(state => ({ ...state, dissent: e.target.value }))}
            />

            <Select
               label={locales.create_language}
               value={form.language}
               options={languageOptions}
               setValue={value => setForm(state => ({ ...state, language: value }))}
            />

            <Button
               className={css.submit}
               label={locales.create_submit}
               theme="success"
               type="submit"
            />
         </form>
      </main>
   )
}

const languageOptions = [
   ['English', 'en'],
   ['Русский', 'ru']
].map(([label, value]) => ({
   label,
   value
}))

export default Create
