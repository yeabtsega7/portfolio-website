import React, { useEffect, useState } from "react";

const navMenu = [
  { id: "#home", name: "Home" },
  { id: "#about", name: "About" },
  { id: "#service", name: "Service" },
  { id: "#portfolio", name: "My Works" },
  { id: "#contact", name: "Contact" },
];
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScllor, setisScllor] = useState(0);
  const [serviceYLoc, setserviceYLoc] = useState(0);
  const [aboutYLoc, setaboutYLoc] = useState(0);
  const [myWorkYLoc, setMyWorkYLoc] = useState(0);
  const [contactYLoc, setContactYLoc] = useState(0);

  const onScroll = (event) => {
    setisScllor(window.pageYOffset);
  };

  useEffect(() => {
    setserviceYLoc(document.getElementById("service").offsetTop);
    setaboutYLoc(document.getElementById("about").offsetTop);
    setMyWorkYLoc(document.getElementById("portfolio").offsetTop);
    setContactYLoc(document.getElementById("contact").offsetTop);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  var hederBg = isScllor > 30 ? `bg-b` : ``;
  var title =
    isScllor < aboutYLoc - 100
      ? `HOME`
      : isScllor < serviceYLoc - 75
      ? `ABOUT`
      : isScllor < myWorkYLoc - 75
      ? `SERVICE`
      : isScllor < contactYLoc - 75
      ? `MY WORKS`
      : `CONTACT`;
  console.log(isNavOpen);
  var openNav = isNavOpen ? `block` : `hidden`;

  return (
    <div className={`${hederBg} fixed top-0 z-20 h-20  w-full text-white`}>
      <div className="container m-auto flex justify-between items-center h-20 ">
        <div className="text-color-m font-shrikhand text-4xl font-bold">
          {title}
        </div>
        <div className="md:hidden  fixed block right-10 top-3 donatMenu">
          <div className="" onClick={() => setIsNavOpen(!isNavOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`${openNav}  fixed p-2 right-4  bg-gray-700 text-color-w w-28`}
          >
            {navMenu.map((nav) => {
              return (
                <div className="text-hover-g p-1" key={nav.name}>
                  <a href={nav.id} onClick={() => setIsNavOpen(!isNavOpen)}>
                    {nav.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:flex justify-around gap-3 text-lg font-bold hidden ">
          {navMenu.map((nav) => {
            return (
              <div className="text-hover-g p-1" key={nav.name}>
                <a href={nav.id}>{nav.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
