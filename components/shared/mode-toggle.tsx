'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			size={'icon'}
			variant={'ghost'}
			onClick={() => setTheme('light')}
			aria-label='Switch to light mode'
		>
			<Sun />
		</Button>
	) : (
		<Button
			size={'icon'}
			onClick={() => setTheme('dark')}
			variant={'ghost'}
			aria-label='Switch to dark mode'
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
