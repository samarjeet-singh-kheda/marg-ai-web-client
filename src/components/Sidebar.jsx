import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Dashboard",
    activeIcon: "/img/sidebar/dashboard-active.svg",
    inactiveIcon: "/img/sidebar/dashboard.svg",
    path: "/",
  },
  {
    id: 2,
    name: "Students",
    activeIcon: "/img/sidebar/students-active.svg",
    inactiveIcon: "/img/sidebar/students.svg",
    path: "/students",
  },
  {
    id: 3,
    name: "Assessments",
    activeIcon: "/img/sidebar/assessments-active.svg",
    inactiveIcon: "/img/sidebar/assessments.svg",
    path: "/assessments",
  },
  {
    id: 4,
    name: "Resources",
    activeIcon: "/img/sidebar/resources-active.svg",
    inactiveIcon: "/img/sidebar/resources.svg",
    path: "/resources",
  },
  {
    id: 5,
    name: "Result Analytics",
    activeIcon: "/img/sidebar/result-analytics-active.svg",
    inactiveIcon: "/img/sidebar/result-analytics.svg",
    path: "/result-analytics",
  },
  {
    id: 6,
    name: "Events",
    activeIcon: "/img/sidebar/events-active.svg",
    inactiveIcon: "/img/sidebar/events.svg",
    path: "/events",
  },
  {
    id: 7,
    name: "User",
    activeIcon: "/img/sidebar/user-active.svg",
    inactiveIcon: "/img/sidebar/user.svg",
    path: "/user",
  },
];

function Sidebar() {
  const { pathname } = useLocation();

  const isActiveRoute = (menuPath) => {
    if (menuPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(menuPath);
  };

  return (
    <section className="fixed flex h-screen w-[16.975rem] flex-col items-center border border-[#4D44B5] border-r-[#F3F4FF] bg-[#4D44B5] pt-8">
      <Link
        to="/"
        className="flex h-[2.88656rem] items-center justify-center gap-2"
      >
        <img src="/img/logo.svg" alt="logo" height={45} width={45} />
        <h1 className="font-poppins lead text-[2rem] font-bold text-white">
          Marg AI
        </h1>
      </Link>

      <nav className="mt-4 flex flex-col gap-2 pl-4">
        {menuItems.map((menu) => (
          <Link
            to={menu.path}
            key={menu.id}
            className={`group flex items-center gap-6 rounded-s-[2.5rem] px-6 py-2 text-lg font-medium hover:bg-[#F3F4FF] hover:text-[#4D44B5] ${
              isActiveRoute(menu.path)
                ? "bg-[#F3F4FF] text-[#4D44B5]"
                : "text-[#C1BBEB]"
            }`}
          >
            <img
              src={
                isActiveRoute(menu.path) || false
                  ? menu.activeIcon
                  : menu.inactiveIcon
              }
              className={`${!isActiveRoute(menu.path) ? "group-hover:hidden" : ""}`}
              alt={menu.name}
            />
            {!isActiveRoute(menu.path) && (
              <img
                src={menu.activeIcon}
                className="hidden group-hover:block"
                alt={menu.name}
              />
            )}
            <h2 className="">{menu.name}</h2>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Sidebar;
