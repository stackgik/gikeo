import SignUpForm from "../features/auth/SignUpForm";
import Logo from "../ui/Logo";

const SignUp = () => {
  return (
    <main className="min-h-screen grid grid-cols-[380px] content-center justify-center gap-16">
      <Logo />
      <SignUpForm />
    </main>
  );
};

export default SignUp;
