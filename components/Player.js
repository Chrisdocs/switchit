import { useState, useEffect } from 'react'
import { round } from './Switcher'

export default function Player({ url }) {
	url = '/sound.mp3'

  const [audio, setAudio] = useState(null)

  useEffect(() => { setAudio(new Audio(url)) }, [])

	useEffect(() => {
		setTimeout(() => {
			if (round === 1) {
				audio.play()
			}
			if (round === 0) {
				audio.play()
			}
		}, 1000)
	}, [round])
}
