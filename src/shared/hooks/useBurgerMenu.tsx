const useBurgerMenu = () => {
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
    },
    {
      name: "Каталог техники",
      fn: () => handleClick(document.getElementById("catalog")),
    },
    {
      name: "О нас",
      fn: () => handleClick(document.getElementById("about")),
    },
    {
      name: "Наши кейсы",
      fn: () => handleClick(document.getElementById("cases")),
    },
    {
      name: "Лизинг",
      fn: () => handleClick(document.getElementById("leasing")),
    },
  ];

  return { asideMenu };
};

export { useBurgerMenu };
