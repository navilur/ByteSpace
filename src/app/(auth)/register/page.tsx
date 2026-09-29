"use client";

import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

import AuthInput from "@/app/components/ui/AuthInput";
import Button from "@/app/components/ui/Button";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden overflow-hidden lg:flex lg:w-1/2"></div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-[460px]">
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
