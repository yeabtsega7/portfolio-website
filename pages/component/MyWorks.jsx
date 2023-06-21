import React from "react";
import HeadLine from "./HeadLine";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const myWork = [
  {
    title: "psychological consulting",
    img: "/assate/project3.png",
    content: `android app using flutter php and mysql where users can access to psychological consulting servic onlin from any where. the app allow users to chat with psychiatrist and video call. And u have acces to resources like video, book and audio to use onlin and to download it ,and a group discustion for user to share there filling and though with other.  `,
  },
  {
    title: "House ranting",
    img: "/assate/project6.png",
    content: `demo project or app platform useng flutter and firebase for posting house for rent. user can creat account, change ther user information, add post ,delet ther post and rent a house ,It is user friendly and easy to use and having nice and interactive user interface.`,
  },
  {
    title: "meftehie blog",
    img: "/assate/project2.png",
    content: `blog web project made by next js taillwindcss and headless csm `,
  },
  {
    title: "Metavers Madness",
    img: "/assate/project1.png",
    content: `landing web page made by nextjs 13 motion and animations `,
  },
  {
    title: "Vechile managment system",
    img: "/assate/project5.png",
    content: `Mobile app and web aplication using fluter and firebase for adding and manageng vechile and driver track driver  `,
  },
];
const onHover = (key) => {
  const element = document.getElementsByClassName("mywork");
  element[key].children[1].classList.add("block");
  element[key].children[1].classList.remove("hidden");
};
const onHoverOut = (key) => {
  const element = document.getElementsByClassName("mywork");
  element[key].children[1].classList.remove("block");
  element[key].children[1].classList.add("hidden");
};

const MyWorks = () => {
  return (
    <div id="portfolio" className="w-full py-16 bg-slate-100">
      <div className=" container mx-auto p-3">
        <HeadLine line={"My Works"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {myWork.map((e, key) => {
            return (
              <div
                className=" relative w-full h-80   rounded-lg overflow-hidden mywork bg-white"
                onMouseEnter={(event) => onHover(key)}
                onMouseLeave={(event) => onHoverOut(key)}
              >
                <img src={e.img} alt="" className="w-full h-full rounded-lg " />
                <div className=" w-full h-full hidden hover:block absolute top-0 z-10">
                  <div className=" relative w-full h-1/2 text-white flex flex-col justify-center items-center">
                    <div className="w-full h-full bg-black opacity-25 absolute"></div>
                    <div className="flex gap-2 absolute top-3 ">
                      <FontAwesomeIcon
                        style={{ fontSize: "40px" }}
                        icon={faGithub}
                        size="2xl"
                        className="text-hover-g text-3xl"
                      />
                    </div>
                    <div className="font-Nova-Cut text-3xl font-bold z-10 text-color-m">
                      {e.title}
                    </div>
                  </div>
                  <div className="w-full h-1/2 bg-white p-2">
                    <p className="text-center text-lg leading-4 font-Nova-Cut text-color-p">
                      {e.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
