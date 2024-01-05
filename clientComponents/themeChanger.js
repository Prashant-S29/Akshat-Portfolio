"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme("light")
    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            return;
        }
        setTheme("light")
    }
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <div onClick={handleTheme}>
                <div
                    className={`w-[40px] h-[20px] rounded-full cursor-pointer flex
                     ${theme === "light" ? "pl-[24px] bg-green-500" : "pl-[4px] bg-gray-500"} p-[4px] duration-300`}
                >
                    <div className="w-[12px] aspect-square  rounded-full bg-white" />
                </div>
            </div>
        </>
    )
}

export default ThemeSwitch