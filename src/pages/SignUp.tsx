import SignUpForm from "../features/auth/SignUpForm";
import Logo from "../ui/Logo";

const SignUp = () => {
  return (
    <main className="grid min-h-screen grid-cols-[380px] content-center justify-center gap-16 mobile:grid-cols-[330px]">
      <Logo />
      <SignUpForm />
    </main>
  );
};

export default SignUp;
