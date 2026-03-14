import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Cog } from "lucide-react";

export function Configure() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="mx-auto max-w-md space-y-6 text-center md:space-y-8">
        {/* Animated Cog icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Cog className="h-16 w-16 animate-spin text-primary md:h-20 md:w-20" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            Let's Configure Your Dojo.
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            This will help us setup your default settings.
          </p>
          <p className="text-sm text-muted-foreground md:text-base">You can change this anytime.</p>
        </div>

        <Button size="lg" onClick={() => navigate("/dashboard")} className="w-full md:w-auto">
          Continue
        </Button>
      </div>
    </div>
  );
}