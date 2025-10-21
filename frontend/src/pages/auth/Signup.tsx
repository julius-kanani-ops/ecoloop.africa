import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (!formData.phone) {
      alert("Please enter your phone number first!");
      return;
    }
    // Generate 4-digit OTP (mock)
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setSentOtp(generatedOtp);
    setOtpSent(true);
    alert(`OTP sent to ${formData.phone}: ${generatedOtp} (for demo purposes)`);
  };

  const handleVerifyOtp = () => {
    if (otp === sentOtp) {
      setIsVerified(true);
      alert("Phone number verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify your phone number first!");
      return;
    }
    console.log("User registered:", formData);
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="e.g. +254712345678"
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

          {/* OTP Section */}
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

          {/* Submit */}
          <button
            type="submit"
            disabled={!isVerified}
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              isVerified
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
