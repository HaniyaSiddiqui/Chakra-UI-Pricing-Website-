"use client"; 
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import { Features } from '@/components/Features'
import {ChakraProvider } from '@chakra-ui/react';



// const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  return (
    <ChakraProvider  >
        <Header/>
        <Pricing/>
        <Features/>
    </ChakraProvider>
  )
}
