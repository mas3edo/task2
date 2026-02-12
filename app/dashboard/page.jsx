"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // 1. استيراد Link

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState({ name: "", token: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    if (!token) {
      router.push("/login");
    } else {
      setUser({ name: userName || "User", token: token });
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F9F9F9]">
        <div className="text-[#C08B84] font-bold text-xl animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6 flex justify-center items-center font-sans">
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 w-full max-w-4xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Sidebar */}
        <div className="bg-[#F4EBEA] p-10 flex flex-col items-center md:w-1/3 text-center border-b md:border-b-0 md:border-r border-gray-100">
          {/* Profile Image */}
          <div className="w-32 h-32 bg-white rounded-full p-2 mb-4 shadow-sm mx-auto">
            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-[#C08B84]">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-[#C08B84] text-sm font-medium mb-8">
            Premium Member
          </p>

          {/* --- NEW: Home Button --- */}
          <Link
            href="/Home"
            className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-white text-gray-600 font-bold shadow-sm border border-transparent hover:border-[#C08B84] hover:text-[#C08B84] transition-all transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Go to Home
          </Link>
          {/* ------------------------ */}
        </div>

        {/* Main Content */}
        <div className="p-10 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Dashboard
                </h1>
                <p className="text-gray-400 text-sm">
                  Welcome back to your personal space
                </p>
              </div>
              <button className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-[#C08B84] hover:border-[#C08B84] transition-all">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 border border-gray-100 rounded-2xl text-center hover:border-[#C08B84] transition-all cursor-pointer group bg-white">
                <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">
                  Orders
                </p>
                <p className="text-2xl font-bold text-gray-800 group-hover:text-[#C08B84]">
                  12
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-2xl text-center hover:border-[#C08B84] transition-all cursor-pointer group bg-white">
                <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">
                  Wishlist
                </p>
                <p className="text-2xl font-bold text-gray-800 group-hover:text-[#C08B84]">
                  5
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-2xl text-center hover:border-[#C08B84] transition-all cursor-pointer group bg-white">
                <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">
                  Balance
                </p>
                <p className="text-2xl font-bold text-gray-800 group-hover:text-[#C08B84]">
                  $240
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">
                Account Status
              </h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-gray-500 text-sm font-medium">
                  Verification Status
                </span>
                <span className="text-green-600 bg-green-50 px-4 py-1 rounded-full text-xs font-bold border border-green-100">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
            <div className="hidden sm:block">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                Last Login
              </p>
              <p className="font-bold text-gray-800">Just Now</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 bg-[#C08B84] text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-[#C08B84]/30 hover:bg-[#a87670] transition-all transform hover:scale-105"
            >
              <span>Logout</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
