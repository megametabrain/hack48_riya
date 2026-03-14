import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Atom, Sprout, Scale, BarChart3, FlaskConical, BookOpen } from "lucide-react";

export function Customize2() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    {
      id: "deeptech",
      icon: Atom,
      title: "DeepTech",
      description: "Advanced technology solutions and innovations",
    },
    {
      id: "agtech",
      icon: Sprout,
      title: "AgTech",
      description: "Agricultural technology and farming solutions",
    },
    {
      id: "regtech",
      icon: Scale,
      title: "RegTech",
      description: "Regulatory technology and compliance tools",
    },
    {
      id: "data-analysis",
      icon: BarChart3,
      title: "Data Analysis",
      description: "Working with data and analytics",
    },
    {
      id: "stem",
      icon: FlaskConical,
      title: "STEM",
      description: "Science, Technology, Engineering, and Mathematics",
    },
    {
      id: "education",
      icon: BookOpen,
      title: "Education",
      description: "Educational technology and learning platforms",
    },
  ];

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleContinue = () => {
    if (selectedInterests.length > 0) {
      navigate("/customize-3");
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            What are you interested in?
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Select all that apply
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-3 md:gap-6">
          {interests.map((interest) => {
            const Icon = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            return (
              <Card
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`cursor-pointer rounded-2xl border-2 p-4 transition-all md:p-6 ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="mb-1.5 flex flex-col items-center gap-3 text-center md:mb-2">
                  <div
                    className={`rounded-xl p-2 md:p-3 ${
                      isSelected ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 md:h-6 md:w-6 ${
                        isSelected ? "text-primary" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-center text-xs text-muted-foreground md:text-sm">{interest.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={selectedInterests.length === 0}
            className="w-full md:w-auto"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}