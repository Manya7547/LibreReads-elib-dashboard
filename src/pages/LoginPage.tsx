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
import { login } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("Login in successful ");

      // redirect to dashboard
      navigate("/dashboard/home");
    },
  });

  const handleLoginSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("data", { email, password });

    // if email or password is undefined
    if (!email || !password) {
      return alert("Enter email and password");
    }

    //mutation
    mutation.mutate({ email, password });
    //make server call
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
            {mutation.isError && (
              <span className="text-red-500 text-sm">
                {"Something went wrong"}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button
              onClick={handleLoginSubmit}
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending && <Loader className="animate-spin" />}
              <span className="ml-2">Sign in</span>
            </Button>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/auth/register"}>
                <a className="underline">Sign up</a>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
