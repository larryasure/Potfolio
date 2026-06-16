import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


export default function Feedbacks() {
  return (
    <div className=' bg-black/90 rounded-[20px]  '>
      <div className={` rounded-2xl min-h-60`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionHeadTextheroSubText}`}>What others Says</p>
          <h3 className={`${styles.sectionHeadText}`}>Testimonials.</h3>
        </motion.div>

      </div>

      <div className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full px-7`}>
        {testimonials.map((testimonial, index) => (
          <motion.div 
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            key={testimonial.name} 
            className='bg-gray-800 p-10 rounded-2xl max-w-96 w-full'>
            <p className='text-white font-black text-[48px]'>"</p>
            <div className='mt-1'>
              <p className='text-gray-300 tracking-wider text-[16px]'>{testimonial.testimonial}</p>
              <div className='mt-7 flex items-center gap-4'>
                <img 
                  loading='lazy'
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div className='flex flex-col'>
                  <h4 className='text-white font-bold text-[16px]'>{testimonial.name}</h4>
                  <p className='text-gray-400 text-[12px]'>{testimonial.designation} at {testimonial.company}</p>
                </div>
              </div>
            </div>
            </motion.div>

        ))}
      </div>
      
    </div>
  )
}
