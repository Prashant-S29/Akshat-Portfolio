"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme("light")

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            {theme === "light" ? (
                <button className='p-[6px] flex justify-center items-center border border-gray-500 rounded-full shadow-xl bg-black'
                    onClick={() => { setTheme("dark") }}>
                    <Brightness7RoundedIcon className='text-white text-[22px] leading-none' />
                </button>


            ) : (
                <button className='p-[6px] flex justify-center items-center rounded-full shadow-xl border bg-white border-black' onClick={() => { setTheme("light") }}>
                    <Brightness2RoundedIcon className='text-purple-500  text-[22px] leading-none' />
                </button>
            )}
        </div>
    )
}

export default ThemeSwitch