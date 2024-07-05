import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useUpdatedUser = () => {
  const queryClient = useQueryClient(); // get the query client
  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserApi, //this is a very simple way, meaning all args passed into the mutate function goes stright into the updateUserApi without any modifications
    onSuccess: () => {
      toast.success(`User details was updated successfully`);
      queryClient.invalidateQueries({ queryKey: ["current_user"] }); //will fetch user details again and cache
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(`Trouble updating user details: ${error.message}`);
      } else {
        toast.error("Trouble updating user details");
      }
    },
  });

  return {
    updateUser,
    isUpdatingUser,
  };
};

export default useUpdatedUser;
