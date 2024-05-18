import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  admin?: boolean;
  redirect?: string;
  redirectadmin?:string;
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
  redirectadmin="/admin/dashboard"
}: Props) => {
  if (!isAuthenticated) {
    toast.error("please login first");
    return( 
     <Navigate to={redirect} />);
    }

  if (adminOnly && !admin){ toast.error("only admin can access"); return <Navigate to={redirectadmin} />;}

  return children ? children : <Outlet />;
};

export default ProtectedRoute;