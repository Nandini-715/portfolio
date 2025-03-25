import { FaFileDownload } from "react-icons/fa";

 function Navbar (){
  return(

    <>
    
    {/* Navbar */}
    <div className=" h-12 flex justify-around items-center ">
    
      {/* heading */}
      <div className="text-zinc-950 text-2xl font-extrabold"> Nandini Rathod</div>
      {/* middle part  */}
      <div className="flex text-xl text-black gap-7">
      
        <a href="#About" className=" hover:text-amber-600 " >About</a>
        <a href="#Education" className=" hover:text-amber-600 " >Education</a>
        <a href="#Experience" className=" hover:text-amber-600 ">Experience</a>

      </div>
        <a 
          href="Resume.pdf"
          className=" hover:bg-amber-400 flex bg-amber-500  rounded-4xl  p-2 items-center text-lg h-8 w-53 "
        >
          <FaFileDownload className=" items-center " /> &nbsp; Download Resume
        </a>
      </div>
    </>
  );
}
export default Navbar;