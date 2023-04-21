const data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Course",
    link: "/",
    sub_menus: [
      { link: "/portfolio", title: "Free Course" },
      { link: "/portfolio-2", title: "Paid Course" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Join Telegram",
    link: "/",
    sub_menus: [
      { link: "/", title: "Free Channel" },
      { link: "/", title: "Paid Channel" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Event",
    link: "/event",
  },
];
export default data;
