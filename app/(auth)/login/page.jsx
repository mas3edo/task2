"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const dataToSend = {
        email: formData.email,
        password: formData.password,
        fcm_token: "test_token_english",
        type: "client",
      };

      const res = await axios.post(
        "https://skipapp.ae/api/auth/login",
        dataToSend,
        {
          headers: { "Accept-Language": "en" }, // طلب الرد بالإنجليزي
        },
      );
      if (res.data.data && res.data.data.token) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userName", res.data.data.name);
        router.push("/dashboard");
      }
    } catch (err) {
      // رسالة الخطأ الافتراضية بالإنجليزي
      const msg = err.response?.data?.message;
      setError(msg || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const EyeIcon = () => (
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
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
  const EyeOffIcon = () => (
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
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
      />
    </svg>
  );
  const inputStyle =
    "w-full p-4 border border-gray-200 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C08B84] transition-all";

  return (
    <div className="flex justify-center items-center h-screen bg-[#F9F9F9]">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-2">Please login to your account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              onChange={handleChange}
              className={inputStyle}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-[46px] text-gray-400 hover:text-[#C08B84] transition-colors"
            >
              {showPass ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all ${loading ? "bg-[#dccbc9]" : "bg-[#C08B84] hover:bg-[#a87670]"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#C08B84] font-bold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
