import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const Login = () => {

    const [loginError, setLoginError]=useState("");
      const [success, setSuccess]= useState("")

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess("User login successful.")
        })
        .catch(error=>{
            console.log(error.message)
            setLoginError(error.message)
        })
    }
    return (
        <div>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="mt-6">
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="mt-1 font-bold">Forgotten Password?</button>
          </div>

          <div>
            {
                loginError && <p className="text-red-500">{loginError}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            }
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        {/* Footer */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Login;