import React from 'react'
import './hero.css'

const mid2 = () => {
	return (
		<div className="relative h-screen w-screen flex flex-col bg-black items-center justify-between md:justify-start py-10 gap-4">
			<div className="text-center font-rubik md:text-6xl text-4xl z-10">
				<h1 className="text-[#F7641E]">Biggest Festival Ever</h1>
				<h1 className="text-[#F7641E]">22 January 2024</h1>
			</div>
			<img src="/bg.jpg" className="bgAnim absolute h-full right-0 z-0 top-1/2 -translate-y-1/2" alt=""/>
			<div className="z-10 md:h-1/3 md:w-1/3 w-full px-2">
				<img className="animeImgg h-fit w-full object-cover" src="/ram_mandir_demo.jpg" alt=""/>
			</div>
		</div>
	)
}

export default mid2
