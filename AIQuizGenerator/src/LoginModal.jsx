// import React from "react";
// import "./LoginModal.css";

// const LoginModal = ({ onClose }) => {
//   return (
//     <div className="loginModal-wrapper">
//       <div className="loginModal-overlay">
//         <div className="loginModal-container">
//           <button onClick={onClose} className="close-btn">
//             <span className="material-symbols-outlined">close</span>
//           </button>

//           <div className="flex flex-col gap-6">
//             <div className="text-center">
//               <h1 className="title">Welcome Back</h1>
//               <p className="subtitle">Log in to start creating your quiz.</p>
//             </div>

//             {/* Toggle */}
//             <div className="flex h-12 items-center justify-center bg-background-light dark:bg-gray-800 p-1.5 rounded-lg">
//               <label className="tab-label">
//                 <span>Log In</span>
//                 <input defaultChecked type="radio" name="auth-toggle" />
//               </label>
//               <label className="tab-label">
//                 <span>Sign Up</span>
//                 <input type="radio" name="auth-toggle" />
//               </label>
//             </div>

//             {/* Form */}
//             <div className="flex flex-col gap-4">
//               <label className="input-label">
//                 <p>Email Address</p>
//                 <input type="email" placeholder="Enter your email" />
//               </label>

//               <label className="input-label relative">
//                 <p>Password</p>
//                 <input type="password" placeholder="Enter your password" />
//                 <span className="material-symbols-outlined eye-icon">visibility_off</span>
//               </label>
//             </div>

//             {/* Remember + Forgot */}
//             <div className="flex justify-between items-center">
//               <label className="flex gap-2 items-center cursor-pointer">
//                 <input type="checkbox" className="checkbox" />
//                 <span className="remember">Remember me</span>
//               </label>
//               <a href="#" className="forgot-link">Forgot Password?</a>
//             </div>

//             {/* Login Button */}
//             <button className="login-btn">Log In</button>

//             {/* Divider */}
//             <div className="divider">
//               <hr /> <span>OR</span> <hr />
//             </div>

//             {/* Social Login */}
//             <button className="google-btn">
//               <svg className="google-icon" viewBox="0 0 24 24">
//                 <path
//                   fill="#4285F4"
//                   d="M21.9999 12.2273C21.9999 11.3977 21.9205 10.5864 21.7727 9.80682H12.2045V14.3364H17.7613C17.5181 15.8227 16.6818 17.1182 15.3522 17.9773V20.8818H19.2613C20.9818 19.3136 21.9999 16.9455 21.9999 14.0455C21.9999 13.4545 21.9999 12.8455 21.9999 12.2273Z"
//                 ></path>
//                 <path
//                   fill="#34A853"
//                   d="M12.2045 22C14.7318 22 16.8909 21.1409 18.4591 19.8818L15.3522 17.9773C14.5318 18.5273 13.4545 18.8909 12.2045 18.8909C9.75 18.8909 7.69545 17.25 6.9 15.05H3.01818V17.9727C4.58182 20.4545 8.12273 22 12.2045 22Z"
//                 ></path>
//                 <path
//                   fill="#FBBC05"
//                   d="M6.90005 15.05C6.67732 14.4364 6.5455 13.7864 6.5455 13.1136C6.5455 12.4409 6.67732 11.7909 6.90005 11.1773V8.25455H3.01823C2.34095 9.53182 2 11.2636 2 13.1136C2 14.9636 2.34095 16.6955 3.01823 17.9727L6.2455 15.6318L6.90005 15.05Z"
//                 ></path>
//                 <path
//                   fill="#EA4335"
//                   d="M12.2045 7.10909C13.5682 7.10909 14.8045 7.58636 15.7636 8.49545L18.5363 5.72273C16.8818 4.19545 14.7227 3.22727 12.2045 3.22727C8.12273 3.22727 4.58182 5.54545 3.01818 8.25455L6.9 11.1773C7.69545 8.97727 9.75 7.10909 12.2045 7.10909Z"
//                 ></path>
//               </svg>
//               <span>Continue with Google</span>
//             </button>

//             {/* Bottom text */}
//             <p className="bottom-text">
//               Don't have an account? <a href="#">Sign Up</a>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;



import React, { useState } from "react";
import "./LoginModal.css";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ isOpen, onClose }) {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

   const handleLogin = async () => {
    // setLoading(true);
    // setError("");

    // const { error } = await login(email, password);

    // setLoading(false);

    // if (error) {
    //     setError(error.message);
    //     return;
    // }

    navigate("/dashboard"); // Redirect to Dashboard 🚀
};

    return (
        <div className="modal-overlay">
            <div className="login-modal">
                <button className="close-btn" onClick={onClose}>✖</button>

                <div className="modal-header">
                    <h1>Welcome Back</h1>
                    <p>Log in to start creating your quiz.</p>
                </div>

                {error && <p className="error-msg">{error}</p>}

                <div className="input-group">
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="options">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button 
                    className="btn-primary w-full"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Log In"}
                </button>

                <div className="divider">OR</div>

                <button className="btn-google">
                    Continue with Google
                </button>

                <p className="signup-text">
                    Don’t have an account?
                    <a href="#"> Sign Up</a>
                </p>
            </div>
        </div>
    );
}
