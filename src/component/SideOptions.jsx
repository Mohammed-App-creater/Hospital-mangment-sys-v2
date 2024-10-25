const SideOptions = () => {
  return (
    <div className=" bg-white">
      <a href="#">
        <span className="material-icons-sharp">dashboard</span>
        <h3>Dashbord</h3>
      </a>
      <a href="#" className="person_search " id="person_search">
        <span className="material-icons-sharp">person_search</span>
        <h3>Users</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">person_add_alt_1</span>
        <h3>Registartion</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">receipt_long</span>
        <h3>History</h3>
      </a>
      <a href="#" className="active" id="Analyse">
        <span className="material-icons-sharp">insights</span>
        <h3>Analiytics</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">mail_outline</span>
        <h3>Massage</h3>
        <span className="message-count">27</span>
      </a>
      <a href="#">
        <span className="material-icons-sharp">inventory</span>
        <h3>Check List</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">report_gmailerrorred</span>
        <h3>Reports</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">settings</span>
        <h3>Setting</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">add</span>
        <h3>New Login</h3>
      </a>
      <a href="#">
        <span className="material-icons-sharp">logout</span>
        <h3>Logout</h3>
      </a>
    </div>
  );
};

export default SideOptions;
