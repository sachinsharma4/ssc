import NavBar from "./component/NavBar";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { Field, Label, Switch } from '@headlessui/react'
import Footer from "./component/Footer";

const FacultyProfileCard = () => {
  return (
    <div className="border-1 m-2 lg:m-1.5 min-w-72 bg-white p-6 rounded-lg shadow-lg  flex flex-col items-start relative">
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

const  Example = () => {
 

  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name*
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email*
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Phone number*
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    required
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                  <AiOutlineDown
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
            
            </div>
            <Label className="text-sm/6 text-gray-600">
              by filling with this you agree with our 
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
        submit
          </button>
        </div>
      </form>
    </div>
  )
}

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


  function Drawer() {
  return (
<div>
<div className="bg-blue-400 w-44  hidden min-h-screen z-20 ">
  <button className=" block ml-36 text-white pt-2 text-2xl">X</button>
  <Link href="/about" className="text-white ml-2 hover:text-yellow-300">About
  </Link>
  <hr className="mb-2 w-full " />
  <Link href="/courses" className="text-white  ml-2 hover:text-yellow-300">Courses
  </Link>
  <hr  className="mb-2 w-full "/>

  <Link href="/contact" className="text-white ml-2  hover:text-yellow-300">Contact
  </Link>
  <hr  className="mb-2 w-full "/>

</div>
</div>
  )
}


export default function Home() {
  return (
    <div>
<Drawer/>
<div className="main-ui">
<NavBar/>


<div className="p-3.5 container min-w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">

<FacultyProfileCard />
<FacultyProfileCard />
<FacultyProfileCard />
<FacultyProfileCard />
<FacultyProfileCard />


</div> 
<hr />
<Example />
<div className="bg-[url(/image.svg)]  bg-cover w-full">
<div className="text-center p-5 font-extrabold text-5xl italic text-black underline  ">Our student Reviews</div>
<div className="p-3.5 container  min-w-full flex lg:justify-center overflow-y-hidden no-scrollbar flex-row">

<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />
<TestimonialCard />


</div>
</div>





</div>
<Footer/>

    
    </div>

  );
}
