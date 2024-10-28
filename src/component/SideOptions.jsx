import MenuOption from "./MenuOption";

const SideOptions = () => {
  const Options = [
    { icon: "dashboard", name: "Dashboard" },
    { icon: "person_search", name: "Users" },
    { icon: "person_add_alt_1", name: "Registartion" },
    { icon: "receipt_long", name: "History" },
    { icon: "insights", name: "Analiytics" },
    { icon: "mail_outline", name: "Massage" },
    { icon: "inventory", name: "Check List" },
    { icon: "report_gmailerrorred", name: "Reports" },
    { icon: "settings", name: "Setting" },
    { icon: "add", name: "New Login" },
    { icon: "logout", name: "Logout" },
  ];
  return (
    <div className=" md:shadow-card md:bg-white w-full md:w-20 lg:w-48 rounded-medium flex flex-col HV  top-6 relative  sidebar Hover ">
      {Options.map((option, index) => (
        <MenuOption key={index} icon={option.icon} name={option.name} />
      ))}
    </div>
  );
};

export default SideOptions;
