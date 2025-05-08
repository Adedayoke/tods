import Image from "next/image";
import DailyTask from "../_components/DailyTask";

export default function page() {
  return (
    <div>
      <div className="h-[30dvh] bg-primary-green flex items-center justify-end flex-col gap-3 py-3">
        <Image
          className="rounded-full"
          width={100}
          height={100}
          src="/user_profile.png"
          alt="user profile photo"
        />
        <p className="text-white capitalize text-lg font-semibold">
          Welcome jeegar goyani
        </p>
      </div>
      <div className="px-6 py-4 flex flex-col gap-5">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-right font-semibold text-sm w-full">
            Good Afternoon
          </p>

          <Image
            className="rounded-full"
            width={150}
            height={150}
            src="/clock.png"
            alt="clock"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-lg">Task list</h2>
          <DailyTask />
        </div>
      </div>
    </div>
  );
}
