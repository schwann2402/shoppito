import p_img1 from "./p_img1.png";
import p_img1_2 from "./p_img1_2.png";
import p_img1_3 from "./p_img1_3.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";

import logo from "./logo.png";
import hero_img from "./hero_img.jpg";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import razorpay_logo from "./razorpay_logo.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import stripe_logo from "./stripe_logo.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import cross_icon from "./cross_icon.png";
import visa_logo from "./visa_logo.png";
import mastercard_logo from "./mastercard_logo.png";
import amex_logo from "./amex_logo.png";
import paypal_logo from "./paypal_logo.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  razorpay_logo,
  search_icon,
  star_dull_icon,
  stripe_logo,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  cross_icon,
  visa_logo,
  mastercard_logo,
  amex_logo,
  paypal_logo,
};

export const products = [
  {
    _id: "aaaaa",
    name: "PlayStation 5",
    description:
      "The PlayStation 5 (PS5) is Sony's next-gen gaming console, featuring ultra-fast SSD storage, stunning graphics with ray tracing, and the immersive DualSense controller for an enhanced gaming experience.",
    price: 459,
    image: [p_img1, p_img1_2, p_img1_3],
    category: "Console",
    subCategory: "Sony",

    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "Nintendo Switch OLED",
    description:
      "The Nintendo Switch OLED is an upgraded version of the popular hybrid console, featuring a vibrant 7-inch OLED screen, enhanced audio, and 64GB internal storage for a more immersive handheld and docked gaming experience.",
    price: 299,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Console",
    subCategory: "Nintendo",
    date: 1716621345448,
    bestseller: false,
  },
  {
    _id: "aaaac",
    name: "Xbox One Series S",
    description:
      "The Xbox Series S is a compact, all-digital next-gen console from Microsoft, offering fast load times, 1440p gaming, and seamless gameplay with its custom SSD and powerful performance at an affordable price.",
    price: 390,
    image: [p_img3],
    category: "Console",
    subCategory: "Microsoft",
    date: 1716234545448,
    bestseller: false,
  },
  {
    _id: "aaaad",
    name: "Xbox One Series X",
    description:
      "The Xbox Series X is Microsoft's most powerful console, featuring 4K gaming, a 1TB SSD for fast load times, and advanced graphics with ray tracing for a premium next-gen gaming experience",
    price: 490,
    image: [p_img4],
    category: "Console",
    subCategory: "Microsoft",
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "PlayStation 5 Slim Digital",
    description:
      "The PlayStation 5 Slim Digital is a more compact, all-digital version of Sony's next-gen console, offering the same fast performance, stunning graphics, and immersive gameplay without a disc drive.",
    price: 299,
    image: [p_img5],
    category: "Console",
    subCategory: "Sony",
    date: 1716622345448,
    bestseller: false,
  },
  {
    _id: "aaaaf",
    name: "iPad Mini 7",
    description:
      "The iPad Mini 7 is a compact and powerful tablet featuring a sleek design, advanced A-series chip, vibrant display, and compatibility with the Apple Pencil, ideal for on-the-go productivity and entertainment.",
    price: 299,
    image: [p_img6],
    category: "Tablet",
    subCategory: "Apple",
    date: 1716623423448,
    bestseller: false,
  },
  {
    _id: "aaaag",
    name: "iPad Pro M4 13''",
    description:
      "The iPad Pro M4 13\" is Apple's most advanced tablet, featuring the powerful M4 chip, a stunning 13-inch Liquid Retina display, and support for the Apple Pencil and Magic Keyboard, delivering exceptional performance for professionals and creatives.",
    price: 499,
    image: [p_img7],
    category: "Tablet",
    subCategory: "Apple",
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "iPad Air M2 128Gb",
    description:
      "The iPad Air M2 128GB combines powerful performance with the M2 chip, a stunning 10.9-inch Liquid Retina display, and ample storage, making it perfect for multitasking, creativity, and entertainment",
    price: 349,
    image: [p_img8],
    category: "Tablet",
    subCategory: "Apple",
    date: 1716622345448,
    bestseller: true,
  },
  {
    _id: "aaaai",
    name: "iPhone 16 Pro Max",
    description:
      "The iPhone 16 Pro Max features a stunning Super Retina XDR display, the powerful A17 Pro chip for lightning-fast performance, and an advanced camera system, delivering exceptional photography and seamless multitasking in a sleek design",
    price: 899,
    image: [p_img9],
    category: "Phone",
    subCategory: "Apple",

    date: 1716621235448,
    bestseller: true,
  },
  {
    _id: "aaaaj",
    name: "MacBook Pro M3",
    description:
      "The MacBook Pro M3 combines powerful M3 chip performance with a stunning Retina display and long battery life, making it ideal for professionals and creatives seeking high performance in a sleek, portable design.",
    price: 1199,
    image: [p_img10],
    category: "Laptop",
    subCategory: "Apple",
    sizes: ["S", "L", "XL"],
    date: 1716622235448,
    bestseller: true,
  },
  {
    _id: "aaaak",
    name: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 features a stunning Dynamic AMOLED display, a powerful triple-camera system, and top-tier performance, making it perfect for photography and multimedia on the go.",
    price: 379,
    image: [p_img11],
    category: "Phone",
    subCategory: "Samsung",
    sizes: ["S", "M", "L"],
    date: 1716623345448,
    bestseller: false,
  },
  {
    _id: "aaaal",
    name: "Samsung Galaxy S23",
    description:
      "The Samsung Galaxy S23 boasts a vibrant AMOLED display, a cutting-edge camera system, and powerful performance, delivering an exceptional smartphone experience for both productivity and entertainment.",
    price: 699,
    image: [p_img12],
    category: "Phone",
    subCategory: "Samsung",
    sizes: ["S", "M", "L", "XL"],
    date: 1716624445448,
    bestseller: false,
  },
];
