import Link from 'next/link'
import React from 'react'

function HeaderItem({Icon, title}) {
  return (
      <Link href={title.toLowerCase()}>
        <a>
             <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20">
              <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
                <p1 className="opacity-0 group-hover:opacity-100 tracking-widest">
                  {/* <Link href={title.toLowerCase()}> */}
                       <a>{title.toLowerCase()}</a>
                  {/* </Link> */}
               </p1>
             </div>
        </a>
     </Link>
         
  )
}

export default HeaderItem