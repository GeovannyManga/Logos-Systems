import React from 'react'
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <Image
          src="/images/logo normal.png"
          alt="Logotipo"
          width={200}
          height={200}
          priority
           style={{ width: "auto" }}
          
        />

        <Image
    
          src="/images/menu.png"
          alt="Menú hamburguesa"
          width={50}
          height={50}
          style={{ width: "auto" }}
        />
      </nav>
    </div>
  )
}
