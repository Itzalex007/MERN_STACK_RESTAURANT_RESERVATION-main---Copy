import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link, useNavigate } from "react-router-dom";
import { Link as Linkk } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSearchCircle, HiOutlineSearchCircle } from "react-icons/hi";
// import { Navigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("")

  const handleChange = (e)=>{
    setValue(e.target.value.toLowerCase())
  }

  const handleClick = ()=>{
navigate("/dishes")
  }
  
  const handleClick2 = ()=>{
    navigate("/")
      }
      const handleClick3 = ()=>{
        navigate("/dishes")
        setValue("")
          }
  return (
    <>
      <nav>
        <div onClick={handleClick2} className="logo">MINHAJ</div>
       <HiOutlineSearchCircle/> <div className="searchbar"> <input value={value} onChange={handleChange} placeholder="Search Food" type="search" />
            { value &&

              data[0].dishes.filter((item)=>{ return(

                item.title.toLowerCase().includes(value)
              )  
              }).map((item)=>{
                return <div onClick={handleClick3} className="suggetion" key={item.id}>{item.title}</div>
              })
            
            }

       </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))} */}
            <Link to="/">HOME</Link>
            <Linkk to="reservation" spy={true} duration={500} smooth={true}>RESERVATION</Linkk>
            <Link to="/dishes">DISHES</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/team">TEAM</Link>
            <Link style={{color:"#ff450f",fontWeight:"400"}} to="/signup">SignUp</Link> 
            <Link style={{color:"#ff450f",fontWeight:"400"}} to="/login">LogIn</Link> 
          </div>
          <button onClick={handleClick} className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
