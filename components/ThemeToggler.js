import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const circleBtn = 'rotate-[360deg] '
  const [test, setest] = useState(true)
  useEffect(() => {
    document.querySelector('.dark-mode-btn').addEventListener('click', () => {
      document
        .querySelector('.dark-mode-btn')
        .classList.toggle('rotate-[360deg]')
    })
  }, [])
  return (
    <div
      className={`absolute right-10 top-36 rounded-3xl p-2 lg:right-5 lg:top-5 ${
        theme === 'dark' ? 'bg-app-pure-white' : 'bg-app-semi-dark-blue'
      } h-12 w-12 text-white`}>
      <div className={'h-full w-full rounded-3xl'}>
        <div
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            setest(false)
          }}
          className={`${
            test === false ? circleBtn : 'circleBtn'
          } dark-mode-btn flex h-full w-full cursor-pointer items-center justify-center rounded-full transition  duration-500 ease-in-out `}>
          <span
            className={` ${
              theme === 'dark' ? 'text-black' : ''
            } material-symbols-outlined`}>
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </div>
      </div>
    </div>
  )
}
