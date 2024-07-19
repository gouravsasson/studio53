import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Email");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_clvlsvu",
        "template_ycydilp",
        form.current,
        "MzLb7LXWaJwlCGVNA"
      )
      .then(
        () => {
          setButtonText("Send Email");
          alert("Sent!");
          setFormData({
            user_name: "",
            user_email: "",
            user_number: "",
            message: "",
          });
        },
        (error) => {
          setButtonText("Send Email");
          alert(JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <div className="hidden md:block py-[60px] px-[65px]">
        <div className="flex ">
          <div className=" basis-[40%]  pt-[52px] pl-[74px]">
            <div className="flex flex-col  gap-y-16">
              
              <div className=" flex flex-col">
              <span className="">+971557089953</span>
              <span className="">+971527425553</span>
              </div>
              
              <div className=" flex flex-col gap-6">
              <span className="text-xl">E-mail:</span>
              <h1>info@studio53tm.com</h1>
              </div>

              <div className="">
                <div className="  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#bf7c5a"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <h1 className=" mt-3 text-xl">Dubai, UAE</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[60%]">
            <h1 className="mb-[30px] text-xl font-medium">Contact Us :</h1>
            <form ref={form} onSubmit={sendEmail} className=" flex flex-col  ">
              <div className=" flex gap-[20px]">
                <div className=" basis-[50%] flex flex-col gap-[20px]">
                  <input
                    className=" w-full  h-16 bg-[#d9d7d5] rounded-xl border-none placeholder:text-black pl-[14px]"
                    type="text"
                    name="user_name"
                    placeholder="Name*"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full  h-16 bg-[#d9d7d5] rounded-xl border-none placeholder:text-black pl-[14px]"
                    type="number"
                    name="user_number"
                    placeholder="Phone number*"
                    value={formData.user_number}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full  h-16 bg-[#d9d7d5] rounded-xl border-none placeholder:text-black pl-[14px]"
                    type="email"
                    name="user_email"
                    placeholder="E-mail*"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  className="  basis-[50%] w-full   bg-[#d9d7d5] rounded-xl placeholder:text-black pl-[14px] pt-[14px]"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className=" flex justify-center">
                <input
                  type="submit"
                  value={buttonText}
                  className=" p-4  mt-16 bg-[#d9d7d5] rounded-2xl"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-80 mt-20 ml-10 flex flex-col gap-6 lg:hidden">

        <div className=" flex flex-col">
      <span className="">+971557089953</span>
      <span className="">+971527425553</span>
      </div>

      <div>
        <span className="mt-10 text-xl font-medium">E-mail:</span>
        <h1>info@studio53tm.com</h1>

        </div>
        <div className="">
                <div className="  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#bf7c5a"
                    className="size-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <h1 className=" mt-3 text-xl">Dubai, UAE</h1>
                </div>
              </div>
        <h1 className="mt-10 text-xl font-medium">Contact Us :</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="flex flex-col">
            <input
              className="w-80 mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
              type="text"
              name="user_name"
              placeholder="Name*"
              value={formData.user_name}
              onChange={handleChange}
            />
            <input
              className="w-80 mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
              type="number"
              name="user_number"
              placeholder="Phone number*"
              value={formData.user_number}
              onChange={handleChange}
            />
            <input
              className="w-80 mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
              type="email"
              name="user_email"
              placeholder="E-mail*"
              value={formData.user_email}
              onChange={handleChange}
            />
            <textarea
              className="w-80 flex-row mt-4 bg-[#d9d7d5] rounded placeholder:text-black pl-[14px] pt-[14px]"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value={buttonText}
              className="flex justify-center items-center mt-10 bg-[#d9d7d5] rounded w-24 h-10"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
