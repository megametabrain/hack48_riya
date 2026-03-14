import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Palette, Code2, Database, Boxes, GitBranch, Plug } from "lucide-react";

export function Customize1() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    {
      id: "uiux",
      icon: Palette,
      title: "UI/UX",
      description: "Designing the front-end features and perfecting user interaction to visual effects",
    },
    {
      id: "languages",
      icon: Code2,
      title: "Languages",
      description: "Learn an array of Front-end and Frameworks From React, HTML/CSS, to Python, to SQL",
    },
    {
      id: "data-structures",
      icon: Boxes,
      title: "Data Structures",
      description: "Understanding how to process and build data efficiently.",
    },
    {
      id: "version-control",
      icon: GitBranch,
      title: "Version Control",
      description: "Using Tools like Git, Github, SVN to manage code changes and collaborate with other builders.",
    },
    {
      id: "apis",
      icon: Plug,
      title: "APIs",
      description: "Creating and Connecting Software Components",
    },
    {
      id: "frameworks",
      icon: Database,
      title: "Frameworks",
      description: "Using front-end and React, Angular or back-end NodeJS, Django(!) frameworks.",
    },
  ];

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length > 0) {
      navigate("/customize-2");
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            What skills do you want to learn?
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Select all that apply
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-3 md:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isSelected = selectedSkills.includes(skill.id);
            return (
              <Card
                key={skill.id}
                onClick={() => toggleSkill(skill.id)}
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
                    {skill.title}
                  </h3>
                </div>
                <p className="text-center text-xs text-muted-foreground md:text-sm">{skill.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={selectedSkills.length === 0}
            className="w-full md:w-auto"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}