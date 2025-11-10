import { SignIn } from "@clerk/nextjs";
import React from "react";
export default function Page() {
  return <div className="flex flex-col gap-4">
      <div className="text-center shadow-2xl ">Use this email and password for demo
      Email:passdemo25@gmail.com
      password: Demo@2025
      </div>
    <div className="flex justify-center">
      <div><SignIn /></div></div>
    </div>
}