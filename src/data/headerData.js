import logo from "../assets/images/resources/logo-1.png";
import logo2 from "../assets/images/logo/logo-home.webp";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Home One",
        href: "/",
      },
      {
        id: 2,
        name: "Home Two",
        href: "/home2",
      },
      {
        id: 3,
        name: "Header Styles",
        href: "/",
        subItems: [
          {
            id: 1,
            name: "Header One",
            href: "",
          },
          { id: 2, name: "Header Two", href: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Packages",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Register",
    href: "",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contact Us",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+ 92 311 110 0309",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "info@sabsesastaticketgroup.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
