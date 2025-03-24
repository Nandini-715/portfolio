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
        <a href="#Contact" className=" hover:text-amber-600 ">Contact</a>

      </div>
      <a href="" className="hover:bg-amber-400 flex bg-amber-500  rounded-2xl   items-center text-sm"> <FaFileDownload className="m-auto mb-3" />&nbsp;Download Resume</a>
    
    </div>
    </>
  )
 }
 export default Navbar

