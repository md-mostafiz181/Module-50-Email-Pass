import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const Register = () => {

  const [registerError, setRegisterError]=useState("");
  const [success, setSuccess]= useState("")
  const [show,setShow]=useState(false)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name =  form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const accepted = form.terms.checked;
    console.log(name,email,password)



    setRegisterError("")
    setSuccess("")

    if(!accepted){
      setRegisterError("please maintains our terms and conditions")
      return;
    }
    

    // create user with email and password
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const loggedUser= result.user
      console.log(loggedUser)
      setSuccess("User create successfully")
    })
    .catch(error=>{
      console.log(error.message)
      setRegisterError(error.message)
    })




  }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Register
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <div className="showbtn">
              <span className="btn" onClick={()=>setShow(!show)}>
                show password
              </span>
              </div>


              <div className="mt-3">
              <input type="checkbox" name="terms" id="terms" />
              <label  className="ms-2 mb-4 font-bold"  htmlFor="terms">Check our terms and conditions</label>
              </div>
            </div>

            <div>
              {
                registerError && <p className="text-red-600">{registerError}</p>
              }

              {
                success && <p className="text-green-600">{success}</p>
              }
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </form>

          <p>Already have an account? please <a href="/login" className="font-bold uppercase text-blue-600">Login</a> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
