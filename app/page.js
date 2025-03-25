import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const ProfileCard = () => {
    return (
        <div className=" dark:bg-gray-600 dark:border-white bg-white m-2 lg:m-1.5 min-w-72  p-6 rounded-lg shadow-lg  flex flex-col items-start relative">
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


export default function Home() {
  return (
   <div>
   
  



    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg rounded-t-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white font-bold text-2xl">
        <button >
          <GiHamburgerMenu />
        </button>
            <a>SSC Classes</a>
         
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {/* <Link href="/about">
            <a className="text-white hover:text-yellow-300">About</a>
          </Link>
          <Link href="/courses">
            <a className="text-white hover:text-yellow-300">Courses</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-yellow-300">Contact</a>
          </Link> */}
        </div>

        {/* User Profile */}
        <div className="flex  items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full"
          />
          <span className="text-white">John Doe</span>
        </div>
      </div>
    </nav>
<div className="p-3.5 container min-w-full flex lg:justify-center overflow-y-hidden flex-row">
  
<ProfileCard />
<ProfileCard />
<ProfileCard />  
<ProfileCard />  
<ProfileCard />  

</div>
   </div>

  );
}
