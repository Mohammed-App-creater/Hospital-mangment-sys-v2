import img from "../assets/Logo-cercul-perfact.png";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 ">
        <img className=" w-10 br-2 " src={img} alt="Logo"></img>
        <h2 className="text-gray-700 text-xl font-bold ">
          M<span className="text-colour-info-dark text-danger">Hospit</span>
        </h2>
      </div>
      <div className="close" id="close-btn">
        <span className="material-icons-sharp">close</span>
      </div>
    </div>
  );
};

export default Logo;
