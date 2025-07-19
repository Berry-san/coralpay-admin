"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChangePasswordPage = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent full page reload

    // Optional: Add validation here
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Password changed:", newPassword);
    router.push("/dashboard");
  };

  return (
    <div className="bg-gradient-to-b from-[#88529A] to-[#FFFFFF] w-full h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Change Password
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          To login successfully, change your password
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <Label htmlFor="newPassword" className="text-sm text-gray-700">
              New Password
            </Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              className="mt-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-sm text-gray-700">
              Confirm
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              className="mt-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full bg-secondary text-white mt-4">
            Create Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
