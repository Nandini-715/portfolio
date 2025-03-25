import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a85cb095-d9e5-4983-beb1-bb0c4b940aa7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="flex justify-center flex-col items-center mt-14 ">
      <h1 className="w-110 h-14 pl-3 font-extrabold  text-4xl ">Get In Touch With Me </h1>

      <form onSubmit={onSubmit}>
      <div ><input className="shadow-[13px_9px_21px_-3px_#d9d9d9] border-2 border-gray-500 w-90 m-5 p-2 rounded-xl" type="text" name="name" required placeholder="enter your name" /></div>
        <div ><input className=" shadow-[13px_9px_21px_-3px_#d9d9d9] border-2 border-gray-500 w-90 m-5 p-2 rounded-xl" type="email" name="email" required placeholder="enter your email"/></div>
       <div  ><textarea className=" shadow-[13px_9px_21px_-3px_#d9d9d9] border-2 h-40 border-gray-500  resize-none w-90 m-5 p-2 rounded-xl" name="message" required placeholder="enter your message"> </textarea></div>

        <div className="w-90 text-center  m-5 p-2 mr-10 "><button type="submit" className="bg-amber-300 hover:bg-amber-400  pl-4 pr-4 pt-2 pb-2 w-50 rounded-xl border-gray-500 border-2 shadow-[13px_9px_21px_-3px_#d9d9d9]  hover:shadow-[13px_9px_21px_-3px_#c4c4c4]"  >Submit Form</button></div>

      </form>
      <span>{result}</span>

    </div>
  );
}
