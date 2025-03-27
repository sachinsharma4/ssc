import React from 'react'
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar() {
  return (
<nav className="sticky bg-blue-800 z-10 top-0 p-4 shadow-lg  container mx-auto flex justify-between items-center">

<div className="text-white font-bold text-2xl">

  <GiHamburgerMenu className=" inline -mt-1" />
  <span> SSC Classes</span>


</div>

{/* Nav Links */}
<div className="hidden md:flex space-x-6">
  <Link href="/jeeadv" className="text-white hover:text-yellow-300">About
  </Link>
  <Link href="/courses" className="text-white hover:text-yellow-300">Courses
  </Link>
  <Link href="/contact" className="text-white hover:text-yellow-300">Contact
  </Link>

</div>



</nav>
  )
}

export default NavBar