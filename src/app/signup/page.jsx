'use client';

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpPage = () => {

    const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.signUp.email({
    name: user?.name, 
    email: user?.email, 
    password: user?.password,
    image: user?.image,
});

if(data){
    redirect('/')
}
if(error){
    toast.error(error.message)
}
  };


    const handleGoogleLogin = async () => {
       await authClient.signIn.social({
      provider: "google",
    });
    }



  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border bg-white p-6 md:p-8 shadow-xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Create Account
          </h1>
          <p className="text-default-500 mt-2">
            Start your adventure with Wanderlast ✈️
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must contain 8+ characters, 1 uppercase letter and 1 number.
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all"
          >
            Create Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />
          <span className="text-sm text-default-500">OR</span>
          <Separator className="flex-1" />
        </div>

        {/* Google Login */}
        <Button
          variant="bordered"
          className="w-full h-11 bg-gray-100 font-medium hover:scale-[1.02] transition-all"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-default-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-cyan-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;