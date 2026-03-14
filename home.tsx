import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import logoImage from "figma:asset/1515b3414e2a8bb7a713e48eaa888e340d21b0a2.png";
import laptopImage from "figma:asset/e0d04df099a5ee75628708cb40966b74ed031c3f.png";
import { BookOpen, Target, Sparkles, ArrowRight } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Guided Challenges",
      description: "Break complex projects into buildable steps.",
      icon: Target,
    },
    {
      title: "Socratic Coaching",
      description: "AI gives hints and questions instead of answers.",
      icon: Sparkles,
    },
    {
      title: "Learn by Building",
      description: "Real projects with real understanding.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4 md:px-8 md:py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="DojoBuild" className="h-8 w-8" />
            <span className="text-lg font-semibold text-foreground md:text-xl">DojoBuild</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")} size="sm" className="md:text-base">
              Dashboard
            </Button>
            <Button onClick={() => navigate("/signup")} size="sm" className="md:text-base">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        {/* Wave Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            className="absolute"
            width="1920"
            height="600"
            viewBox="0 0 1920 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <path
              d="M0 300C320 150 640 450 960 300C1280 150 1600 450 1920 300V600H0V300Z"
              fill="#22C55E"
            />
            <path
              d="M0 350C320 200 640 500 960 350C1280 200 1600 500 1920 350V600H0V350Z"
              fill="#22C55E"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:mb-6 md:text-6xl">
            Learn to Build with AI
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:mb-12 md:text-2xl">
            Your mentor, not your engineer.
          </p>
          
          {/* Product Image */}
          <div className="relative z-20 mb-8 flex justify-center md:mb-12">
            <img 
              src={laptopImage} 
              alt="DojoBuild Platform Interface" 
              className="w-full max-w-4xl drop-shadow-2xl"
            />
          </div>
          
          <div className="flex flex-col justify-center gap-3 md:flex-row md:gap-4">
            <Button size="lg" onClick={() => navigate("/signup")} className="w-full md:w-auto">
              Start Your Dojo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")} className="w-full md:w-auto">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:mb-4 md:text-4xl">
              Why DojoBuild
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Most AI tools build for you. DojoBuild teaches you how to build step-by-step.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="rounded-3xl border-2 border-border p-6 text-center transition-all hover:border-primary md:p-8"
                >
                  <div className="mb-4 flex justify-center md:mb-6">
                    <div className="rounded-2xl bg-primary/10 p-3 md:p-4">
                      <Icon className="h-6 w-6 text-primary md:h-8 md:w-8" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground md:mb-3 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-center md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:mb-6 md:text-4xl">
            Ready to start building?
          </h2>
          <p className="mb-6 text-lg text-muted-foreground md:mb-8 md:text-xl">
            Join DojoBuild and learn to create real projects with AI as your guide.
          </p>
          <Button size="lg" onClick={() => navigate("/signup")} className="w-full md:w-auto">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-7xl text-center text-xs text-muted-foreground md:text-sm">
          <p>© 2026 DojoBuild. Build real skills, not just generated code.</p>
        </div>
      </footer>
    </div>
  );
}