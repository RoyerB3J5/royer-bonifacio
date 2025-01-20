"use client"
import { cn, Switch } from "@nextui-org/react"
import { MoonIcon } from "./MoonIcon"
import { SunIcon } from "./SunIcon"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"


function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted) return null

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div className="flex items-center justify-center px-2 py-4 gap-3 md:gap-1">
      <SunIcon />
      <Switch
      defaultSelected = {theme === "dark"}
      color="secondary"
      size="sm"
      onChange = {handleTheme}
      classNames= {{ 
        wrapper: "p-0 h-4 w-9 overflow-visible",
        thumb: cn(
          "w-5 h-5 border-2",
          // pressed
          "group-data-[pressed=true]:w-7",
        ),
      }}
      name="theme-switch"
    />
    <MoonIcon />

    </div>)
}

export default ThemeSwitch