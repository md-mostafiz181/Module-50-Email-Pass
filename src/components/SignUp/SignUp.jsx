import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [registerError, setRegisterError]=useState("");
    const [success, setSuccess]=useState("")
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [showPassword, setShowPassword]=useState(false)


    const handleSingUp = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name,email,password,accepted)

                // reset form
                setRegisterError('')
                setSuccess("")

        if(password.length < 6){
            setRegisterError("password must be in 6 characters or longer");
            return
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError("use at least one uppercase");
            return;
        }
        else if (!accepted){
            setRegisterError("please accept our terms and conditions!");
            return;
        }





        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            setSuccess("user create successfully.")
            
        })
        .catch(error=>{
            
            setRegisterError(error.message)
        })

        setFormData({ name: '', email: '', password: '' });
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
      <form onSubmit={handleSingUp} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            
          />
           <span className="btn btn-primary" onClick={()=>setShowPassword(!showPassword)} >
            {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash />
            }
           </span>
         
        </div>

        <input type="checkbox" name="terms" id="" />
        <label className="ms-1 mb-3" htmlFor="terms">Accept our terms and condition</label>
        <br />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4">
        {
            registerError && <p className="text-red-600">{registerError}</p>
        }

        {
            success && <p className="text-green-600 font-bold"> {success}</p>
        }
      </div>
    </div>
  </div>
  );
};

export default SignUp;
