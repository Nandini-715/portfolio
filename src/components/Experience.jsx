function Experience() {
  return (
    <>
      {/* <hr className="text-gray-200" />
      <div className="h-50  mt-10">
        <div className=" w-115 h-14 pl-3 font-extrabold  text-4xl ml-105">
          Professional Experience
        </div>
        <div>
        <div className="text-xl text-blackgap-7 ml-42 mt-5 ">
          {" "}
          <strong>SONNEN TECH</strong>
          &nbsp; Developer Intern
        </div>
        <div className="ml-40 mt-5  bg-amber-300 ">
          {" "}
          Assisted in developing and maintaining web applications, contributing
          to both front-end and back-end tasks. Gained hands-on experience with
          [technologies used], collaborating with the team to implement new
          features and optimize performance
        </div>
        </div>
      </div> */}

      <div id="Experience" className="h-120 mt-17 mb-17 pt-4  flex justify-around">
        <div className=" ml-10 w-80 bg-amber-200   rounded-2xl shadow-[13px_9px_32px_-8px_#c4c4c4] h-110">
          <div className="w-75 ml-3 mt-2 bg-amber-300  rounded-2xl  h-70">
            <img
              src="https://sonnentechs.com/static/media/SONNEN-LOGO.ecc6d99ba01228f44c51.png"
              className="pt-15"
              alt=""
            />
          </div>
          <div className="w-90  mt-5 h-35 text-2xl  pl-10 pt-2 ">
            <strong> Sonnen Technology</strong> , Indore M.P
          </div>
        </div>
        <div className="w-170 bg-amber-200 h-110 rounded-2xl shadow-[13px_9px_32px_-8px_#c4c4c4] ">
          <div className="w-165 ml-2 mt-2 text-4xl font-extrabold p-5 text-center  bg-amber-300 rounded-2xl h-20 ">
            Professional Experience
          </div>
          <div className="w-165 m-3 h-80 flex justify-between flex-col ">
            {" "}
            <p className="w-120 text-center ml-20 ">
              {" "}
              Assisted in developing and maintaining web applications,
              contributing to both front-end and back-end tasks. Gained hands-on
              experience with [technologies used], collaborating with the team
              to implement new features and optimize performance
            </p>
            <div className="flex justify-between flex-row">
              <div className="font-extrabold">From August 2022 - February 2023 </div>
              <div className="font-extrabold">6 Months</div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
export default Experience;
