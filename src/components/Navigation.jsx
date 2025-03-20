import brandlogo from "../assets/images/brand_logo.png";
const Navigation=()=>{
return(
    <nav>
    <div className="logo">
              <img src={brandlogo} alt="brandlogo" width="100" />
    </div>
    <ul>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Location</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button>Login</button>
  </nav>
);

};
export default Navigation;