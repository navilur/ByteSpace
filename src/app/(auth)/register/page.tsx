"use client";

import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

import AuthInput from "@/app/components/ui/AuthInput";
import Button from "@/app/components/ui/Button";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side */}
      <div className="relative hidden overflow-hidden bg-[#242528] lg:flex lg:w-1/2">
        <div
          className="
            absolute
            -right-[250px]
            -top-[250px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(212,251,32,0.35)_0%,rgba(212,251,32,0)_70%)]
            blur-[30px]
          "
        />

        <div
          className="
            absolute
            -bottom-[250px]
            -left-[250px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(0,59,226,0.35)_0%,rgba(0,59,226,0)_70%)]
            blur-[30px]
          "
        />

        <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
          <Link
            href="/"
            className="font-[Poppins] text-3xl font-bold text-white"
          >
            Byte<span className="text-[#D4FB20]">Space</span>
          </Link>

          <div className="max-w-[520px]">
            <p className="mb-4 font-[Satoshi] text-sm font-medium uppercase tracking-[0.2em] text-[#D4FB20]">
              Start Learning
            </p>

            <h1 className="font-[Poppins] text-5xl font-semibold leading-[115%] text-white xl:text-6xl">
              Build skills. Create opportunities.
            </h1>

            <p className="mt-6 max-w-[450px] font-[Satoshi] text-lg leading-[160%] text-white/60">
              Join ByteSpace and discover courses designed to help you learn
              practical skills and grow professionally.
            </p>
          </div>

          <p className="font-[Satoshi] text-sm text-white/40">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-[460px]">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="mb-10 block text-center font-[Poppins] text-3xl font-bold text-[#242528] lg:hidden"
          >
            Byte<span className="text-[#003BE2]">Space</span>
          </Link>

          <div className="mb-8">
            <h2 className="font-[Poppins] text-4xl font-semibold text-[#242528]">
              Create an account
            </h2>

            <p className="mt-3 font-[Satoshi] text-base text-[#82868E]">
              Start your learning journey with ByteSpace.
            </p>
          </div>

          <form className="space-y-5">
            <AuthInput
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              icon={<User size={20} />}
            />

            <AuthInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              icon={<Mail size={20} />}
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="Create a password"
              icon={<Lock size={20} />}
            />

            <AuthInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              icon={<Lock size={20} />}
            />

            <label className="flex cursor-pointer items-start gap-2 pt-1">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#D4FB20]"
              />

              <span className="font-[Satoshi] text-sm leading-[150%] text-[#4F4F4F]">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-[#003BE2] hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-[#003BE2] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <Button type="submit" className="mt-3 w-full">
              Create Account
              <ArrowRight size={20} />
            </Button>
          </form>

          {/* Login */}
          <p className="mt-8 text-center font-[Satoshi] text-sm text-[#82868E]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#003BE2] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
