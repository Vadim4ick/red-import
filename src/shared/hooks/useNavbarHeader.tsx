import { useEffect, useState } from "react";

const useNavbarHeader = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 60% of the section is in view
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Handle window resize or layout changes
  useEffect(() => {
    const handleResize = () => {
      // Re-trigger IntersectionObserver on resize
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.5 },
        );
        observer.observe(section);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (element: HTMLElement | null) => {
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = offsetTop - 80;
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  const asideMenu = [
    {
      name: "Преимущества",
      fn: () => handleClick(document.getElementById("advantages")),
      id: "advantages",
    },
    {
      name: "Каталог",
      fn: () => handleClick(document.getElementById("catalog")),
      id: "catalog",
    },
    {
      name: "О нас",
      fn: () => handleClick(document.getElementById("about")),
      id: "about",
    },
    {
      name: "Наши кейсы",
      fn: () => handleClick(document.getElementById("cases")),
      id: "cases",
    },
    {
      name: "Лизинг",
      fn: () => handleClick(document.getElementById("leasing")),
      id: "leasing",
    },
  ];

  return { asideMenu, activeSection };
};

export { useNavbarHeader };
