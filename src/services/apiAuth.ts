import { supabase } from "./supabase";

export type LoginProps = {
  email: string;
  password: string;
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
