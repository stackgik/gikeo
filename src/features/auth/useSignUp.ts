import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: ({ username, email, password, avatar }: SignUpProps) =>
      signUpApi({ username, email, password, avatar }),
    onSuccess: () => {
      toast.success("Please check your email to confirm your account");
      navigate("/login", { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });

  return {
    signUp,
    isSigningUp,
  };
};

export default useSignUp;
