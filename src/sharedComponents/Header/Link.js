import { NavLink } from "react-router-dom";

export default function Link({
  name,
  count,
  showCount = true,
  path,
  customStyles,
}) {
  return (
    <NavLink
      to={path}
      end={false}
      className={({ isActive }) =>
        isActive
          ? `bg-transparent border-b-2 border-[white] text-white flex justify-center space-x-2 py-6 px-2 mx-2 ${customStyles}`
          : `bg-transparent border-b-2 border-transparent hover:border-gray-400 hover:border-b-2 text-white flex justify-center space-x-2 py-6 px-2 mx-2 ${customStyles}`
      }>
      {showCount && <p>{"0" + count}</p>}
      <p className="tracking-wider uppercase">{name}</p>
    </NavLink>
  );
}
