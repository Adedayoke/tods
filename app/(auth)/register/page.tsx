import Link from "next/link";
import Button from "../../_components/Button";
import Input from "../../_components/Input";

export default function page() {
  return (
    <>
      <div className="text-center px-20">
        <h2 className="font-bold mb-3">Welcome Onboard</h2>
        <p className="text-sm">Lets help to meet up your tasks</p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <Input placeholder="Enter your full name" id="name" />
        <Input placeholder="Enter your email" id="name" />
        <Input placeholder="Enter password" id="name" />
        <Input placeholder="Confirm password" id="name" />
      </div>
      <Button href="/register">Register</Button>
      <Link href="/login" className="text-sm">
        Already have an account?{" "}
        <span className="text-primary-green">Sign in</span>
      </Link>
    </>
  );
}
