"use client";
import dynamic from "next/dynamic";

const FirstMeetup = dynamic(() => import("@/src/components/FirstMeetup"), {
  ssr: false,
});

export default function Home() {
  return <FirstMeetup />;
}
