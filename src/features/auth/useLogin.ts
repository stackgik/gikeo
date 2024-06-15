import { useMutation } from "@tanstack/react-query";
import { LoginProps, login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: LoginProps) =>
      apiLogin({ email, password }),
    onSuccess: () => {
      toast.success("You have successfully logged in");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });

  return {
    login,
    isLoggingIn,
  };
};

export default useLogin;
