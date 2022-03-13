import React from 'react'
import Image from "next/image"
import w8r from '../public/logo.svg'
import HeaderItem from './HeaderItem'
import Link from 'next/link'
import { ShoppingCartIcon,
         TruckIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">

        <div className="flex flex-grow justify-center mb-6 hover:animate-pulse">
             <Image src={w8r} height={200} width={300} priority/>
        </div>

        <div className="flex flex-grow justify-evenly max-w-2xl">
                 <HeaderItem title="PRODUCT" Icon={ShoppingCartIcon}/> 
                 <HeaderItem title="DELIVERY" Icon={TruckIcon}/>  
        </div>

        
    </header>
  )
}

export default Header