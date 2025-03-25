import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { GrDocumentCsv } from "react-icons/gr";
 function Hero (){

  return(
    <>
    <div className=" h-120 mt-2 flex justify-around">
      <div className="flex flex-col justify-around  w-xl h-100 mt-5">
        <div className="w-90 h-20 mt-2 ml-30 text-3xl">Hey!! I Am Nandini Rathod</div>
        {/* description */}
        <div className=" w-110 ml-30">Hi, I'm Nandini, a passionate React.js developer who loves building interactive and user-friendly web applications. I specialize in React, JavaScript, and modern UI/UX design, focusing on clean code and performance optimization. Always eager to learn and innovate, I enjoy creating seamless digital experiences. </div>
        {/* buttons */}
        <div className="  ml-20  flex justify-around  ">
          <a href="https://www.linkedin.com/in/nandini-rathod-694207302/
" className=" hover:bg-amber-400   flex bg-amber-500  items-center p-3 mt-5  rounded-2xl "> <TbBrandLinkedin />&nbsp; LinkedIn</a>
          <a href="https://github.com/Nandini-715"  className=" hover:bg-amber-400 flex items-center  bg-amber-500 p-3 mt-5  rounded-2xl justify-around ">  <FaGithub ></FaGithub> &nbsp; GitHub  </a>
          <a href="Resume.pdf" className="hover:bg-amber-400  flex items-center bg-amber-500 p-3 mt-5  rounded-2xl"> <GrDocumentCsv /> &nbsp;
           Resume</a>
        </div>
      </div>

      <div className="flex justify-around0  w-xl h-100 mt-5  ">
        <img className="  rounded-full  shadow-[-1px_18px_39px_-1px_rgba(0,_0,_0,_0.35)] " src="/dp.jpg" alt="" srcset="" />
      </div>
    </div>
    
    </>
  )
 }
 export default Hero