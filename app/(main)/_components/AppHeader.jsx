"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { useAuthContext } from "@/app/provider";
function AppHeader() {
  const { user } = useAuthContext();
  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger />
      <Image
        className="rounded-full"
        src={user?.photoURL}
        width={40}
        height={40}
        alt="user"
      />
    </div>
  );
}

export default AppHeader;
