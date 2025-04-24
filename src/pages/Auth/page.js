// "use client";
// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// const Auth = ({ onLogin }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//   }, [isLogin]);

//   const handleAuth = () => {
//     if (!email || !password) {
//       Swal.fire({
//         icon: "warning",
//         title: "Fields Required!",
//         text: "Please fill out both email and password.",
//       });
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     if (isLogin) {
//       const user = users.find((u) => u.email === email);
//       if (!user) {
//         Swal.fire({
//           icon: "error",
//           title: "User Not Found!",
//           text: "Check your email or signup first.",
//         });
//         return;
//       }
//       if (user.password !== password) {
//         Swal.fire({
//           icon: "error",
//           title: "Incorrect Password!",
//           text: "The password you entered is not correct.",
//         });
//         return;
//       }
//       localStorage.setItem("loggedInUser", JSON.stringify(user));
//       Swal.fire({
//         icon: "success",
//         title: "Login Successful!",
//         showConfirmButton: false,
//         timer: 1500,
//       }).then(() => {
//         onLogin();
//       });
//     } else {
//       const existingUser = users.find((u) => u.email === email);
//       if (existingUser) {
//         Swal.fire({
//           icon: "warning",
//           title: "User Already Exists!",
//           text: "Please login with your existing account.",
//         });
//         return;
//       }
//       const newUser = { email, password };
//       users.push(newUser);
//       localStorage.setItem("users", JSON.stringify(users));
//       Swal.fire({
//         icon: "success",
//         title: "Signup Successful!",
//         text: "You can now login.",
//       });
//       setIsLogin(true);
//     }
//   };

//   return (
//     <div className="min-h-screen relative flex items-center justify-center p-4">
//       {/* Background Image Layer */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: 'url("/images/section1banner.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(10px)",
//         }}
//       ></div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-red-200 to-pink-300 opacity-60 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-lg p-8">
//         <h2 className="text-3xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600">
//           {isLogin ? "Welcome Back!" : "Create an Account"}
//         </h2>

//         <div className="space-y-4 mt-7">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-500 outline-none transition ease-in-out duration-300"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-500 outline-none transition ease-in-out duration-300"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Confirm Password Field - Only for Signup */}
//           {!isLogin && (
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-500 outline-none transition ease-in-out duration-300"
//                 placeholder="Confirm your password"
//               />
//             </div>
//           )}

//           {/* Password Mismatch Message */}
//           {!isLogin &&
//             password !== confirmPassword &&
//             confirmPassword !== "" && (
//               <p className="text-sm text-red-500 mt-2">
//                 Passwords do not match
//               </p>
//             )}

//           <button
//             onClick={handleAuth}
//             className="button w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
//           >
//             <span className="button_lg px-10 py-4">
//               <span className="button_sl"></span>
//               <span className="button_text text-white font-[cursive] text-lg font-semibold transition-all duration-500">
//                 {isLogin ? "---Login---" : "---Signup---"}
//               </span>
//             </span>
//           </button>

//           <p
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-sm text-center mt-4 cursor-pointer font-semibold text-blue-500 hover:text-blue-600"
//           >
//             {isLogin ? (
//               <span>
//                 Don't have an account?{" "}
//                 <span className="text-pink-700 hover:text-pink-600">
//                   Signup
//                 </span>
//               </span>
//             ) : (
//               <span>
//                 Already have an account?{" "}
//                 <span className="text-pink-700 hover:text-pink-600">Login</span>
//               </span>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
