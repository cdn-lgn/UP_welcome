import React,{useEffect} from 'react'
import {motion,useAnimation,useMotionValue,useSpring} from 'framer-motion'
import { useInView } from "react-intersection-observer";


const h1_varient = {
  visible : {
    left:"0px",
    opacity:1,
    transition:{duration:1,delay:1},
  },
  hidden:{
    left:"-100vw",
  }
}
const h2_varient = {
  visible : {
    scale:1,
    transition:{duration:.8}
  },
  hidden:{
    scale:0.8
  }
}


const Mid1 = () => {
	const places = [
		{
			name : "Prem Mandir",
			content : "Made out of white marble and adorned with very intricate carvings, this temple is also famous for its architectural beauty. Statues of Shri Krishna and his admirers, portraying essential occasions surrounding the Lord's life, cover the main temple. Various scenes from Krishna's life, like raising the Govardhan Mountain, have been depicted on the periphery of the Prem Mandir. The lighting of the temple further glorifies its spectacular look, especially during the night. The colored water twists and twirls to the tunes of the kirtans of Radha Krishna being played nearby and are an audio-visual delight.",
			place : "Vrindavan",
			image : "../../assets/prem_mandir_3.jpg",
			colorP : "#A78CAD"
		},
		{
			name : "Banaras Ghat",
			content : "As the proclaimed proverb in Sanskrit says, death in Varanasi is a blessing for the devout. The abode of Lord Shiva, Varanasi or Kashi is the oldest surviving city in the world as per Hindu mythology. It is believed that the first ray of light after the creation of this Universe fell upon Varanasi, sanctifying it for eternity. River Ganges, the holiest river in Hinduism flows through the eternal city and beside the river stand the Ghats in Varanasi, as the testament of the glorious amalgamation of humanity and divinity. Older than traditions and spectacular beyond imagination, these Ghats have witnessed the evolvement of humanity across ages. The Ghats in Varanasi symbolically represent the five diverse elements or Pancha Tattva that constitute the human body. They are believed to be the doorsteps of heaven, and millions of Sadhus and pilgrims pay their tributes to the gods standing on these Ghats which play an astounding role in the city's religious activities.",
			place : "Varanasi",
			image : "../../assets/banaras_ghat.jpg",
			colorP : "#febf02",
		},
		{
			name : "Taj Mahal",
			content : 'One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. Constructed entirely out of white marble in the 17th century, Taj Mahal is one of the most beautiful monuments in the world. Every year visitors numbering more than the entire population of Agra pass through the magnificent gates to catch a glimpse of this breathtaking monument!A UNESCO World Heritage Site, the Taj Mahal stands for the Crown of Palaces in the Persian language. The tomb is laid out in a rectangular shape and can be approached through a massive gateway which has an arch and alcoves on either side of it. There are water channels and fountains in the entrance which makes the monument even more spectacular. The reflection of this majestic spectacle in the Yamuna is almost poetic in its perfection!',
			place : "Aagra",
			image : "../../assets/taj_mahal.jpg",
			colorP : "#02425E"
		},
		{
			name : "Bara Imambara",
			content : "Also known as Asfi Imambara, after the name of the Nawab of Lucknow who got it constructed, it is an important place of worship for the Muslims who come here every year to celebrate the religious festival of Muharram. Said to be the world's largest structure that is unsupported by beams, Bara Imambara is considered a marvel of engineering and a fine specimen of Mughal architecture.The Imambara has a unique style of construction. Moreover, no wood or metal has been used in the construction of this mosque. One can also have a view of the grave of Nawab Asaf-Ud-Dowlah and his crown, which is kept in the central hall, which is said to be the largest vaulted chamber in the world.",
			place : "Lucknow",
			image : "../../assets/bara_imambara.jpg",
			colorP : "#2F1E15"
		}
	]


	const controls = places.map(() => useAnimation()); // Create an array of animation controls
  	
	const elements = places.map((value,index)=>{

  	const [ref, inView] = useInView();
	 	useEffect(() => {
	   if(inView){
		     controls[index].start("visible")
		   }
		   else{
		     controls[index].start("hidden")
		    }
		}, [controls,index,inView])



	return (
		<div className="relative w-screen bg-gray-200 md:h-screen min-h-screen font-sans md:overflow-hidden" key={index}>
			<motion.div
		      ref={ref}
		      initial="hidden"
			    animate={controls[index]}
			    variants={h2_varient}
			    className="relative flex h-full flex-col md:flex-row items-center justify-between md:px-28 px-4  w-screen py-10"
				  >
				  <div className="md:w-2/5 w-full">
				    <h3 className="text-3xl font-bold py-4 z-10">{value.name}</h3>
				    <p>{value.content}</p>
				    <motion.h1 
				      variants={h1_varient}
				      initial="hidden"
				      animate={controls[index]}
				      className="font-rubik text-5xl relative hidden md:block -rotate-12 overflow-hidden"
				      style={{color : value.colorP}}>
				        {value.place}
			      </motion.h1>
			    </div>
			    <div className="md:w-1/2 w-full h-full relative py-10 overflow-hidden rounded-2xl">
			      <motion.img 
			        initial="hidden"
			        animate={controls[index]}
			        variants={h1_varient}
			        className="relative h-full w-full object-cover rounded-2xl imgAnim" src={value.image} alt=""/>
			    </div>
		  </motion.div>
		</div>
		)
	})

	return(
		<>
		{elements}
		</>
	)
}

export default Mid1