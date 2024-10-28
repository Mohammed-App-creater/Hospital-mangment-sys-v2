import img from "../assets/Logo-cercul-perfact.png";

const Logo = () => {
  function hiddenSideBar() {
    const sideBar = document.getElementById("side-bar");
    sideBar.classList.toggle("hidden");
  }

  return (
    <div className=" w-full  flex items-center justify-around mt-6 ">
      <div className="flex items-center gap-2 w-full ">
        <img className=" w-6 br-2 " src={img} alt="Logo"></img>
        <h2 className=" text-2xl font-bold">
          M<span className="text-danger">Hospital</span>
        </h2>
      </div>

      <div className="md:hidden" id="close-btn" onClick={hiddenSideBar}>
        <span className="material-icons-sharp">close</span>
      </div>
    </div>
  );
};

export default Logo;
