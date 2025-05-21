import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline';
import { div } from 'framer-motion/client';


// The customCursor component to accept isHoveing3D as a prop
function customCursor({ isHovering3D }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

   useEffect(() => {
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    }
   })
   return(
    <motion.div
        ref={cursorRef}
        className={"fixed top-0 left-0 z-50 pointe-events-none mix-blend-difference "}
        animate={{
            x: position.x - (isHovering3D ? 12: 15),
            y: position.y - (isHovering3D ? 12: 15),
            scale: isHovering3D ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        >
            <motion.div
            className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
            animate={{
                width: isHovering3D ? "24px" : "40px",
                height: isHovering3D ? "24px" : "40px",
            }}
            transition={{ duration: 0.2 }}
            />
            {isHovering3D && (
                <motion.div
                className='absolute inset-0 rounded-full bg-transition border border-violet-500'
                initial={{ scale: 0.5, opacity: 0}}
                animate={{ scale: 2, opacity: 0.5}}
                transition={{duration: 1, repeat: Number.POSITIVE_INFINITY}}
                />
            )}
        </motion.div>
   )

}
const Characters = () => {

    // Track which Avatar is selected
    const [selectedAvatar, setSelectedAvatar] = useState("RAJESH");
    const [cursorInModelArea, setCursorInModelArea] = useState(false);

    // Simplfied Avatar data
    const Avatar = {
        RAJESH: {
            name: "RAJESH",
            power: 75,
            stability: 90,
            penetration: 30,
            portability: 70,
            stars: 3
        },
        RANJIT: {
            name: "RANJIT",
            power: 65,
            stability: 80,
            penetration: 40,
            portability: 90,
            stars: 4
        }


    }

    // Get current Avatar data
    const currentAvatar = Avatar[selectedAvatar];

    const handel3DAreaMouseEnter = () => {
        setCursorInModelArea(true);
    }

    const handle3DAreaMouseLeave = () => {
        setCursorInModelArea(false);
    }

    return (
        <div className='relative w-full h-screen overflow-hidden mb-[10%]'>

            <customCursor isHovering3D={cursorInModelArea}/>

            {/* Section title */}

            <div className='relative z-10 pt-6 text-center'>
                <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8' style={{ textShadow: "0 0 10px rgba(255, 255,255, 0.7" }}>
                    FIGHTERS
                </h1>
            </div>

            {/* Main Content Area  */}

            <div className='relative  z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>

                {/* Left side - Avatar info and selection */}
                <div className='w-full md:w-2/4 flex flex-col md:ml-10'>

                    {/* Selected Avatar info card */}
                    <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]'>
                        <h1 className='text-2xl font-semibold mb-2 '>{currentAvatar.name}</h1>

                        {/* Avatar Statistics */}
                        <div className='space-y-3 mb-16 '>

                            {/* Power Stat */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Power</span>

                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>

                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${currentAvatar.power}%` }}>

                                    </div>

                                </div>
                                <span className='ml-2'>{currentAvatar.power}</span>
                            </div>
                            {/* Stable Stat */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Stable</span>

                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>

                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${currentAvatar.stability}%` }}>

                                    </div>

                                </div>
                                <span className='ml-2'>{currentAvatar.stability}</span>
                            </div>
                            {/* Penetrate Stat */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Penetrate</span>

                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>

                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.penetration}%` }}>

                                    </div>

                                </div>
                                <span className='ml-2'>{currentAvatar.penetration}</span>
                            </div>
                            {/* Portable Stat */}
                            <div className='flex items-center'>
                                <span className='w-24 text-gray-400'>Portable</span>

                                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>

                                    <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                                        style={{ width: `${currentAvatar.portability}%` }}>

                                    </div>

                                </div>
                                <span className='ml-2'>{currentAvatar.portability}</span>

                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-3'>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Proficient
                            </button>
                            <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                                Redemption
                            </button>
                        </div>

                    </div>

                    {/* Avatar Selection Card */}
                    <div className='grid grid-cols-2 gap-4'>

                        {/* RAJESH CARD */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                            onClick={() => setSelectedAvatar("RAJESH")}
                        >

                            <div className='text-lg mb-2 '>RAJESH</div>

                            {/* Avatar visual placeholder */}
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                                <img src="public\image\VIKI.png" alt="" />
                            </div>

                            {/* Star rating */}
                            <div className='flex'>
                                {[...Array(3)].map((_, i) => (
                                    <Star key={i} className='h-4 w-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>
                            {/* Highlight for selected avatar */}
                            {selectedAvatar === "RAJESH" && (
                                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                            )}


                        </div>


                        {/* RANJIT CARD */}
                        <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                            onClick={() => setSelectedAvatar("RANJIT")}
                        >

                            <div className='text-lg mb-2 '>RANJIT</div>

                            {/* Avatar visual placeholder */}
                            <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                                <img src="public\image\EVA.png" alt="EVA-IMG" />
                            </div>

                            {/* Star rating */}
                            <div className='flex'>
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className='h-4 w-4 fill-violet-400 text-violet-500' />
                                ))}
                            </div>
                            {/* Highlight for selected avatar */}
                            {selectedAvatar === "RANJIT" && (
                                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                            )}


                        </div>

                    </div>



                </div>
                {/* Right Side - 3D model */}
                <div className='relative md:w-2/4 w-full md:h-full h080 flex items-center justify-center overflow-hidden'
                onMouseEnter={handel3DAreaMouseEnter}
                onMouseLeave={handle3DAreaMouseLeave}
                >

                    <AnimatePresence mode='wait'>
                        {selectedAvatar === "RAJESH" ? (
                            <motion.div
                                key={"RAJESH"}
                                className='absolute inset-0'
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/F8FR2OLDgu2OWv0a/scene.splinecode" />
                            </motion.div>

                        ) : (
                            <motion.div
                                key={"RANJIT"}
                                className='absolute inset-0'
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                <Spline scene="https://prod.spline.design/HmaATqvCspB9b-1E/scene.splinecode" />



                            </motion.div>

                        )}
                    </AnimatePresence>


                </div>

            </div>

        </div>
    )
}

export default Characters
