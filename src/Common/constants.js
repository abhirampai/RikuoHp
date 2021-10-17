import carImage1 from "../Assets/1.jpeg";
import carImage2 from "../Assets/2.jpeg";
import carImage3 from "../Assets/3.jpeg";
import carImage4 from "../Assets/4.jpeg";
import carImage5 from "../Assets/5.jpeg";
import carImage6 from "../Assets/6.jpeg";
import carImage7 from "../Assets/7.jpeg";

export const INITIAL_LINKS_CLICKED = {
  information: false,
  ourhistory: false,
  services: false,
  contact: false,
};

export const LINK_CLICKED = {
  textStyle: "text-2xl xl:text-4xl text-white",
  borderStyle: "w-12 border-b border-white",
};
export const LINK_NOT_CLICKED = {
  textStyle: "text-sm xl:text-lg text-gray-400",
  borderStyle: "w-24 border-b border-gray-400",
};

export const INFO = {
  information: {
    heading: "Company information",
    content: [
      {
        heading: "Company address",
        body: `Nishinomiya, Hyogo 663-8181 
      1-3-14 Wakakusa-cho, Nishinomiya-shi, Hyogo-ken, Japan`,
      },
      {
        heading: "Capital",
        body: `10,000,000 ¥`,
      },
      {
        heading: "Employees",
        body: `5 people`,
      },
    ],
  },
  ourhistory: {
    heading: `History of the company`,
    content: [
      {
        heading: `Established in 1971`,
        body: `Commencement of the Petrol Station Business`,
      },
      {
        heading: `By 1996`,
        body: `4 gas stations in Nishinomiya and Amagasaki`,
      },
      {
        heading: `Since 2016`,
        body: `Each station has been converted 
        to a PVT. LTD. Company`,
      },
    ],
  },
  services: {
    heading: "Services",
    content: [
      {
        heading: "",
        body: "- Setting up Gasoline Stands",
      },
      {
        heading: "",
        body: "- Dealing in Second Hand Cars",
      },
      {
        heading: "",
        body: "- Maintenance and customisation",
      },
      {
        heading: "",
        body: "- Car Rental Services",
      },
      {
        heading: "",
        body: "- Exports",
      },
      {
        heading: "",
        body: "and more...",
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    content: [
      {
        heading: "",
        body: "hondy.tanso@icloud.com",
      },
      {
        heading: "",
        body: "070-4383-1177",
      },
      {
        heading: "",
        body: "07-9847-6154",
      },
      {
        heading: "Company Address",
        body: "",
      },
      {
        heading: "",
        body: `〒663-8181,Wakakusa-cho 1-chome, 
        Nishinomiya-shi, Hyogo, Japan`,
      },
    ],
  },
};

export const IMAGES = [
  carImage1,
  carImage2,
  carImage3,
  carImage4,
  carImage5,
  carImage6,
  carImage7,
];
