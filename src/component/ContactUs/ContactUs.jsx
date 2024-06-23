import React from "react";

function ContactUs() {
  return (
    <>
    <div className=" hidden md:block mx-16 my-16">
      <div className="grid grid-cols-8">
        <div className=" col-span-3">
            <div className=" flex flex-col">
            <span className=" mt-20">+971557089953</span>
            <span className=" mt-20 text-xl ">E-mail:</span>
            <h1>info@studio53tm.com</h1>
            </div>
          
        </div>
        <div className=" col-span-5">
          <h1 className=" mb-10 text-xl font-Medium">Contact Us :</h1>
          <form action="" className=" flex">
            <div className=" flex flex-col">
              <input
                className=" w-96 mt-4 h-16 bg-[#d9d7d5] rounded border-none  placeholder:text-black pl-[14px]"
                type="text"
                placeholder="Name*"
              />
              <input
                className=" mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                type="text"
                placeholder="Phone number*"
              />
              <input
                className=" mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                type="text"
                placeholder="E-mail*"
                pla
              />
            </div>
            <textarea
              className=" w-full flex-row mt-4 ml-4 bg-[#d9d7d5] rounded placeholder:text-black pl-[14px] pt-[14px] "
              name="Message"
              placeholder="Message"
              id=""
            ></textarea>

          </form>
          <button className=" flex justify-center items-center  mt-4  bg-[#d9d7d5] rounded w-16 h-10">
              SEND
            </button>
        </div>
      </div>
    </div>




    <div className=" w-80 mt-20 ml-10 flex flex-col lg:hidden">
            <span className=" mt-20">+971557089953</span>
            <span className=" mt-10 text-xl font-Medium ">E-mail:</span>
            <h1 >info@studio53tm.com</h1>
            <h1 className=" mt-10 text-xl font-Medium">Contact Us :</h1>
            <form action="" className=" flex">
            <div className=" flex flex-col">
              <input
                className="w-80  mt-4 h-16 bg-[#d9d7d5] rounded border-none  placeholder:text-black pl-[14px]"
                type="text"
                placeholder="Name*"
              />
              <input
                className="w-80 mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                type="text"
                placeholder="Phone number*"
              />
              <input
                className="w-80 mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                type="text"
                placeholder="E-mail*"
                pla
              />
              <textarea
              className=" w-80 flex-row mt-4 bg-[#d9d7d5] rounded placeholder:text-black pl-[14px] pt-[14px] "
              name="Message"
              placeholder="Message"
              id=""
            ></textarea>
            <button className=" flex justify-center items-center  mt-10  bg-[#d9d7d5] rounded w-16 h-10">
              SEND
            </button>
            </div>
            

          </form>
          
            </div>
    </>
  );
}

export default ContactUs;
