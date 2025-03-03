"use client";

import React, { useState } from "react";
import Image from "next/image";
import gradient2 from "@/assets/bgradient2.png";
import logol from "@/assets/logo_light.png";
import Header from '@/components/Header.jsx';

const Page = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [downloadScheduled, setDownloadScheduled] = useState(false);

  const scheduleDownload = () => {
    if (!fileUrl || !scheduledTime) {
      alert("Please enter a valid file URL and time.");
      return;
    }

    const currentTime = new Date();
    const targetTime = new Date(scheduledTime);
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      alert("Please select a future time for the download.");
      return;
    }

    setDownloadScheduled(true);
    setTimeout(() => {
      triggerDownload(fileUrl);
    }, timeDifference);
  };

  const triggerDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadScheduled(false);
  };

  return (
    <>
    <Header/>
      {/* Background Image */}
      <div className="relative h-[700px] w-full">
        <Image src={gradient2} alt="background" fill className="object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Navbar */}
          <nav className="w-[670px] max-w-4xl flex justify-center items-center py-4 px-6 shadow-md bg-gray-800 rounded-lg">
            <Image src={logol} width={300} alt='logo'/>
          </nav>

          {/* Scheduler Card */}
          <div className="w-[800px] max-w-2xl p-6 mt-6 shadow-lg rounded-lg border border-gray-700 bg-gray-800">
            <h2 className="text-2xl font-semibold text-center text-white">
              Schedule a Download
            </h2>

            <input
              type="text"
              placeholder="Enter file URL"
              value={fileUrl}
              onChange={(e) => setFileUrl(e.target.value)}
              className="w-full mt-4 px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />

            
            <input
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="w-full mt-4 px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={scheduleDownload}
              disabled={downloadScheduled}
              className={`w-full mt-4 px-4 py-2 text-white font-semibold rounded-lg ${
                downloadScheduled ? "bg-gray-500 cursor-not-allowed" : "bg-emerald-500 hover: cursor-pointer"
              }`}
            >
              {downloadScheduled ? "Download Scheduled" : "Schedule Download"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
