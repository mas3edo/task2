"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // قائمة الدول
  const countryCodes = [
    { code: "20", iso: "eg", name: "Egypt" },
    { code: "966", iso: "sa", name: "Saudi Arabia" },
    { code: "971", iso: "ae", name: "UAE" },
    { code: "965", iso: "kw", name: "Kuwait" },
    { code: "1", iso: "us", name: "USA" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    mobile_country_code: "20",
    gender: "male",
    type: "client",
    fcm_token: "test_pro_english",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "mobile") value = value.replace(/^0+/, "");
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 1. Client-side validation in English
    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match"); // رسالة إنجليزي
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://skipapp.ae/api/auth/register",
        formData,
        {
          headers: { "Accept-Language": "en" }, // طلب الرد بالإنجليزي من السيرفر
        },
      );

      if (res.data.data && res.data.data.token) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userName", res.data.data.name);
      }
      router.push("/verify");
    } catch (err) {
      // 2. Fallback error message in English
      const msg = err.response?.data?.message;
      setError(msg || "Registration failed. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  // Icons & Styles
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
    "w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C08B84] transition-all";
  const labelStyle = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F9F9] p-4 font-sans text-left">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Create Account
        </h2>
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* (باقي الفورم كما هو، نفس الكود السابق) */}
          {/* ... Inputs for Name, Email, Country ... */}

          <div>
            <label className={labelStyle}>Full Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className={inputStyle}
              placeholder="Ahmed Muhammad"
              required
            />
          </div>
          <div>
            <label className={labelStyle}>Email Address</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className={inputStyle}
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-5">
              <label className={labelStyle}>Country</label>
              <select
                name="mobile_country_code"
                value={formData.mobile_country_code}
                onChange={handleChange}
                className={`${inputStyle} pl-10 appearance-none`}
                style={{
                  backgroundImage: `url(https://flagcdn.com/w20/${countryCodes.find((c) => c.code === formData.mobile_country_code)?.iso}.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center",
                  backgroundSize: "22px auto",
                }}
              >
                {countryCodes.map((c) => (
                  <option key={c.iso} value={c.code}>
                    +{c.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-7">
              <label className={labelStyle}>Mobile</label>
              <input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                className={inputStyle}
                placeholder="10xxxxxxx"
                required
              />
            </div>
          </div>
          {/* Gender */}
          <div>
            <label className={labelStyle}>Gender</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "male" })}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${formData.gender === "male" ? "border-[#C08B84] bg-[#F4EBEA] text-[#C08B84]" : "border-gray-100 text-gray-400"}`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "female" })}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${formData.gender === "female" ? "border-[#C08B84] bg-[#F4EBEA] text-[#C08B84]" : "border-gray-100 text-gray-400"}`}
              >
                Female
              </button>
            </div>
          </div>
          {/* Passwords */}
          <div className="relative">
            <label className={labelStyle}>Password</label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              onChange={handleChange}
              className={inputStyle}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-9 text-gray-400 hover:text-[#C08B84]"
            >
              {showPass ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <div className="relative">
            <label className={labelStyle}>Confirm Password</label>
            <input
              name="password_confirmation"
              type={showConfirmPass ? "text" : "password"}
              onChange={handleChange}
              className={inputStyle}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-4 top-9 text-gray-400 hover:text-[#C08B84]"
            >
              {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#C08B84] text-white font-bold rounded-xl shadow-lg hover:bg-[#a87670] transition-all"
          >
            {loading ? "Processing..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#C08B84] font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
