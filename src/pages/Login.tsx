import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";

const Login = () => {
  return (
    <main className="grid min-h-screen grid-cols-[380px] content-center justify-center gap-16 mobile:grid-cols-[330px]">
      <Logo />
      <LoginForm />
    </main>
  );
};

export default Login;
