import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: () => apiLogout(),
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: (error) => toast.error(error.message),
  });

  return { logout, isLoggingOut };
};

export default useLogout;
