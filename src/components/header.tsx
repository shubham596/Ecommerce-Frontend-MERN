import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  return (
    <nav className="header">

     <img src="https://png.pngtree.com/png-clipart/20230116/original/pngtree-online-shopping-logo-desing-png-image_8918925.png" alt="logo" />
    
      
      <ul>
        <li><Link onClick={() => setIsOpen(false)} to={"/"}>
       <FaHome/> HOME
      </Link></li>
        <li> <Link onClick={() => setIsOpen(false)} to={"/search"}>
       <FaSearch /> SEARCH
      </Link></li>
        <li> <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag /> CART
      </Link></li>

        <li> 
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser /> PROFILE
          </button>
          <dialog open={isOpen}>
            <div>
              {/* {user.role === "admin" && ( */}
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Dashboard
                </Link>
              {/* )} */}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
          
            {
              user?._id?( <button   onClick={logoutHandler}>
               Logout 
              </button>): (
        <Link onClick={() => setIsOpen(false)} to={"/login"}>
         <FaSignInAlt />
        </Link>
      )
            }

             
            </div>
          </dialog>
        </>
       </li>
      </ul>
      
     
     

     
    </nav>
  );
};

export default Header;