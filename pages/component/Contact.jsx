import React from "react";
import HeadLine from "./HeadLine";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className=" w-full py-16 bg-slate-100">
      <div className=" container mx-auto">
        <HeadLine line={"Contact"} />
        <p className="text-center font-Nova-Cut text-2xl text-color-m mb-4">
          Do You Any Question?
        </p>
        <p className="text-center font-Nova-Cut text-xl text-color-p mb-6">
          I&apos;M AT YOU SERVICE
        </p>
        <div className="flex flex-wrap justify-around my-16 text-center ">
          <div className="w-1/4">
            <p className="font-bold mb-2">Call Me On</p>
            <p className=" font-thin text-gray-500">+251902765166</p>
          </div>
          <div className="w-1/4">
            <p className="font-bold mb-2">Email</p>
            <p className=" font-thin text-gray-500">
              yeabtsegagashaw@gmail.com
            </p>
          </div>
          <div className="w-1/4">
            <p className="font-bold mb-2">Office</p>
            <p className=" font-thin text-gray-500">Addis Ababa</p>
          </div>
          <div className="w-1/4">
            <p className="font-bold mb-2">Wab site</p>
            <Link
              target="_blank"
              href="http://meftehie.com.et"
              className=" cursor-pointer font-thin text-gray-500 text-color-m"
            >
              meftehie.com.et
            </Link>
          </div>
        </div>
        <p className="text-center font-Nova-Cut text-2xl text-color-m mb-4">
          SEND ME AN EMAIL
        </p>
        <p className="text-center font-Nova-Cut text-xl text-color-p mb-6">
          I&apos;M VERY RESPOSIVE TO MESSAGES
        </p>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 mb-6 gap-3">
            <input
              type="text"
              className=" rounded-lg h-10 border-1 outline-none focus:ring-2 px-3 focus:ring-gray-200"
              placeholder="Name"
            />
            <input
              type="text"
              className=" rounded-lg h-10 border-1 outline-none focus:ring-2 px-3 focus:ring-gray-200"
              placeholder="Email"
            />
          </div>
          <div className="grid mb-6 grid-cols-1">
            <input
              type="text"
              className=" rounded-lg h-10 border-1 outline-none focus:ring-2 px-3 focus:ring-gray-200"
              placeholder="Subject"
            />
          </div>
          <div className="grid mb-6 grid-cols-1">
            <textarea
              className=" rounded-lg h-32 border-1 outline-none focus:ring-2 p-3 focus:ring-gray-200"
              placeholder="Message"
            />
          </div>
          <div className="flex ">
            <button
              type="button"
              className="p-2 bg-m text-slate-100 rounded-3xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
