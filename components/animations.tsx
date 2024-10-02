"use client";

import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

export default function Animations() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  });
  return null;
}
