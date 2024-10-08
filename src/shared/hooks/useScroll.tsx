// "use client";

// import { useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const useScroll = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const [isScrollLocked, setIsScrollLocked] = useState(true); // Заблокирован (Да, нет)
//   const [hasScrolled, setHasScrolled] = useState(false); // Проскроллен (Да, нет)

//   const isInView = useInView(sliderRef, {
//     amount: "all",
//   });

//   useEffect(() => {
//     if (hasScrolled) {
//       sliderRef.current = null;
//     }
//   }, [hasScrolled]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (isScrollLocked && !hasScrolled && sliderRef.current && isInView) {
//         sliderRef.current.scrollLeft += e.deltaY;
//       }
//     };

//     if (isScrollLocked && !hasScrolled && isInView) {
//       document.body.style.overflow = "hidden";
//       window.addEventListener("wheel", handleWheel);
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [isScrollLocked, isInView, hasScrolled]);

//   // Проверка, находится ли элемент вне видимой области при загрузке
//   useEffect(() => {
//     const rect = sliderRef.current?.getBoundingClientRect();

//     if (!rect) return;

//     if (rect.y < 0) {
//       setHasScrolled(true);
//     }
//   }, []);

//   const handleScroll = () => {
//     if (!sliderRef.current) return;

//     const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

//     if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
//       setIsScrollLocked(false);
//       document.body.style.overflow = "auto";
//       setHasScrolled(true);

//       if (scrollLeft === 0) {
//         setIsScrollLocked(true);
//       }

//       if (scrollLeft + clientWidth < scrollWidth) {
//         setHasScrolled(false);
//       }
//     } else {
//       setIsScrollLocked(true);
//       document.body.style.overflow = "hidden";
//     }
//   };

//   return {
//     ref: sliderRef,
//     handleScroll,
//   };
// };

// export { useScroll };

// "use client";

// import { useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// const useScroll = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const [isScrollLocked, setIsScrollLocked] = useState(true);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const isInView = useInView(sliderRef, {
//     amount: "all",
//   });

//   useEffect(() => {
//     if (hasScrolled) {
//       sliderRef.current = null;
//     }
//   }, [hasScrolled]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (isScrollLocked && !hasScrolled && sliderRef.current && isInView) {
//         sliderRef.current.scrollLeft += e.deltaY;
//       }
//     };

//     if (isScrollLocked && !hasScrolled && isInView) {
//       // Lock scroll
//       disableBodyScroll(sliderRef.current!);
//       window.addEventListener("wheel", handleWheel);
//     } else {
//       // Unlock scroll
//       enableBodyScroll(sliderRef.current!);
//     }

//     return () => {
//       enableBodyScroll(sliderRef.current!);
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [isScrollLocked, isInView, hasScrolled]);

//   useEffect(() => {
//     const rect = sliderRef.current?.getBoundingClientRect();

//     if (!rect) return;

//     if (rect.y < 0) {
//       setHasScrolled(true);
//     }
//   }, []);

//   const handleScroll = () => {
//     if (!sliderRef.current) return;

//     const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

//     if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
//       setIsScrollLocked(false);
//       enableBodyScroll(sliderRef.current);
//       setHasScrolled(true);
//     } else {
//       setIsScrollLocked(true);
//       disableBodyScroll(sliderRef.current);
//     }
//   };

//   return {
//     ref: sliderRef,
//     handleScroll,
//   };
// };

// export { useScroll };
"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isScrollLocked, setIsScrollLocked] = useState(true); // Заблокирован (Да, нет)
  const [hasScrolled, setHasScrolled] = useState(false); // Проскроллен (Да, нет)

  const isInView = useInView(sliderRef, {
    amount: "all",
  });

  useEffect(() => {
    if (hasScrolled) {
      sliderRef.current = null;
    }
  }, [hasScrolled]);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right"),
      ) || 0;

    console.log(bodyPaddingRight);

    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && !hasScrolled && sliderRef.current && isInView) {
        sliderRef.current.scrollLeft += e.deltaY;
      }
    };

    if (isScrollLocked && !hasScrolled && isInView) {
      document.body.style.overflow = "hidden";
      body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
      window.addEventListener("wheel", handleWheel);
    } else {
      body.style.paddingRight = "";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      body.style.paddingRight = "";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrollLocked, isInView, hasScrolled]);

  // Проверка, находится ли элемент вне видимой области при загрузке
  useEffect(() => {
    const rect = sliderRef.current?.getBoundingClientRect();

    if (!rect) return;

    if (rect.y < 0) {
      setHasScrolled(true);
    }
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const html = document.documentElement;
    const { body } = document;
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right"),
      ) || 0;

    console.log(bodyPaddingRight);

    if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
      setIsScrollLocked(false);
      document.body.style.overflow = "auto";
      body.style.paddingRight = "";
      setHasScrolled(true);

      if (scrollLeft === 0) {
        setIsScrollLocked(true);
      }

      if (scrollLeft + clientWidth < scrollWidth) {
        setHasScrolled(false);
      }
    } else {
      setIsScrollLocked(true);
      document.body.style.overflow = "hidden";
      body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    }
  };

  return {
    ref: sliderRef,
    handleScroll,
  };
};

export { useScroll };

// "use client";

// import { useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const useScroll = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const [isScrollLocked, setIsScrollLocked] = useState(true);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const isInView = useInView(sliderRef, {
//     amount: "all",
//   });

//   useEffect(() => {
//     if (hasScrolled) {
//       sliderRef.current = null;
//     }
//   }, [hasScrolled]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (isScrollLocked && !hasScrolled && sliderRef.current && isInView) {
//         sliderRef.current.scrollLeft += e.deltaY;
//       }
//     };

//     if (isScrollLocked && !hasScrolled && isInView) {
//       // Create and append a compensation element
//       const scrollbarWidth =
//         window.innerWidth - document.documentElement.clientWidth;

//       if (scrollbarWidth > 0) {
//         const scrollbarCompensation = document.createElement("div");
//         scrollbarCompensation.style.position = "fixed";
//         scrollbarCompensation.style.top = "0";
//         scrollbarCompensation.style.right = "0";
//         scrollbarCompensation.style.width = `${scrollbarWidth}px`;
//         scrollbarCompensation.style.height = "100vh";
//         scrollbarCompensation.style.backgroundColor = "transparent";
//         scrollbarCompensation.style.pointerEvents = "none";
//         scrollbarCompensation.classList.add("scrollbar-compensation");
//         document.body.appendChild(scrollbarCompensation);
//       }

//       document.body.style.overflow = "hidden";
//       window.addEventListener("wheel", handleWheel);
//     } else {
//       // Clean up
//       document.body.style.overflow = "auto";
//       document
//         .querySelectorAll(".scrollbar-compensation")
//         .forEach((el) => el.remove());
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document
//         .querySelectorAll(".scrollbar-compensation")
//         .forEach((el) => el.remove());
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [isScrollLocked, isInView, hasScrolled]);

//   useEffect(() => {
//     const rect = sliderRef.current?.getBoundingClientRect();

//     if (!rect) return;

//     if (rect.y < 0) {
//       setHasScrolled(true);
//     }
//   }, []);

//   const handleScroll = () => {
//     if (!sliderRef.current) return;

//     const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
//     const scrollbarWidth =
//       window.innerWidth - document.documentElement.clientWidth;

//     if (scrollLeft === 0 || scrollLeft + clientWidth >= scrollWidth) {
//       setIsScrollLocked(false);
//       document.body.style.overflow = "auto";
//       setHasScrolled(true);
//       document
//         .querySelectorAll(".scrollbar-compensation")
//         .forEach((el) => el.remove());

//       if (scrollLeft === 0) {
//         setIsScrollLocked(true);
//         if (scrollbarWidth > 0) {
//           const scrollbarCompensation = document.createElement("div");
//           scrollbarCompensation.style.position = "fixed";
//           scrollbarCompensation.style.top = "0";
//           scrollbarCompensation.style.right = "0";
//           scrollbarCompensation.style.width = `${scrollbarWidth}px`;
//           scrollbarCompensation.style.height = "100vh";
//           scrollbarCompensation.style.backgroundColor = "transparent";
//           scrollbarCompensation.style.pointerEvents = "none";
//           scrollbarCompensation.classList.add("scrollbar-compensation");
//           document.body.appendChild(scrollbarCompensation);
//         }
//       }

//       if (scrollLeft + clientWidth < scrollWidth) {
//         setHasScrolled(false);
//       }
//     } else {
//       setIsScrollLocked(true);
//       document.body.style.overflow = "hidden";
//       if (scrollbarWidth > 0) {
//         const scrollbarCompensation = document.createElement("div");
//         scrollbarCompensation.style.position = "fixed";
//         scrollbarCompensation.style.top = "0";
//         scrollbarCompensation.style.right = "0";
//         scrollbarCompensation.style.width = `${scrollbarWidth}px`;
//         scrollbarCompensation.style.height = "100vh";
//         scrollbarCompensation.style.backgroundColor = "transparent";
//         scrollbarCompensation.style.pointerEvents = "none";
//         scrollbarCompensation.classList.add("scrollbar-compensation");
//         document.body.appendChild(scrollbarCompensation);
//       }
//     }
//   };

//   return {
//     ref: sliderRef,
//     handleScroll,
//   };
// };

// export { useScroll };
