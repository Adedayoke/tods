import Link from "next/link";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import Image from "next/image";

export default function page() {
  return (
    <>
      <h2 className="font-bold">Welcome back</h2>
      <div className="relative w-[150px] h-[112px]">
        <Image alt="login screen Image" src="/login.png" fill />
      </div>
      <div className="w-full flex flex-col gap-6">
        <Input placeholder="Enter your Email" id="name" />
        <Input placeholder="Enter Password" id="name" />
      </div>
      <p className="text-primary-green text-center">Forgot password?</p>
      <Button href="/dashboard">Login</Button>
      <Link href="/register" className="text-sm">
        Don't have an account?{" "}
        <span className="text-primary-green">Sign up</span>
      </Link>
    </>
  );
}
