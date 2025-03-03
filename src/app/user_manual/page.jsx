import React from 'react'
import Header from '@/components/Header';
import Image from 'next/image';
import logo from '@/assets/logo.png';


const page = () => {
    return(
        <>
        <Header/>
        <div>
            
        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-6">📘 Product - User Guide</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-3">🔹 Introduction</h2>
        <p className="mt-2">The <strong>Download.sh</strong> lets you schedule file downloads at a specific time, making it easier to manage bandwidth, automate downloads, and improve productivity.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-3">✅ How to Use</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-2">
          <h3 className="text-xl font-semibold">📅 Scheduling a Download</h3>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Open the <strong>File Scheduler</strong> web application.</li>
            <li>Enter the <strong>file URL</strong> in the provided field.</li>
            <li>Select the <strong>desired time</strong> for the download.</li>
            <li>Click <strong>"Schedule Download"</strong> to confirm.</li>
            <li>The system will automatically initiate the download at the scheduled time.</li>
            <li>You’ll receive a notification once the download starts.</li>
          </ol>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-l-4 border-red-500 pl-3">🚫 Do's and Don'ts</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">✅ Best Practices</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-green-900 dark:text-green-200">
              <li>Use only valid and publicly accessible URLs for downloads.</li>
              <li>Keep your browser open and active for scheduled downloads.</li>
              <li>Double-check the <strong>time format</strong> when scheduling.</li>
              <li>Ensure a stable internet connection.</li>
            </ul>
          </div>
          <div className="bg-red-100 dark:bg-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 dark:text-red-300">❌ Avoid These Issues</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-red-900 dark:text-red-200">
              <li>Do NOT use this tool for illegal downloads.</li>
              <li>Do NOT close the browser if a download is scheduled soon.</li>
              <li>Do NOT enter invalid or broken URLs.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 pl-3">📌 Troubleshooting</h2>
        <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg mt-2">
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Issue:</strong> The file didn’t download at the scheduled time. <br /><strong>Solution:</strong> Check your internet connection and keep the browser open.</li>
            <li><strong>Issue:</strong> The file download starts but immediately fails. <br /><strong>Solution:</strong> The URL may be incorrect or restricted.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold border-l-4 border-purple-500 pl-3 text-left">🚀 Future Enhancements</h2>
        <p className="mt-2">Stay tuned for upcoming features like:</p>
        <ul className=" pl-6 mt-2 space-y-1 text-gray-950 dark:text-purple-300 list-none bg-gray-200 rounded-lg p-2">
          <li>⭐ Browser Extension for seamless scheduling.</li>
          <li>⭐ Auto-Retry for failed downloads.</li>
          <li>⭐ Cloud Sync for accessing schedules across devices.</li>
        </ul>
      </section>
      
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold border-l-4 border-blue-500 pl-3 text-left">📩 Need Help?</h2>
        <p className="mt-2">If you need assistance, contact <strong>us</strong> or visit our FAQ section.</p>
      </section>
      
      <p className="text-center text-lg font-semibold bg-gray-200 dark:bg-gray-700 py-4 rounded-lg">✅ <strong>Thank you for using File Scheduler!</strong> 🎉</p>
    </div>
        </div>
        </>
    )
}
export default page