import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

const useCurrentUser = () => {
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ["current_user"],
    queryFn: () => getCurrentUser(),
    retry: false,
  });

  return {
    user,
    isUserLoading,
    isAuthenticated: user?.role === "authenticated",
  };
};

export default useCurrentUser;
