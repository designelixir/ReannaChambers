import React from "react";
import HomePageContent from "./HomePageContent";
import { Metadata } from "next";

export const metadata = {
  title: 'Home | Reanna Chambers',
}
export default function Home() {

  return (
    <HomePageContent></HomePageContent>
  );
}
