import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import { classNames } from '@utils/classNames'
import { ucFirst } from '@utils/ucFirst'

import { useParam } from '@hooks/useParam'
import { useLocales } from '@hooks/useLocales'
import { Button } from '@shared/Button'

import defaultProposalImg from '/default-proposal.gif'
import defaultConsentImg from '/default-consent.gif'
import defaultDissentImg from '/default-dissent.gif'

import css from './Home.module.scss'

const Home = () => {
   const name = useParam('name', null)
   const proposalImg = useParam('proposalImg', defaultProposalImg)
   const consentImg = useParam('consentImg', defaultConsentImg)
   const dissentImg = useParam('dissentImg', defaultDissentImg)

   const { width, height } = useWindowSize()
   const locales = useLocales()

   const [noPressCount, setNoPressCount] = useState(0)
   const [proposalStatus, setProposalStatus] = useState(null)
   const yesButtonFontSize = Math.min(noPressCount, 15) * 1 + 1.5

   useEffect(() => {
      if (noPressCount >= 16) setProposalStatus(false)
   }, [noPressCount])

   const handleYesClick = () => {
      setProposalStatus(true)
   }

   const handleNoClick = () => {
      setNoPressCount(state => state + 1)
   }

   const getNoButtonText = () => {
      const phrases = locales.no_button
      const index = Math.min(noPressCount, phrases.length - 1)
      return phrases[index]
   }

   if (proposalStatus === true)
      return (
         <main className={css.home}>
            <section className={classNames(css.container, css.consent)}>
               <div className={css.image}>
                  <img src={consentImg} />
               </div>
               <p>{locales.consent}</p>
            </section>

            <Confetti
               width={width}
               height={height}
            />
         </main>
      )

   if (proposalStatus === false)
      return (
         <main className={css.home}>
            <section className={classNames(css.container, css.dissent)}>
               <div className={css.image}>
                  <img src={dissentImg} />
               </div>
               <p>{locales.dissent}</p>
            </section>
         </main>
      )

   return (
      <main className={css.home}>
         <section className={classNames(css.container, css.proposal)}>
            <header className={css.header}>
               <div className={css.image}>
                  <img src={proposalImg} />
               </div>

               <h1>
                  {name ? (
                     <>
                        <span>{ucFirst(name)}</span>, {locales.proposal}
                     </>
                  ) : (
                     ucFirst(locales.proposal)
                  )}
               </h1>
            </header>

            <footer className={css.buttons}>
               <Button
                  className={css.yes}
                  label={locales.yes_button}
                  theme="success"
                  style={{ fontSize: `max(${yesButtonFontSize}vmax, 18px)` }}
                  onClick={handleYesClick}
               />

               <Button
                  className={css.no}
                  label={getNoButtonText()}
                  theme="dangerous"
                  onClick={handleNoClick}
               />
            </footer>
         </section>
      </main>
   )
}

export default Home
