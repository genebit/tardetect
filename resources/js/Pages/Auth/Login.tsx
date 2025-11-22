import { Head, router, useForm } from "@inertiajs/react";
import GuestRoute from "@/Routes/GuestRoute";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { toast } from "sonner";
import TextField from "@mui/material/TextField";

export default function Login() {
  const formData = {
    email: "",
    password: "",
  };

  const [viewPassword, setViewPassword] = useState(false);
  const { data, setData, processing, errors, setError } = useForm(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(route("api.auth.login"), data);

      const token = res.data.info.original.access_token;
      localStorage.setItem("auth_token", token);

      // Redirect on success
      router.visit(route("product"));
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        toast("Invalid credentials were sent.", {
          description: "Please fill in all the required fields in the form.",
        });
        setError(error.response.data.errors);
      } else {
        toast(error.response.data.message);
        setError(formData);
      }
    }
  };

  return (
    <GuestRoute>
      <GuestLayout>
        <Head title="Login" />
        <form onSubmit={handleSubmit}>
          <Card className="z-10 h-screen max-w-xl px-20 rounded-tl-none rounded-bl-none shadow-2xl rounded-tr-3xl rounded-br-3xl dark:shadow-black">
            <CardHeader>
              <img
                className="object-cover w-20 h-20 mt-12 mb-28"
                src="/assets/imgs/ncf-colored.png"
                alt="NCF Logo"
              />
              <div className="flex flex-col items-center mx-auto space-y-2">
                <CardTitle className="text-4xl font-black text-primary">
                  Welcome Back!
                </CardTitle>
                <CardDescription>
                  Sign in to your account to continue
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <TextField
                    id="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    disabled={processing}
                    label="Email"
                    variant="filled"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="relative">
                    <TextField
                      id="password"
                      label="Password"
                      className="w-full"
                      placeholder="••••••••"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      disabled={processing}
                      type={viewPassword ? "text" : "password"}
                      variant="filled"
                    />
                    {viewPassword ? (
                      <Button
                        type="button"
                        size={"icon"}
                        variant={"ghost"}
                        onClick={() => setViewPassword(false)}
                        className="absolute -translate-y-1/2 hover:bg-transparent right-2 top-1/2"
                      >
                        <Eye />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        size={"icon"}
                        variant={"ghost"}
                        onClick={() => setViewPassword(true)}
                        className="absolute -translate-y-1/2 hover:bg-transparent right-2 top-1/2"
                      >
                        <EyeClosed />
                      </Button>
                    )}
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={processing}
              >
                {processing ? "Logging in..." : "Login"}
              </Button>
              <span className="relative w-full py-3">
                <span className="absolute px-2 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                  or
                </span>
                <hr />
              </span>
              <div className="relative w-full">
                <img
                  className="absolute w-5 -translate-y-1/2 left-4 top-1/2"
                  src="/assets/svgs/google.svg"
                  alt="Google Logo"
                />
                <Button
                  type="button"
                  className="w-full rounded-full bg-slate-900"
                  disabled={processing}
                >
                  Login using Google GBOX
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
        {/* Image here... */}
      </GuestLayout>
    </GuestRoute>
  );
}
