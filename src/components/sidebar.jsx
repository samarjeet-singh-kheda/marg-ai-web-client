import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: "img/sidebar/dashboard.svg",
    path: "/",
  },
  {
    id: 2,
    name: "Students",
    icon: "img/sidebar/students.svg",
    path: "/students",
  },
  {
    id: 3,
    name: "Assessments",
    icon: "img/sidebar/assessments.svg",
    path: "/assessments",
  },
  {
    id: 4,
    name: "Resources",
    icon: "img/sidebar/resources.svg",
    path: "/resources",
  },
  {
    id: 5,
    name: "Result Analytics",
    icon: "img/sidebar/result-analytics.svg",
    path: "/result-analytics",
  },
  {
    id: 6,
    name: "Events",
    icon: "img/sidebar/events.svg",
    path: "/events",
  },
  {
    id: 7,
    name: "User",
    icon: "img/sidebar/user.svg",
    path: "/user",
  },
];

function Sidebar() {
  return (
    <section className="fixed flex h-screen w-[16.975rem] flex-col items-center border border-[#4D44B5] bg-[#4D44B5] pt-8">
      <Link
        to="/"
        className="flex h-[2.88656rem] items-center justify-center gap-2"
      >
        <img src="img/logo.svg" alt="logo" height={45} width={45} />
        <h1 className="font-poppins lead text-[2rem] font-bold text-white">
          Marg AI
        </h1>
      </Link>

      <nav className="mt-4 flex flex-col gap-2 pl-4">
        {menuItems.map((menu) => (
          <Link
            to={menu.path}
            key={menu.id}
            className="flex items-center gap-6 px-6 py-2"
          >
            <img src={menu.icon} alt={menu.name} />
            <h2 className="text-lg font-medium text-[#C1BBEB]">{menu.name}</h2>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Sidebar;
