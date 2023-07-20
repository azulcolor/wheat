import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { Potta_One } from 'next/font/google'
import style from '@/styles/layout.module.css'


const pottaOne = Potta_One({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Logo() {
  return (
    <div className={style.logo}>
      <Image src={logo} alt='Logo' width={41} />
      <h1 className={`${style.title} ${pottaOne.className}`}>Wheat</h1>
    </div>
  )
}
