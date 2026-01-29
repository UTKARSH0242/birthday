import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useMusic } from '../context/MusicContext'

const AnniversarySection = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 })
    const { changeSection } = useMusic()

    // Change music when this section is in view
    useEffect(() => {
        if (isInView) {
            changeSection('anniversary')
        }
    }, [isInView, changeSection])

    const milestones = [
        {
            title: "Jab We Met",
            date: "Jan 26, 2024",
            description: "Republic Day. Started with chai at GTB Nagar at 9 AM, watched 'Fighter', and shared that magical boat ride at Yamuna Bank. Then came 'Mohabbatein' and a midnight drive where you rested your head on my shoulder... ❤️",
            emoji: "☕",
            image: "/photos/photo17.jpg",
            imageCaption: "The Sunrise of Us 🌅"
        },
        {
            title: "The History Lesson",
            date: "Jan 26, 2024",
            description: "History never interested me, until you became my teacher. on Jan 26, We talked about the Battle of Plassey (June 23, 1757), Robert Clive, and Siraj-ud-Daulah. I don't remember it because I love history—I remember it because I love listening to you. Every detail is etched in my mind, simply because it was your voice explaining it. 💖",
            emoji: "⚔️"
        },
        {
            title: "The Yes Day",
            date: "Jan 30, 2024",
            description: "You went home, but we knew. 4 days later, we made it official. Best day of my life! The start of our beautiful long-distance chapter.",
            emoji: "💑"
        },
        {
            title: "The First Drive",
            date: "July 1, 2024",
            description: "The wait was over! I came to pick you up from Shruti's place and drove us back to Noida. Our first time meeting as a couple. That drive was pure therapy. 🚗✨",
            emoji: "🛣️"
        },
        {
            title: "Hamesha & Forever",
            date: "Jan 30, 2026",
            description: "We talk, we fight, we grow. But like Kohli on the pitch, I'm here for the long innings. Akanksha, I promise to be your 'Humdard' for a lifetime. Simple, calm, and yours. Happy 2nd Anniversary, love! 💍",
            emoji: "♾️"
        }
    ]

    return (
        <section ref={ref} className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-gray-800 mb-10 sm:mb-12 md:mb-16 px-2"
                >
                    Two Years of Us
                </motion.h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line for desktop, hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-soft-pink via-pastel-yellow to-baby-blue opacity-30" />

                    <div className="space-y-8 sm:space-y-12 md:space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content card */}
                                <div className="w-full md:w-5/12">
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl overflow-hidden relative ${milestone.image ? 'border-orange-200/50' : ''}`}
                                    >
                                        {milestone.image && (
                                            <div className="mb-6 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 md:-mx-8 md:-mt-8">
                                                <div className="relative h-48 sm:h-56 overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                                    <img
                                                        src={milestone.image}
                                                        alt={milestone.title}
                                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-20">
                                                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider border border-white/30">
                                                            {milestone.imageCaption}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {!milestone.image && <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{milestone.emoji}</div>}

                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-soft-pink font-semibold mb-3 sm:mb-4">{milestone.date}</p>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex w-2/12 justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-soft-pink to-pastel-yellow shadow-lg"
                                    />
                                </div>

                                {/* Spacer for alignment */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 sm:mt-16 md:mt-20 text-center"
                >
                    <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed px-2">
                            {/* EDIT THIS: Add a heartfelt message */}
                            "Every moment with you is a treasure. Here's to many more years of love, laughter, and adventures together."
                        </p>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-light">
                            — Utkarsh ❤️
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AnniversarySection
