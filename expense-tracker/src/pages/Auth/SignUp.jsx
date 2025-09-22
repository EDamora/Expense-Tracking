import React, { useState } from 'react';
import AuthLayout from "../../components/layouts/AuthLayout";
import ProfilPhotoSelector from "../../components/Inputs/ProfilPhotoSelector";
import Input from "../../components/Inputs/Input";
import { validateEmail, validatePassword } from "../../utils/helper";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    const emailValidation = validateEmail(email);
    if (emailValidation !== true) {
      setError(emailValidation);
      return;
    }

    const passwordValidation = validatePassword(password, 8);
    if (passwordValidation !== true) {
      setError(passwordValidation);
      return;
    }

    setError(""); // semua validasi lulus
    console.log("SignUp data ready:", { profilePic, fullName, email, password });
    // lanjut proses SignUp...
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={HandleSignUp}>

          <ProfilPhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Your Name"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="nama@email.com"
              type="text"
            />

            <div className="col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded"
          >
            Sign Up
          </button>

        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
