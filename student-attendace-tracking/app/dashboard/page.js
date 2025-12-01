"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
function Dashboard() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  });
  return <div>page</div>;
}

export default Dashboard;
