function About() {
  return (
    <>
      
      <div className=" h-120 ">
        {/* heading About */}
        <div
          id="About"
          className="w-50 h-14 pl-3 font-extrabold  text-4xl ml-125   "
        >
          About Me
        </div>
        <div className=" ml-13 flex flex-row justify-around w-6xl h-100 mt-5 ">
          <div className="  w-110 h-90 mt-5  ">
            <div className=" text-2xl text-blackgap-7 ml-40 ">profile</div>
            <div className="ml-4 mt-4  ">
              As a passionate and driven software/web developer with a strong
              foundation in programming, web technologies, and problem-solving,
              I am eager to contribute my skills to a dynamic development team.
              With a keen interest in exploring emerging technologies and
              continuously expanding my knowledge, I am committed to delivering
              innovative, efficient, and user-friendly solutions. Seeking a
              challenging position as a Software/Web Developer where I can apply
              my technical expertise, creativity, and enthusiasm for technology
              to contribute to the growth of the organization while growing as a
              professional in the field
            </div>
          </div>
          <div className=" flex justify-around flex-col w-100 h-90 mt-5  ">
            <div className="w-90 ml-5 rounded-2xl bg-amber-100 h-45 shadow-[12px_13px_35px_-2px_rgba(0,_0,_0,_0.15)] hover:shadow-[12px_13px_35px_-1px_#e0cf99]">
              <div className="text-2xl text-blackgap-7 ml-30 mt-3   ">
                Education
              </div>
              <br />
              <div className="ml-7 mb-10">
                {" "}
                Masters of Computer Applications SAGE University Indore
                2023-2025 <br />
                Bachelor of Science Devi Ahilya Vishwavidyalaya Indore 2020-2023
              </div>
            </div>
            <hr className="text-gray-200" />
            <br />
            <div className="w-90 ml-5 h-45 rounded-2xl bg-amber-100 shadow-[12px_13px_35px_-2px_rgba(0,_0,_0,_0.15)] hover:shadow-[12px_13px_35px_-1px_#e0cf99] ">
              <div className="text-2xl text-blackgap-7 ml-35 mt-3  ">
                Skills
              </div>
              <div className="ml-8 mt-3 mb-10">
                {" "}
                Programming Languages :- HTML, CSS, JavaScript, NodeJS,
                <br />
                Frameworks :- Bootstrap, ReactJS <br />
                Tools :- Figma, Notion, Canva, GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
