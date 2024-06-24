import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send Email');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm('service_clvlsvu', 'template_ycydilp', form.current, 'MzLb7LXWaJwlCGVNA')
      .then(
        () => {
          setButtonText('Send Email');
          alert('Sent!');
          setFormData({
            user_name: '',
            user_email: '',
            user_number: '',
            message: ''
          });
        },
        (error) => {
          setButtonText('Send Email');
          alert(JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <div className="hidden md:block mx-16 my-16">
        <div className="grid grid-cols-8 grid-rows-2">
          <div className="col-span-3">
            <div className="flex flex-col">
              <span className="mt-20">+971557089953</span>
              <span className="mt-20 text-xl">E-mail:</span>
              <h1>info@studio53tm.com</h1>
            </div>
          </div>
          <div className="col-span-5 row-span-2">
            <h1 className="mb-10 text-xl font-medium">Contact Us :</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div className="flex flex-col">
                <input
                  className=" mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                  type="text"
                  name="user_name"
                  placeholder="Name*"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <input
                  className="mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                  type="number"
                  name="user_number"
                  placeholder="Phone number*"
                  value={formData.user_number}
                  onChange={handleChange}
                />
                <input
                  className="mt-4 h-16 bg-[#d9d7d5] rounded border-none placeholder:text-black pl-[14px]"
                  type="email"
                  name="user_email"
                  placeholder="E-mail*"
                  value={formData.user_email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="w-full flex-row mt-4 bg-[#d9d7d5] rounded placeholder:text-black pl-[14px] pt-[14px]"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input
                type="submit"
                value={buttonText}
                className="mt-4 bg-[#d9d7d5] rounded w-24 h-10"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="w-80 mt-20 ml-10 flex flex-col lg:hidden">
        <span className="mt-20">+971557089953</span>
        <span className="mt-10 text-xl font-medium">E-mail:</span>
        <h1>info@studio53tm.com</h1>
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
