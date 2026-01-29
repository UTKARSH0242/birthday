import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Navigation, Home, Heart, Flag, Landmark } from 'lucide-react'

const JourneyMap = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const locations = [
        {
            id: 1,
            name: "GTB Nagar",
            desc: "Where it all began. 9 AM tea & first talks ☕",
            icon: <Flag className="w-6 h-6" />,
            color: "bg-orange-500",
            position: "top-[10%] left-[10%] md:left-[20%]"
        },
        {
            id: 2,
            name: "Yamuna Bank",
            desc: "The magical boat ride 🛶",
            icon: <Navigation className="w-6 h-6" />,
            color: "bg-blue-500",
            position: "top-[30%] right-[10%] md:right-[20%]"
        },
        {
            id: 3,
            name: "The Office",
            desc: "Blushing & smiling at work 😊",
            icon: <Landmark className="w-6 h-6" />,
            color: "bg-purple-500",
            position: "top-[50%] left-[15%] md:left-[25%]"
        },
        {
            id: 4,
            name: "Ganga Hostel (JNU)",
            desc: "Picking you up from here & driving back to Noida 🚗",
            icon: <MapPin className="w-6 h-6" />,
            color: "bg-green-500",
            position: "top-[68%] right-[10%] md:right-[20%]"
        },
        {
            id: 5,
            name: "Forever Home",
            desc: "The destination is Us ❤️",
            icon: <Home className="w-6 h-6" />,
            color: "bg-red-500",
            position: "top-[90%] left-[50%] -translate-x-1/2" // Changed from bottom-5% to top-90% for better control
        }
    ]

    return (
        <section ref={containerRef} className="py-32 px-4 relative min-h-[150vh] overflow-hidden bg-[#fffcf5]">

            {/* Background Texture for Realism */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            {/* Title */}
            <motion.div
                className="relative z-10 text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">The Timeline</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">Our Journey</h2>
            </motion.div>

            {/* Immersive Path Container */}
            <div className="absolute inset-0 w-full h-full max-w-5xl mx-auto pointer-events-none">
                <svg className="w-full h-full visible lg:block hidden" viewBox="0 0 800 1200" preserveAspectRatio="none">
                    {/* Define the path definition once to reuse */}
                    <path
                        id="journey-path"
                        d="M 200 150 C 500 300, 600 400, 600 500 S 200 700, 200 850 S 400 1050, 400 1100"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        strokeDasharray="12 12"
                        strokeLinecap="round"
                    />
                    <motion.path
                        d="M 200 150 C 500 300, 600 400, 600 500 S 200 700, 200 850 S 400 1050, 400 1100"
                        fill="none"
                        stroke="url(#gradient-path)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{ pathLength: scrollYProgress }}
                    />
                    <defs>
                        <linearGradient id="gradient-path" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Mobile Path (Simplified) */}
                <svg className="w-full h-full lg:hidden block" viewBox="0 0 300 1200" preserveAspectRatio="none">
                    <path
                        d="M 150 100 L 150 1100"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        strokeDasharray="8 8"
                    />
                    <motion.path
                        d="M 150 100 L 150 1100"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="4"
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>
            </div>

            {/* Pins */}
            <div className="relative max-w-5xl mx-auto h-full min-h-[1200px]">
                {locations.map((loc, i) => (
                    <motion.div
                        key={loc.id}
                        className={`absolute ${loc.position} flex flex-col items-center group cursor-pointer z-10 w-64`}
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                        viewport={{ margin: "-100px" }}
                    >
                        {/* The Pin Head */}
                        <div className="relative">
                            <motion.div
                                className={`w-16 h-16 ${loc.color} rounded-2xl rotate-45 flex items-center justify-center shadow-2xl border-4 border-white relative z-10 group-hover:rotate-0 transition-transform duration-500`}
                            >
                                <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 text-white">
                                    {loc.icon}
                                </div>
                            </motion.div>
                            {/* Pulse Effect */}
                            <div className={`absolute inset-0 ${loc.color} rounded-2xl rotate-45 blur-lg opacity-40 animate-pulse-soft`} />
                        </div>

                        {/* The Content Card */}
                        <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center relative hover:-translate-y-2 transition-transform duration-300">
                            {/* Connector Line */}
                            <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2" />

                            <h3 className="font-bold text-gray-900 text-lg mb-1">{loc.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{loc.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default JourneyMap
