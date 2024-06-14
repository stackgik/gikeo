import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";

const Login = () => {
  return (
    <main className="min-h-screen grid grid-cols-[380px] content-center justify-center gap-16">
      <Logo />
      <LoginForm />
    </main>
  );
};

export default Login;
