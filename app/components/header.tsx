import React from "react"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import { cn } from "../lib/utils"

interface HeaderProps {
  balance: number
  className?: string
}

const Header: React.FC<HeaderProps> = ({ balance, className }) => {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between rounded-[0.625rem] bg-soft-red p-5 text-white lg:rounded-[1.25rem] lg:px-8 lg:pb-[1.35rem] lg:pr-[2.45rem] lg:pt-[1.55rem]",
        className,
      )}
    >
      <div>
        <h2 className="mb-1 text-[0.9375rem] lg:mb-[0.15rem] lg:text-lg">
          My balance
        </h2>
        <p className="text-2xl font-bold leading-normal lg:text-[2rem]">
          ${balance}
        </p>
      </div>
      <div className="logo">
        <Image src={Logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header
