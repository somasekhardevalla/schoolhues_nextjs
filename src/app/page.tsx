import { Inter } from "next/font/google"
import Image from "next/image"
import Carouseal from "./carouseal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faSearch,faLocation,faCode } from "@fortawesome/free-solid-svg-icons"
import { faFolder } from "@fortawesome/free-regular-svg-icons"
export default function Home() {
  return (
    <div>
      {/* main content */}

   <div className="w-full h-auto bg-cyan-100" >
    <h2 className="pt-40 text-center font-{Inter} font-medium text-3xl ">Over <mark className="bg-cyan-100 text-blue-600">1200+</mark>Jobs are waiting for you</h2>
    <div className="bg-white w-3/5 h-16 ml-72 rounded-full mt-8">
      <form action="" className="h-full flex">
        <FontAwesomeIcon icon={faSearch} className="mt-6 ml-5"></FontAwesomeIcon>
      <input list="browsers" name="browser" placeholder="job Title or Keywords" className="  placeholder:font-normal placeholder:font-{Inter} placeholder:text-black w-48 h-full ml-3 border-r border-solid border-gray-300 rounded-tl-full rounded-bl-full focus:outline-none"/>
       <datalist id="browsers" className="w-40 h-32 font-{Inter} appearance-none border border-b-blue-900 border-solid">
          <option value="Internet Explorer" className="appearance-none"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
       </datalist>
       <FontAwesomeIcon icon={faLocation} className="mt-6 ml-5 text-xl"></FontAwesomeIcon>
      <input list="browsers" name="browser" placeholder="job Title or Keywords" className="  placeholder:font-normal placeholder:text-black w-48 h-full ml-3 border-r border-solid border-gray-300 rounded-tl-full rounded-bl-full focus:outline-none"/>
       <datalist id="browsers" className="w-40 h-32 font-{Inter} appearance-none border border-b-blue-900 border-solid">
          <option value="Internet Explorer" className="appearance-none"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
       </datalist>
       <FontAwesomeIcon icon={faFolder} className="mt-6 ml-5 text-xl"></FontAwesomeIcon>
       <select name="cars" id="cars" className="w-44 focus:outline-none border-r border-solid border-gray-300 pl-3 ">
         <option value="volvo">All Categories</option>
         <option value="saab">Saab</option>
         <option value="opel">Opel</option>
        <option value="audi">Audi</option>
  </select>
 <input type="reset" value="Clear" className="pl-7 cursor-pointer hover:text-cyan-600" />
 <input type="submit" value="Search" className="bg-sky-600 w-20 h-9 rounded-full ml-5 mt-3 text-white cursor-pointer" />
      </form>
    </div>
    <p className="pb-32 text-center mt-9">Popular searches: <a href="" className="hover:text-cyan-600">Communication</a>,<a href="" className="hover:text-cyan-600">Empathy</a></p>
   </div >


{/* Craouseal */}


   <div className="w-full h-auto mt-20" >
    <h2 className="text-center font-{Inter} font-semibold text-2xl mb-5 ">Current Vacancies in Different Schools</h2>
    <p className="text-center font-{Inter} font-medium mb-10 ">Find schools that deserve you!</p>
     <Carouseal/>
     <div className="text-center">
     <button className='bg-sky-600 rounded-full w-40 h-9 text-white text-center font-semibold text-sm mt-4'>View all schools</button>
     </div>
   </div>

   {/* browse category */}

   <div className="bg-cyan-100 w-full h-auto mt-14 mb-5 text-center">
    <h2 className="text-center font-{Inter} font-semibold text-2xl pt-14">Browse by category</h2>
    <p className="text-center font-{Inter} font-normal text-lg pt-5">Browse openings in those categories</p>
           <div className="h-72 w-5/6 ml-32  flex ">
              <div className="w-48 h-52 bg-cyan-300 ml-10 mt-16 mr-10 rounded-xl">
                <div className="w-16 h-16 bg-cyan-600 rounded-full  ml-16 mt-8 pt-5 text-white font-medium"> <FontAwesomeIcon icon={faCode} className="text-xl"/></div>
                <div className="w-full h-1/2">
                  <p className="pt-8 font-{Inter}  font-semibold text-lg ">Primary <br /> Teacher</p>
                </div>
              </div>
           </div>
           <button className='bg-sky-600 rounded-full w-40 h-9 text-white text-center font-semibold text-sm mt-10 mb-10'>View all schools</button>
   </div>


   {/* video component */}


   <div className="w-full h-96 mt-10">
    <div className="bg-black w-full h-full ">
      
    </div>
    <video src="/video.mp4" muted autoPlay loop className="object-cover w-full h-full -mt-96 opacity-60"></video>
    <div className="w-full h-full -mt-96 text-white text-center">
    <p className="font-{Inter} font-semibold text-lg pt-24">CANDIDATE</p>
     <h2 className="font-{Inter} font-medium text-4xl pt-5">Find your dream job</h2>
     <p className="font-{Inter} font-medium text-auto pt-5">Recruiters looking for talent can find your resume based on <br />keywords, job titles, skills and more.</p>
     <button className='bg-sky-800 rounded-full w-44 h-10 text-white text-center font-semibold text-sm mt-10 mb-10'>Post a resume today</button>
    </div>
   </div>

   {/* footer */}


   <div className="bg-gray-200 w-full h-96">
   <div className="flex w-full h-80 font-{Inter}">

    <div className="w-1/3 h-full flex-col ml-48 mt-12">
       <h2 className="font-{Inter} font-medium ">About</h2>
       <p className="pt-5">SER Center, Prasadampadu, Vijayawada,<br />India - 521108</p>
       <br />
       <a  className=" font-semibold "href="tel:+91 9685511620">+91 9685511620</a><br /><br />
       <a className="font-semibold" href="mailto:hello@schoolhues.com">hello@schoolhues.com</a>
       <br />
       <FontAwesomeIcon icon={faLinkedin} className="text-2xl mt-5 hover:text-cyan-600"/>
       <FontAwesomeIcon icon={faTwitter} className="text-2xl mt-5  ml-5 hover:text-cyan-600"/>
       <FontAwesomeIcon icon={faInstagram} className="text-2xl mt-5 ml-5 hover:text-cyan-600"/>
       <FontAwesomeIcon icon={faFacebook} className="text-2xl mt-5 ml-5 hover:text-cyan-600"/>
        </div>
 
    <div className="w-1/3 h-full flex mt-12"> 
    <div className="w-1/2 h-full flex-col">
      <h2 className="font-{Inter} font-medium  ">Company</h2>
      <br />
      <a href=""className="">About us</a><br /><br />
      <a href=""className="pt-3">Blogs</a><br /><br />
      <a href=""className="pt-3">Contact</a><br />
      </div>
    <div className="w-1/2 h-full flex-col">
       <h2 className="font-{Inter} font-medium ">Services</h2><br />
       <a href="">Jobs</a><br /><br />
       <a href="">Schools</a><br /><br />
       <a href="">Candidate</a>
       </div>
    </div>
   
    <div className="w-1/3 h-full pt-36 ml-8">
      <Image src="/sh_logo.png" alt="logo" width="200" height="100"/>
    </div>

   </div>
   <div className="w-full ">
    <hr className="w-full"/>
    <p className="ml-44">@ 2023 SchoolHues. All Right Reserved.</p>
   </div>
   </div>


   </div>
  )
}
