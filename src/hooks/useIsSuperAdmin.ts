import { useEffect, useState } from "react";
import { connectedUserStateSelector } from "../redux/auth/auth-selector";
import { useSelector } from "react-redux";

export const useIsSuperAdmin = () => {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const connectedEmplpoyee = useSelector(connectedUserStateSelector);
  useEffect(() => {
    if (connectedEmplpoyee) {
      const { roll } = connectedEmplpoyee;
      setIsSuperAdmin(roll === "Admin");
    }
  }, [connectedEmplpoyee]);

  return isSuperAdmin;
};
