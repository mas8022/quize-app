import { redirect } from "next/navigation";
import React from "react";
import { me } from "@/utils/me";
import Image from "next/image";
import SelectMode from "@/app/components/template/selectMode";
import Link from "next/link";
const page = async () => {
  const meData = await me();
  if (!meData) {
    redirect("/auth");
  }

  return (
    <div className="w-full h-screen px-8 py-8 flex flex-col items-center justify-between gap-4">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-full h-12 flex items-center justify-between gap-7">
          <span className="text-first/90 text-[1.7rem] font-bold">
            {meData.userName}
          </span>
          {meData.role === "ADMIN" ? (
            <Link
              href="/cms"
              className="w-full h-full bg-first/5 text-first/70 font-bold text-xl center rounded-full active:scale-[99%]"
            >
              بررسی سوالات ارسالی
            </Link>
          ) : null}
          <div className="h-full px-7 py-3 flex items-center justify-center gap-4 bg-first/5 rounded-3xl">
            <Image
              src="/images/coin.svg"
              width={50}
              height={50}
              alt="امتیاز"
              className="size-8 object-cover"
            />
            <span className="text-first/80 text-2xl font-bold">
              {meData.score}
            </span>
          </div>
        </div>
        <SelectMode />
      </div>
      <Link href="/createQuestion" className="text-first/60 text-xl">
        ایا می خواهید سوال ایجاد کنید؟
      </Link>
    </div>
  );
};

export default page;
