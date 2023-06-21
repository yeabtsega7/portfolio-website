import React, { useEffect } from "react";
import HeadLine from "./HeadLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCode,
  faPenRuler,
  faMobileAndroid,
  faListCheck,
  faDis,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

import {} from "@fortawesome/free-solid-svg-icons";
const services = [
  {
    s: "web designing",
    c: "Including website design, responsive design, graphic design, user experience design. I can design custom websites that are tailored to My clients' specific needs and requirements.",
    i: faPenRuler,
  },
  {
    s: "web Development",
    c: "Including website development, web application development, e-commerce solutions, content management systems, website maintenance , website hosting, and website analytics. I can create custom websites and web applications that are tailored to my clients' specific needs and requirements, and offer ongoing support to ensure that their websites and applications are always up-to-date and functioning properly.",
    i: faCode,
  },
  {
    s: "App Development",
    c: "including mobile app development, cross-platform app development, app maintenance and support. I can create custom apps that are tailored to My clients' specific needs and requirements, and offer ongoing support to ensure that their apps are always up-to-date and functioning properly.",
    i: faMobileAndroid,
  },
  {
    s: "Project Managment",
    c: "Including project planning, resource allocation, risk management, quality assurance, team management, and stakeholder communication. I can oversee the entire software development life cycle, from requirements gathering to deployment, ensuring that the project is completed on time, within budget, and to the client's satisfaction. I can also provide guidance and support to your team of programmers, helping them to stay on track and meet their deadlines. ",
    i: faListCheck,
  },
  {
    s: "Counseling",
    c: "I can offer a range of services to help businesses optimize their technology infrastructure and improve their overall efficiency. And I can  provide expert advice on hardware and software selection, network design and implementation, cybersecurity, and data management. I can also offer ongoing technical support to ensure that systems are running smoothly and any issues are resolved quickly. ",
    i: faChalkboardTeacher,
  },
];

const Service = () => {
  useEffect(() => {
    const serviceElement = document.getElementsByClassName("service");
    for (var i = 0; i < serviceElement.length; i++) {
      console.log(
        serviceElement[i].children[0].children[0].classList.add("class")
      );
    }
  }, []);
  const onHover = (element, key) => {
    const serviceElement = document.getElementsByClassName("service");
    serviceElement[key].children[0].children[0].classList.add("bg-m");
  };
  const onHoveroff = (element, key) => {
    const serviceElement = document.getElementsByClassName("service");
    serviceElement[key].children[0].children[0].classList.remove("bg-m");
  };

  return (
    <div id="service" className=" container py-16 m-auto">
      <HeadLine line={"Service"} />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-9">
        {services.map((e, key) => {
          return (
            <div
              className="w-full  border-2 border-gray-400 rounded-lg service p-4"
              onMouseEnter={(event) => onHover(event, key)}
              onMouseLeave={(event) => onHoveroff(event, key)}
              key={key}
            >
              <div className="flex justify-center">
                <div className="bg-hover-g rounded-full h-16 w-16 flex justify-center items-center">
                  <FontAwesomeIcon icon={e.i} size="2xl" />
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <p className="font-bold text-lg capitalize">{e.s}</p>
              </div>
              <div className="flex justify-center pt-4">
                <p className="text-lg leading-5 font-thin text-center font-Nova-Cut ">
                  {e.c}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
