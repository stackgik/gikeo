import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useVerifyPassword = () => {
  const {
    mutate: verifyPassword,
    isPending: isVerifyingPassword,
    error: passwordVerificationError,
  } = useMutation({
    mutationFn: apiLogin,
    onError: () => toast.error("The old password is incorrect"),
  });

  return {
    verifyPassword,
    isVerifyingPassword,
    passwordVerificationError,
  };
};

export default useVerifyPassword;
