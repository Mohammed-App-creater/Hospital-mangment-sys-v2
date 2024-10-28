import SideBar from "./SideBar";
import Nav from "./nav";

const App = () => {
  return (
    <div className=" grid w-11/12  bg-primary h-96 grid-col-1 md:grid grid-cols-[7rem_auto_23rem] lg:grid-cols-[12rem_auto_23rem] gap-7 m-auto ">
      <div>
      <Nav />
      <SideBar />
      </div>
      
    </div>
  );
};

export default App;
