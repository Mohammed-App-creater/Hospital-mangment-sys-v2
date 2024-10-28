import Logo from "./logo";
import SideOptions from "./sideOptions";

const SideBar = () => {
  return (
    <aside
      id="side-bar"
      className="fixed bg-white w-1/2 md:h-lvh  shadow-card top-0 -left-full hidden md:block   transition-all animation"
      style={{ zIndex: 10 }}
    >
      <Logo />
      <SideOptions />
    </aside>
  );
};

export default SideBar;
