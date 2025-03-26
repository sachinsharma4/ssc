import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const FacultyProfileCard = () => {
  return (
    <div className="border-1 m-2 lg:m-1.5 min-w-72  p-6 rounded-lg shadow-lg  flex flex-col items-start relative">
      <Image
        src="/image.png"
        alt="Profile"
        width={64}
        height={64}
        className="w-16 h-16 rounded-full  absolute top-4 left-4"
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

    <div
      className="border-1 m-2 bg-white lg:m-1.5 min-w-72  p-6 rounded-lg shadow-lg "
    ><div className=" flex flex-row">
        <Image
          src="/image.png"
          alt="Profile"
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="ml-10  py-5  ">
          <div className="font-semibold text-xl italic">Student name</div>
          <div className="text-gray-400 italic">college name</div>
        </div></div>
      <div className="w-full pt-2 italic line-clamp-10 text-ellipsis">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
    enim.
        ipsa provident saepe, ea ex eius maxime quae, culpa laborum magnam consequatur aperiam!
        ipsa provident saepe, ea ex eius maxime quae, culpa laborum magnam consequatur aperiam!
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <div>




      <nav className="sticky bg-blue-800 z-10 top-0 p-4 shadow-lg  container mx-auto flex justify-between items-center">

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


      <div className="p-3.5 container min-w-full flex lg:justify-center overflow-y-hidden  flex-row">

        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />
        <FacultyProfileCard />


      </div> 

      <div className="bg-[url(/image.svg)]  bg-cover w-full">
      <div className="text-center p-5 font-extrabold text-5xl italic text-blue-400 underline ">Our student Reviews</div>
        <div className="p-3.5 container  min-w-full flex lg:justify-center overflow-y-hidden flex-row">

<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />


</div>
    </div>


    
    
     
      <footer className="sticky w-full mt-3.5 text-green-400  bottom-0   bg-blue-700">

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
