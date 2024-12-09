import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";

const Login = () => {

    const [user,setUser]=useState(null)
    
    const auth = getAuth(app)
    const goggleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = ()=>{
        signInWithPopup(auth,goggleProvider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error=>{
            console.log("error", error.message)
        })
    }


    const handleLogOut = ()=>{
       
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4">Please Login</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
           

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <button 
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-red-300">
              Sign in with Google
            </button>
          </div>
          <div className="mt-4">
            <button 
            onClick={handleLogOut}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-red-300">
              Logout
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Are You New Here ? Please{" "}
              <Link className="text-blue-600 font-bold" to="/signUp">
                SignUp
              </Link>{" "}
              first.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Login;
