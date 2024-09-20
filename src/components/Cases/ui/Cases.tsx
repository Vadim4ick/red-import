// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Container } from "@/shared/ui/container";
// import { CasesItem } from "./CasesItem";
// import { useMedia } from "@/shared/hooks/useMedia";
// import { useGetSuccessfulCasesQuery } from "@/graphql/__generated__";
// import { motion, useInView } from "framer-motion";
// import { motionConfigAnimate } from "@/shared/const/motion";

// const Cases = () => {
//   const { data, isLoading } = useGetSuccessfulCasesQuery();
//   const isMobile = useMedia(768);
//   const refMotion = useRef(null);
//   const casesContainerRef = useRef<HTMLDivElement>(null);
//   const [isScrollLocked, setIsScrollLocked] = useState(false);
//   const inView = useInView(refMotion);

//   // Блокируем скролл браузера
//   useEffect(() => {
//     if (isScrollLocked) {
//       document.body.style.overflow = "hidden"; // Блокировка вертикального скролла
//     } else {
//       document.body.style.overflow = "auto"; // Разблокировка вертикального скролла
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Восстанавливаем скролл при размонтировании
//     };
//   }, [isScrollLocked]);

//   // Обработчик горизонтального скролла
//   const handleScroll = () => {
//     const container = casesContainerRef.current;
//     if (!container) return;

//     const isAtStart = container.scrollLeft === 0;
//     const isAtEnd =
//       container.scrollLeft + container.clientWidth >= container.scrollWidth;

//     // Разблокируем вертикальный скролл, если прокрутили до конца или в начало
//     if (isAtStart || isAtEnd) {
//       setIsScrollLocked(false);
//     }
//   };

//   // Обработчик для включения блокировки скролла
//   const handleEnter = () => {
//     if (!isMobile) setIsScrollLocked(true); // Включаем блокировку только на десктопе
//   };

//   return (
//     <motion.section
//       ref={refMotion}
//       {...motionConfigAnimate}
//       animate={
//         inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
//       }
//       className="pb-[96px] pt-[72px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
//     >
//       <Container className="mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
//         <h2 className="heading-two">Успешные кейсы</h2>

//         <div className="pt-[48px] max-mobile:pt-[24px]">
//           <div
//             ref={casesContainerRef}
//             onScroll={!isMobile ? handleScroll : undefined}
//             onMouseEnter={handleEnter}
//             className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center mobile:overflow-x-auto"
//             style={{ overflowX: "auto" }}
//           >
//             {data &&
//               !isLoading &&
//               data.successfulCases.map((el) => (
//                 <CasesItem key={el.id} item={el} />
//               ))}
//           </div>
//         </div>
//       </Container>
//     </motion.section>
//   );
// };

// export { Cases };

"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/shared/ui/container";
import { CasesItem } from "./CasesItem";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetSuccessfulCasesQuery } from "@/graphql/__generated__";
import { motion, useInView } from "framer-motion";
import { motionConfigAnimate } from "@/shared/const/motion";

const Cases = () => {
  const { data, isLoading } = useGetSuccessfulCasesQuery();
  const isMobile = useMedia(768);
  const refMotion = useRef(null);
  const casesContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const inView = useInView(refMotion);

  // Вычисляем ширину скроллбара
  // useEffect(() => {
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;
  //   setScrollBarWidth(scrollbarWidth);
  // }, []);

  // // Блокируем скролл браузера и компенсируем ширину скроллбара
  // useEffect(() => {
  //   if (isScrollLocked) {
  //     document.body.style.overflow = "hidden"; // Блокировка вертикального скролла
  //     document.body.style.paddingRight = `${scrollBarWidth}px`; // Добавляем отступ, чтобы компенсировать исчезновение скроллбара
  //   } else {
  //     document.body.style.overflow = "auto"; // Разблокировка вертикального скролла
  //     document.body.style.paddingRight = "0px"; // Убираем отступ
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto"; // Восстанавливаем скролл при размонтировании
  //     document.body.style.paddingRight = "0px"; // Восстанавливаем отступ
  //   };
  // }, [isScrollLocked, scrollBarWidth]);

  // // Обработчик горизонтального скролла
  // const handleScroll = () => {
  //   const container = casesContainerRef.current;
  //   if (!container) return;

  //   const isAtStart = container.scrollLeft === 0;
  //   const isAtEnd =
  //     container.scrollLeft + container.clientWidth >= container.scrollWidth;

  //   // Разблокируем вертикальный скролл, если прокрутили до конца или в начало
  //   if (isAtStart || isAtEnd) {
  //     setIsScrollLocked(false);
  //   }
  // };

  // // Обработчик для включения блокировки скролла
  // const handleEnter = () => {
  //   if (!isMobile) setIsScrollLocked(true); // Включаем блокировку только на десктопе
  // };

  return (
    <motion.section
      ref={refMotion}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="pb-[96px] pt-[72px] max-mobile:pb-[64px] max-mobile:pt-[32px]"
    >
      <Container className="mobile:ml-auto mobile:mr-0 mobile:max-w-[1440px]">
        <h2 className="heading-two">Успешные кейсы</h2>

        <div className="pt-[48px] max-mobile:pt-[24px]">
          <div
            ref={casesContainerRef}
            // onScroll={!isMobile ? handleScroll : undefined}
            // onMouseEnter={handleEnter}
            className="custom-scrollbar flex gap-[20px] max-mobile:flex-col max-mobile:items-center mobile:overflow-x-auto"
            style={{ overflowX: "auto" }}
          >
            {data &&
              !isLoading &&
              data.successfulCases.map((el) => (
                <CasesItem key={el.id} item={el} />
              ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export { Cases };
