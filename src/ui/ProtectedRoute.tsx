import { ReactNode, useEffect } from "react";
import useCurrentUser from "../features/auth/useCurrentUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isUserLoading, isAuthenticated } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isUserLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isUserLoading, navigate]);

  if (isUserLoading)
    return (
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-md">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
