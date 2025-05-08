import Image from "next/image";
import Button from "./_components/Button";

export default function Home() {
  return (
    <div className="min-h-[100dvh] h-[100dvh] p-4 font-[family-name:var(--font-poppins)] flex flex-col justify-end">
      <div className="h-[75%] flex flex-col items-center justify-between pb-4">
        <div className="relative w-[200px] h-[153px]">
          <Image
            alt="Splash screen Image"
            src="/splash_screen_image.png"
            fill
          />
        </div>
        <div className="text-center px-20">
          <h2 className="font-bold mb-3">Get things with TODs</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
            Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </p>
        </div>
        <Button href="/register">Get Started</Button>
      </div>
    </div>
  );
}
