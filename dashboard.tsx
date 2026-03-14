import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import logoImage from "figma:asset/1515b3414e2a8bb7a713e48eaa888e340d21b0a2.png";

export function Dashboard() {
  const navigate = useNavigate();

  const pastProjects = [
    {
      id: 1,
      description: "I want to build an app that has an inbuilt search engine for science concepts",
      skillLevel: "beginner",
      status: "In Progress",
      created: "14/03/2026, 18:12:01",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="DojoBuild" className="h-8 w-8" />
            <span className="text-lg font-semibold text-foreground md:text-xl">DojoBuild</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate("/new-project")}>
              Start a new project
            </Button>
            <Button variant="outline" size="sm">Refresh</Button>
            <Button variant="outline" size="sm">Edit profile</Button>
            <Button variant="destructive" size="sm">Log Out</Button>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">Dashboard</h1>
          </div>

          {/* Past Projects */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">Past projects</h2>
            
            <div className="space-y-4">
              {pastProjects.map((project) => (
                <Card key={project.id} className="rounded-2xl border-2 border-border p-4 md:p-6">
                  <div className="space-y-3">
                    <div className="break-words">
                      <span className="font-semibold">Description: </span>
                      <span className="text-sm md:text-base">{project.description}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Skill level: </span>
                      <span className="text-sm md:text-base">{project.skillLevel}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Status: </span>
                      <span className="text-sm md:text-base">{project.status}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Created: </span>
                      <span className="text-sm md:text-base">{project.created}</span>
                    </div>
                    <div className="pt-2">
                      <Button onClick={() => navigate("/workspace")} className="w-full md:w-auto">
                        Continue
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}