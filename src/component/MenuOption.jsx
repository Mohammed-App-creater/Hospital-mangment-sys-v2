/* eslint-disable react/prop-types */
const MenuOption = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const allMenuOptions = document.querySelectorAll(".sidebar a");
    allMenuOptions.forEach((option) => {
      option.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <a
      href="#"
      onClick={handleClick}
      className="  flex items-center gap-4 relative ml-6 h-12  hover:text-primary hover:ml-9   md:first:rounded-t-medium"
    >
      <span className="material-icons-sharp">{props.icon}</span>
      <h3 className="text-base font-bold md:hidden lg:block ">{props.name}</h3>
    </a>
  );
};

export default MenuOption;
