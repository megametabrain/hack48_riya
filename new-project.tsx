import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Folder, FileText, Search, X, Code2, Database, Rocket, Settings, ChevronRight, Menu } from "lucide-react";
import logoImage from "figma:asset/1515b3414e2a8bb7a713e48eaa888e340d21b0a2.png";

export function NewProject() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [searchQuery, setSearchQuery] = useState("");

  const skillLevels = [
    { id: "beginner", label: "Beginner" },
    { id: "explorer", label: "Explorer" },
    { id: "student", label: "Student" },
    { id: "master", label: "Master" },
  ];

  const selectLevel = (levelId: string) => {
    setActiveLevel(levelId);
  };

  const projects = [
    {
      id: "science-app",
      name: "Science App",
      icon: Code2,
      items: [
        { name: "How to design a home page?", type: "file" },
      ],
    },
    {
      id: "ed-app",
      name: "Ed App",
      icon: Database,
      items: [
        { name: "Intro to SQL Databases", type: "file" },
      ],
    },
    {
      id: "cooking",
      name: "Cooking",
      icon: Rocket,
      items: [
        { name: "How to setup Local Hosting", type: "file" },
        { name: "Using Vercel", type: "file" },
        { name: "Editing After Deployment", type: "file" },
      ],
    },
  ];

  const expandedProject = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  const learningPaths = [
    { title: "Learn a Language", icon: Code2, description: "Master programming fundamentals" },
    { title: "Build the Front-End", icon: Folder, description: "Create beautiful interfaces" },
    { title: "Build the Back-End", icon: Database, description: "Develop server logic" },
    { title: "Setting a Domain", icon: Rocket, description: "Deploy your app live" },
  ];

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/workspace?project=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="DojoBuild" className="h-8 w-8" />
            <span className="text-lg font-semibold text-foreground md:text-xl">DojoBuild</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="outline" size="sm">Edit profile</Button>
            <Button variant="destructive" size="sm">Log Out</Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-72" : "w-0"
          } border-r border-border bg-card transition-all duration-300 overflow-hidden`}
        >
          <div className="p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {expandedProject ? `${expandedProject.name}` : "Projects"}
            </h3>

            {!expandedProject ? (
              <div className="space-y-1">
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent"
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      <span className="flex-1 truncate font-medium">{project.name}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mb-4 text-sm text-primary hover:underline"
                >
                  ← Back to Projects
                </button>
                
                <div className="space-y-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2 px-3 py-1.5">
                      <Code2 className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm font-semibold">Front-End</span>
                    </div>
                    <div className="ml-9">
                      <button className="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent">
                        <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                        <span className="truncate text-muted-foreground">{expandedProject.items[0]?.name}</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 px-3 py-1.5">
                      <Database className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm font-semibold">Back-End</span>
                    </div>
                    <div className="ml-9">
                      <button className="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent">
                        <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                        <span className="truncate text-muted-foreground">Intro to SQL Databases</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 px-3 py-1.5">
                      <Rocket className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm font-semibold">Learn to Deploy</span>
                    </div>
                    <div className="ml-9 space-y-1">
                      {expandedProject.id === "cooking" && expandedProject.items.map((item, idx) => (
                        <button key={idx} className="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent">
                          <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <span className="truncate text-muted-foreground">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate("/dashboard")}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
            {/* Toggle Sidebar Button (Mobile) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mb-4 md:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>

            <div className="mb-8 md:mb-12">
              <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                Welcome To Your Dojo, Name!
              </h1>
              <p className="text-sm text-muted-foreground md:text-base">
                Type or select from the options below to get started.
              </p>
            </div>

            {/* Action Cards */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 md:gap-6">
              {learningPaths.map((path, index) => {
                const Icon = path.icon;
                return (
                  <Card
                    key={index}
                    className="group cursor-pointer rounded-2xl border-2 border-border p-4 transition-all hover:border-primary hover:shadow-lg md:p-6"
                  >
                    <div className="mb-2 flex items-center gap-3 md:mb-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground md:text-base">
                        {path.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      {path.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Search Bar with Skill Levels Inside */}
            <div className="relative mb-8">
              <div className="flex flex-col gap-3 rounded-2xl border-2 border-border bg-card px-4 py-3 shadow-sm md:px-6 md:py-4">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 flex-shrink-0 text-muted-foreground md:h-5 md:w-5" />
                  <Input
                    placeholder="Search or ask a question..."
                    className="flex-1 border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0 md:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchSubmit}
                  />
                </div>
                
                {/* Skill Level Buttons Inside Search Bar */}
                <div className="flex flex-wrap gap-2 pl-7">
                  {skillLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => selectLevel(level.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:text-sm ${
                        activeLevel === level.id
                          ? "bg-primary text-white"
                          : "bg-transparent text-foreground hover:bg-accent"
                      }`}
                    >
                      {level.label}
                      {activeLevel === level.id && (
                        <X className="ml-1.5 inline-block h-3 w-3" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center py-8 opacity-50">
              <img src={logoImage} alt="DojoBuild" className="h-12 w-12 md:h-16 md:w-16" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}