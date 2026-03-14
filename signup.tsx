import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import logoImage from "figma:asset/1515b3414e2a8bb7a713e48eaa888e340d21b0a2.png";
import { Github, Chrome } from "lucide-react";

export function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/customize-1");
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Side - Brand */}
      <div className="hidden w-full flex-col items-center justify-center bg-card p-8 lg:flex lg:w-1/2 lg:p-16">
        <div className="max-w-md space-y-6 text-center md:space-y-8">
          <div className="flex justify-center">
            <img src={logoImage} alt="DojoBuild" className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">DojoBuild</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Your AI dojo for learning how to build.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex w-full items-center justify-center bg-background p-4 py-8 md:p-8 lg:w-1/2">
        <Card className="w-full max-w-md rounded-3xl border-2 border-border p-6 md:p-10">
          <div className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Create Account</h2>
              <p className="text-xs text-muted-foreground md:text-sm">Start your learning journey today</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm md:text-base">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="h-10 rounded-xl border-2 border-border bg-card md:h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-10 rounded-xl border-2 border-border bg-card md:h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm md:text-base">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-10 rounded-xl border-2 border-border bg-card md:h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-10 w-full rounded-xl md:h-12"
                size="lg"
              >
                Sign Up
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 rounded-xl border-2 border-border md:h-12"
                  onClick={() => navigate("/customize-1")}
                >
                  <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Github
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 rounded-xl border-2 border-border md:h-12"
                  onClick={() => navigate("/customize-1")}
                >
                  <Chrome className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Google
                </Button>
              </div>
            </form>

            <p className="text-center text-xs text-muted-foreground md:text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/dashboard")}
                className="font-semibold text-primary hover:underline"
              >
                Log in
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}