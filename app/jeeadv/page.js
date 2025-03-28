

import React from 'react';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react'

function exam_jee() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='examName font-extrabold text-3xl italic p-5 uppercase  bg-teal-600 text-white '>Joint Entrance Examination – Advanced (JEE-Advanced) </div>
      <hr className='text-white' />
      <div className='purpose bg-white font-extrabold text-3xl italic pl-7 py-5 mt-10 mx-4 captalise border-2 rounded-full w-auto border-white text-blue-900 '>
    purpose of the Examination
      </div>
      <div className='text-2xl italic font-bold mt-5 ml-5 captalise text-blue-900 '>

        It used as an admission to the IITs' bachelor's programs along with the introduction of UCEED,[2] Online B.S.[3] and Olympiad entries,[4]
        Other universities, such as the Indian Maritime University Kolkata, the Indian Institute of Petroleum and Energy, the Rajiv Gandhi Institute of Petroleum Technology, Indian Institute of Space Technology and the Indian Institute of Science use the score obtained in the JEE-Advanced exam as the sole basis for admission.
        The JEE-Advanced score is also used as a possible basis for admission by Indian applicants to non-Indian universities such as the University of Cambridge and the National University of Singapore.[6][7]




      </div>
      <div  className='purpose bg-white font-extrabold text-3xl italic pl-7 py-5 mt-10 mx-4 captalise border-2 rounded-full w-auto border-white text-blue-900 '>
    Conducting body
      </div>
      <div className='text-2xl italic font-bold mt-5 ml-5 captalise text-blue-950'>
        It is organised by one of the seven zonal Indian Institutes of Technology (IITs): IIT Roorkee, IIT Kharagpur, IIT Delhi, IIT Kanpur, IIT Bombay, IIT Madras, and IIT Guwahati,
        under the guidance of the Joint Admission Board (JAB) on a round-robin rotation pattern for the qualifying candidates of the Joint Entrance Examination – Main(exempted for foreign nationals and candidates who have secured OCI/PIO cards on or after 04-03-2021).


      </div>
      <div  className='purpose bg-white font-extrabold text-3xl italic pl-7 py-5 mt-10 mx-4 captalise border-2 rounded-full w-auto border-white text-blue-900 '>
      details about exam
      </div>
     
      <table className='text-blue-900 mt-5 text-2xl font-bold bg-white mx-auto border-2 border-collapse'>
      <tbody><tr><td className='p-1 border-2'> mode of exam   </td><td className='p-1 border-2 text-right'> coumputer based test  </td></tr>
             <tr><td className='p-1 border-2'> frequency      </td><td className='p-1 border-2 text-right'> annually in month of may      </td></tr>
             <tr><td className='p-1 border-2'> subjects       </td><td className='p-1 border-2 text-right'> Physics chemistry math   </td></tr>
             <tr><td className='p-1 border-2'> marks          </td><td className='p-1 border-2 text-right'>varies every year</td></tr>
             <tr><td className='p-1 border-2'> syllabus       </td><td className='p-1 border-2 text-right'> link to be droped       </td></tr>
             <tr><td className='p-1 border-2'> duration       </td><td className='p-1 border-2 text-right'> 6 hours with 2 papers (9:30 to 12:30 and 2:30 to 5:30)       </td></tr>
     </tbody></table>




      <Footer></Footer>
    </div>
  )
}

export default exam_jee