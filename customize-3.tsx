import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Sparkles, TrendingUp, GraduationCap, Trophy } from "lucide-react";

export function Customize3() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const expertiseLevels = [
    {
      id: "beginner",
      icon: Sparkles,
      title: "Beginner",
      description: "You're completely new to building and want to learn from the ground up.",
    },
    {
      id: "exploring",
      icon: TrendingUp,
      title: "Exploring",
      description: "Whether you've done a quick google-search or tried videocoding.",
    },
    {
      id: "student",
      icon: GraduationCap,
      title: "Student",
      description: "You really use AI engines or have experimented with it for assignments.",
    },
    {
      id: "master",
      icon: Trophy,
      title: "Master",
      description: "You're a mid-senior professional who has built agents and use AI regularly.",
    },
  ];

  const handleContinue = () => {
    if (selectedLevel) {
      navigate("/configure");
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            What's your expertise level?
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Select all that apply
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 md:gap-6">
          {expertiseLevels.map((level) => {
            const Icon = level.icon;
            return (
              <Card
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`cursor-pointer rounded-2xl border-2 p-4 transition-all md:p-6 ${
                  selectedLevel === level.id
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="mb-1.5 flex flex-col items-center gap-3 text-center md:mb-2">
                  <div
                    className={`rounded-xl p-2 md:p-3 ${
                      selectedLevel === level.id ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 md:h-6 md:w-6 ${
                        selectedLevel === level.id ? "text-primary" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {level.title}
                  </h3>
                </div>
                <p className="text-center text-xs text-muted-foreground md:text-sm">{level.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selectedLevel}
            className="w-full md:w-auto"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}