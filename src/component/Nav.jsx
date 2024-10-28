const Nav = () => {
  function showSideBar() {
    const sideBar = document.getElementById("side-bar");
    sideBar.classList.toggle("hidden");
  }

  return (
    <div className="right-0 bg-white shadow-card fixed justify-evenly items-center px-4">
      <h1>Nav</h1>

      <span className="material-icons-sharp z-50" onClick={showSideBar}>
        menu
      </span>
    </div>
  );
};
export default Nav;
