import React from "react";
import HeadLine from "./HeadLine";

const about1 = [
  { q: "Birth Day", v: "07 NOV 1999 GC" },
  { q: "Web Site", v: "https://yeab.com" },
  { q: "Degree", v: "Computer Engineering" },
  { q: "City", v: "Bahir Dar" },
];
const about2 = [
  { q: "Age", v: "24" },
  { q: "Email", v: "yeabtsegagashaw@gmail.com" },
  { q: "Phone", v: "+251902765166" },
];

const programing = [
  { q: "JS", v: "78", c: "Very Good" },
  { q: "PHP", v: "75", c: "Very Good" },
  { q: "Flutter", v: "88", c: "excellent" },
  { q: "Next.js", v: "65", c: "Good" },
  { q: "Html", v: "90", c: "excellent" },
];
const About = () => {
  return (
    <div
      id="about"
      className=" w-full m-auto py-16 bg-slate-100"
      // style={{ height: "100vh" }}
    >
      <div className=" container mx-auto">
        <HeadLine line={`About`} />
        <p className="capitalize text-Nova-Cut text-lg pb-6">
          I&apos;m Yeabtsega Gashaw and
          <span className="text-color-m font-bold">Web devloper</span>
        </p>
        <p className=" font-Nova-cut text-color-p font-thin text-sm px-2">
          I am a skilled and experienced professional with a passion for
          technology and creativity. As a tall individual, I bring a unique
          perspective to my work as a web designer, app developer, and
          programmer. With my expertise in these areas, I am able to create
          innovative and user-friendly digital solutions that meet the needs of
          my clients. my attention to detail and ability to think outside the
          box make me a valuable asset in the digital world. I am constantly
          learning and staying up-to-date with the latest trends and
          technologies, ensuring that my work is always cutting-edge and
          effective.
        </p>

        <div className="w-full grid md:grid-cols-3 gap-4 grid-cols-2 mt-10">
          <div className=" col-span-2 grid grid-cols-2 gap-2">
            <div className="">
              {about1.map((e, key) => {
                return (
                  <div
                    className="text-color-p border-b-2 p-1 pb-3 font-Nova-Cut text-lg font-bold"
                    key={key}
                  >
                    {e.q}
                    {":  "}
                    <span className="text-gray-700 font-thin">{e.v}</span>
                  </div>
                );
              })}
            </div>
            <div className="">
              {about2.map((e, key) => {
                return (
                  <div
                    className="text-color-p border-b-2 p-1 pb-3 font-Nova-Cut text-lg font-bold"
                    key={key}
                  >
                    {e.q}
                    {":  "}
                    <span className="text-gray-700 font-thin">{e.v}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" md:col-span-1 col-span-2">
            {programing.map((e, key) => {
              return (
                <div className="" key={key}>
                  <div className={`flex justify-between mb-2`}>
                    <p>{e.q}</p>{" "}
                    <p
                      className={`font-bold  ${
                        e.c == "excellent" ? "text-green-900" : "text-blue-900"
                      }`}
                    >
                      {e.c}
                    </p>
                  </div>
                  <div className=" bg-gray-200 h-2 w-full">
                    <div
                      style={{ width: `${e.v}%` }}
                      className="bg-m h-full"
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
