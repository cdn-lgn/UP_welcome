import React,{useEffect} from 'react'
import { motion, useMotionValue,useSpring } from "framer-motion"
import './hero.css'

const Hero = () => {
	// Shery.mouseFollower();
	const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 50);
      cursorY.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const removeCircle =()=>{
  	let cricle = document.getElementById('cursor')
  		cricle.style.display = 'none'
  }
	const addCircle =()=>{
	  	let cricle = document.getElementById('cursor')
	  		cricle.style.display = 'block'
	}



	return (
			<div className="relative flex items-center justify-center min-h-screen w-screen overflow-hidden" onMouseLeave={(e)=>removeCircle()} onMouseEnter={(e)=>addCircle()} >
				<motion.div id="cursor"
				  style={{
				    translateX: cursorXSpring,
				    translateY: cursorYSpring,
				  }}
				 	className="fixed bg-orange-500 top-0 left-0 h-24 w-24 rounded-full pointer-events-none"
				 	></motion.div>
				<img src="../../assets/st2.jpg" className="sepia absolute -z-10 h-full w-full object-cover" alt=""/>
					<div className="relative overflow-hidden">
							<h1 className="anim1 z-1 relative text-8xl font-sans" >Welcome To</h1>
							<h1 className="anim2 z-1 relative text-8xl font-rubik" >Uttar Pradesh</h1>
					</div>
			</div>
	)
}

export default Hero