"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthInput from "@/app/components/ui/AuthInput";
import Button from "@/app/components/ui/Button";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden overflow-hidden lg:flex lg:w-1/2"></div>

      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-[460px]">
          <Link
            href="/"
            className="mb-12 block text-center font-[Poppins] text-3xl font-bold text-[#242528] lg:hidden"
          >
            Byte<span className="text-[#003BE2]">Space</span>
          </Link>

          <div className="mb-10">
            <p className="mt-3 font-[Satoshi] text-base text-[#82868E]">Sign</p>
            <h2 className="font-[Poppins] text-4xl font-semibold text-[#242528]">
              Welcome back
            </h2>
          </div>

          <form className="space-y-5">
            <AuthInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              icon={<Mail size={20} />}
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<Lock size={20} />}
            />

            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#D4FB20]" />

                <span className="font-[Satoshi] text-sm text-[#4F4F4F]">
                  Remember me
                </span>
              </label>

              <Link
                href="/forgot-password"
                className="font-[Satoshi] text-sm font-medium text-[#003BE2] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="mt-3 w-full">
              Sign In
              <ArrowRight size={20} />
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E5E5E5]" />

            <span className="font-[Satoshi] text-sm text-[#82868E]">OR</span>

            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          {/* Register */}
          <p className="text-center font-[Satoshi] text-sm text-[#82868E]">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#003BE2] hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
