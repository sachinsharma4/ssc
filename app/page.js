import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const FacultyProfileCard = () => {
  return (
    <div className="border-1 m-2 lg:m-1.5 min-w-72  p-6 rounded-lg shadow-lg  flex flex-col items-start relative">
      <img
        src="https://via.placeholder.com/60"
        alt="Profile"

        className="w-16 h-16 rounded-full object-cover absolute top-4 left-4"
      />
      <div className="ml-20 mt-4 text-xl font-semibold">John Doe</div>
      <ul className="list-none mt-4 space-y-2 text-sm">
        <li>Age: 29</li>
        <li>Profession: Software Engineer</li>
        <li>Hobby: Photography</li>
        <li>Location: San Francisco</li>
        <li>Favorite Color: Blue</li>
      </ul>
    </div>
  );
};
const TestimonialCard = () => {
  return (
    <div className="border-1 m-2 lg:m-1.5 min-w-72  p-6 rounded-lg shadow-lg  flex flex-col items-start relative">
      <img
        src="https://via.placeholder.com/60"
        alt="Profile"

        className="w-16 h-16 rounded-full object-cover absolute top-4 left-4"
      />
      <div className="ml-20 mt-4 text-xl font-semibold">student name</div>
      <span>pro>
      <ul className="list-none mt-4 space-y-2 text-sm">
        <li>Age: 29</li>
        <li>Profession: Software Engineer</li>
        <li>Hobby: Photography</li>
        <li>Location: San Francisco</li>
        <li>Favorite Color: Blue</li>
      </ul>
    </div>
  );
};


export default function Home() {
  return (
    <div>




      {/* bg-gradient-to-r from-blue-500 to-indigo-600 */}
      <nav className=" bg-blue-600   p-4 shadow-lg border-white container mx-auto flex justify-between items-center">

          <div className="text-white font-bold text-2xl">

            <GiHamburgerMenu className=" inline -mt-1" />
            <span> SSC Classes</span>


          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-white hover:text-yellow-300">About
            </Link>
            <Link href="/courses" className="text-white hover:text-yellow-300">Courses
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-300">Contact
            </Link>

          </div>

       
     
      </nav>


      <div className="p-3.5 container min-w-full flex lg:justify-center overflow-y-hidden flex-row">

        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />

      </div>

      <div className="p-3.5 container min-w-full flex lg:justify-center overflow-y-hidden flex-row">

<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />

</div>

      <footer className="absolute w-full  text-green-400  bottom-0   bg-blue-700">

        <div className="text-center">
ssc classes registerd trademark
<ul className="flex flex-row w-3/5 space-x-2.5">

  <li>yoiutube</li>
  <li>twiter</li>
  <li>intsa</li>
  <li>linkdin</li>
  </ul>
        </div>
      </footer>
    </div>

  );
}
