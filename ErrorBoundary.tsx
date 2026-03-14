import { useRouteError, useNavigate } from "react-router";
import { Button } from "./ui/button";

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold text-foreground">Oops!</h1>
        <p className="text-lg text-muted-foreground">
          Something went wrong. Please try again.
        </p>
        {error instanceof Error && (
          <p className="text-sm text-muted-foreground">{error.message}</p>
        )}
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <Button onClick={() => navigate(-1)}>Go Back</Button>
          <Button variant="outline" onClick={() => navigate("/")}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
