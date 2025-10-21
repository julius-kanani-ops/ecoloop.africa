import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginMethod = "email" | "phone" | "magic";

const Login = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<LoginMethod>("email");

  // Shared state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Phone OTP
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Magic link
  const [magicSent, setMagicSent] = useState(false);

  // Handlers
  const handleSendOtp = () => {
    if (!phone) {
      alert("Please enter your phone number first!");
      return;
    }
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setSentOtp(generatedOtp);
    setOtpSent(true);
    alert(`OTP sent to ${phone}: ${generatedOtp} (for demo)`);
  };

  const handleVerifyOtp = () => {
    if (otp === sentOtp) {
      setIsVerified(true);
      alert("Phone number verified successfully!");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  const handleMagicLink = () => {
    if (!email) {
      alert("Enter your email to receive a magic link.");
      return;
    }
    setMagicSent(true);
    alert(`Magic link sent to ${email} (simulated).`);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "email") {
      if (!email || !password) {
        alert("Enter email and password.");
        return;
      }
      alert(`Logged in with email: ${email}`);
    } else if (method === "phone") {
      if (!isVerified) {
        alert("Please verify your phone number first!");
        return;
      }
      alert(`Logged in with phone: ${phone}`);
    } else if (method === "magic") {
      if (!magicSent) {
        alert("Please request a magic link first!");
        return;
      }
      alert("Check your email for the login link.");
    }

    navigate("/feed");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Welcome Back
        </h2>

        {/* Login Method Tabs */}
        <div className="flex justify-between mb-6 border-b">
          {["email", "phone", "magic"].map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m as LoginMethod)}
              className={`w-1/3 py-2 text-sm font-semibold ${
                method === m
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              {m === "email"
                ? "Email & Password"
                : m === "phone"
                ? "Phone OTP"
                : "Magic Link"}
            </button>
          ))}
        </div>

        {/* Email + Password Login */}
        {method === "email" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>
        )}

        {/* Phone OTP Login */}
        {method === "phone" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254712345678"
                  required
                  className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Send OTP
                </button>
              </div>
            </div>

            {otpSent && (
              <div>
                <label className="block text-sm font-medium mb-1">Enter OTP</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                    className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!isVerified}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                isVerified
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Login
            </button>
          </form>
        )}

        {/* Magic Link Login */}
        {method === "magic" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <button
              type="button"
              onClick={handleMagicLink}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
            >
              {magicSent ? "Resend Magic Link" : "Send Magic Link"}
            </button>
            {magicSent && (
              <p className="text-center text-sm text-green-600">
                ✅ Magic link sent! Check your inbox.
              </p>
            )}
          </form>
        )}

        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
