import { supabase, supabaseUrl } from "./supabase";
import { v4 as uuidv4 } from "uuid";

// prettier-ignore
export const signUp = async ({ username, email, password, avatar}: SignUpProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        avatar: avatar || "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
};

export const login = async ({ email, password }: LoginProps) => {
  // what this does is simple. It takes the arguments and check the database if there is any user by such details. If yes, user is authenticated and a session is created.
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
};

//This function is used to get the current user in session, if any. It is needed for when the current page is still open and the user refreshes the page, which means the component will unmount to mount again i.e. re-render, we dont wanna send the user to the login page for leaving the page idle to couple of hours or so, bad for UX. So, if that is the case, we wanna download the user information from the DB again.

export const getCurrentUser = async () => {
  // checking if there is session
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // Downloading the user information the DB
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export type UpdateUserProps = {
  username?: string;
  password?: string;
  avatar?: File | null;
};

// This function is used to update the user's profile in the database.
export const updateUser = async ({
  username,
  password,
  avatar,
}: UpdateUserProps) => {
  const updateData: { password?: string; data?: { username?: string } } = {};

  // Conditionally add properties to updateData
  if (username) updateData.data = { ...(updateData.data || {}), username };
  if (password) updateData.password = password;

  // Updating either password or username
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data.user;

  // Handling avatar upload to supabas bucket with unique file name
  const fileName = `avatar-${data.user.id}-${uuidv4()}`;
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (uploadError) throw new Error(uploadError.message);

  // Updating user with the saved avatar
  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateError) throw new Error(updateError.message);
  return updatedUser;
};
