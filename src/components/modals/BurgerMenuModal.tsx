"use client";

import { phoneNumber } from "@/shared/const";
import { useBurgerMenu } from "@/shared/hooks/useBurgerMenu";
import { Arrow } from "@/shared/icons/Arrow";
import { Phone } from "@/shared/icons/Phone";
import { Button } from "@/shared/ui/button";
import { toggleBidOpen } from "@/store/bidModal";
import { $burgerOpen, toggleBurgerOpen } from "@/store/burger";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const BurgerMenuModal = () => {
  const isOpen = useUnit($burgerOpen);
  const { asideMenu } = useBurgerMenu();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <div
      className={`fixed left-0 top-[var(--header-height)] z-[55] flex h-[calc(100%_-_48px)] w-full flex-col justify-between bg-[#F0F0F0] p-[24px] transition-transform duration-300 ${isOpen ? "translate-y-0 transform" : "-translate-y-full transform"}`}
    >
      <div className="flex flex-col gap-[20px]">
        {asideMenu.map((el) => (
          <button
            onClick={() => {
              el.fn();
              toggleBurgerOpen();
            }}
            key={el.name}
            className="flex cursor-pointer items-center justify-between"
          >
            <span className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
              {el.name}
            </span>
            <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-[6px]">
          <Phone className="size-[16px] fill-buttonColor text-buttonColor" />
          <p className="text-[12px] font-medium leading-[14px]">
            {phoneNumber}
          </p>
        </div>
        <Button
          onClick={() => {
            toggleBidOpen();
            toggleBurgerOpen();
          }}
          className="h-[40px] w-[155px] text-[12px] leading-[16px]"
        >
          Заказать звонок
        </Button>
      </div>
    </div>
  );
};

export { BurgerMenuModal };

// "use client";

// import { phoneNumber } from "@/shared/const";
// import { useBurgerMenu } from "@/shared/hooks/useBurgerMenu";
// import { Arrow } from "@/shared/icons/Arrow";
// import { Phone } from "@/shared/icons/Phone";
// import { Button } from "@/shared/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/shared/ui/sheet";
// import { toggleBidOpen } from "@/store/bidModal";
// import { $burgerOpen, toggleBurgerOpen } from "@/store/burger";
// import { useUnit } from "effector-react";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/shared/lib/utils";

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
//   closed: {
//     y: "-100%",
//     opacity: 0,
//     transition: { duration: 0.3, ease: "easeIn" },
//   },
// };

// const BurgerMenuModal = () => {
//   const isOpen = useUnit($burgerOpen);

//   const { asideMenu } = useBurgerMenu();

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "scroll";
//     }
//   }, [isOpen]);

//   return (
//     <Sheet open={isOpen} onOpenChange={() => toggleBurgerOpen()}>
//       <motion.div
//         className={cn(
//           "top-[var(--header-height)] flex h-[calc(100%_-_48px)] w-full flex-col justify-between gap-2 border-none bg-[#F0F0F0] p-[24px]",
//           {
//             "fixed z-50 gap-4 bg-background p-6 shadow-lg": isOpen,
//           },
//         )}
//         initial={{ y: "548px", opacity: 1 }} // начинаем с 48px скрыто
//         animate={isOpen ? "open" : "closed"}
//         variants={variants}
//       >
//         <SheetHeader className="flex flex-col gap-[20px]">
//           {asideMenu.map((el) => (
//             <button
//               onClick={() => {
//                 el.fn();
//                 toggleBurgerOpen();
//               }}
//               key={el.name}
//               className="flex cursor-pointer items-center justify-between"
//             >
//               <SheetTitle className="text-[24px] font-medium leading-[28px] text-[#3D3D3D]">
//                 {el.name}
//               </SheetTitle>

//               <Arrow className="size-[14px] rotate-180 text-[#3D3D3D]" />
//             </button>
//           ))}
//         </SheetHeader>

//         <div className="flex items-center justify-between gap-4">
//           <div className="flex items-center gap-[6px]">
//             <Phone className="size-[16px] fill-buttonColor text-buttonColor" />

//             <p className="text-[12px] font-medium leading-[14px]">
//               {phoneNumber}
//             </p>
//           </div>

//           <Button
//             onClick={() => {
//               toggleBidOpen();
//               toggleBurgerOpen();
//             }}
//             className="h-[40px] w-[155px] text-[12px] leading-[16px]"
//           >
//             Заказать звонок
//           </Button>
//         </div>
//       </motion.div>
//     </Sheet>
//   );
// };

// export { BurgerMenuModal };
