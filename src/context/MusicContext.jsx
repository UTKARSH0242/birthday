import { createContext, useContext, useState, useRef, useEffect } from 'react'

const MusicContext = createContext()

export const useMusic = () => {
    const context = useContext(MusicContext)
    if (!context) {
        throw new Error('useMusic must be used within MusicProvider')
    }
    return context
}

export const MusicProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState('welcome')
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const audioRefs = useRef({
        welcome: null,
        lockscreen: null,
        unlock: null,
        hero: null,
        anniversary: null,
        footer: null
    })

    // Music mapping for each section
    // Music mapping for each section
    const musicMap = {
        welcome: `${import.meta.env.BASE_URL}music/tum-hi-ho.mp3`,       // Welcome page - Tum Hi Ho (car song)
        lockscreen: `${import.meta.env.BASE_URL}music/tum-hi-ho.mp3`,    // Countdown timer music (same as welcome)
        unlock: `${import.meta.env.BASE_URL}music/happy-birthday.mp3`,   // Happy Birthday song at unlock
        hero: `${import.meta.env.BASE_URL}music/daylight.mp3`,           // Daylight by Taylor Swift
        anniversary: `${import.meta.env.BASE_URL}music/pehli-nazar.mp3`, // Pehli Nazar Mein (How it started section)
        footer: `${import.meta.env.BASE_URL}music/ghar.mp3`              // Ghar from Jab Harry Met Sejal
    }

    useEffect(() => {
        // Stop all audio
        Object.values(audioRefs.current).forEach(audio => {
            if (audio) {
                audio.pause()
                audio.currentTime = 0
            }
        })

        // Play current section's music if not muted
        if (!isMuted && isPlaying && audioRefs.current[currentSection]) {
            audioRefs.current[currentSection].play().catch(err => {
                console.log('Audio play failed:', err)
            })
        }
    }, [currentSection, isPlaying, isMuted])

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const play = () => {
        setIsPlaying(true)
    }

    const pause = () => {
        setIsPlaying(false)
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const changeSection = (section) => {
        setCurrentSection(section)
    }

    const registerAudio = (section, audioElement) => {
        audioRefs.current[section] = audioElement
    }

    return (
        <MusicContext.Provider
            value={{
                currentSection,
                isPlaying,
                isMuted,
                musicMap,
                togglePlay,
                play,
                pause,
                toggleMute,
                changeSection,
                registerAudio
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}
