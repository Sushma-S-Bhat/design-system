// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Theme from '@/context/Theme/Theme'
import { Button } from '@/components/button/Button'


export default function Home() {
  return (
    <>
    <Theme>
      <Button variant='contained' color='purple' label="storybook">
        Storybook
      </Button>
    
     <div>storybook added</div>
     </Theme>
    </>
  )
}
