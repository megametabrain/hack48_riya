import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Plus, MoreVertical, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1515b3414e2a8bb7a713e48eaa888e340d21b0a2.png";

export function Workspace() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectName = searchParams.get("project") || "Dojo Workspace";
  const [activeTab, setActiveTab] = useState("main.js");
  const [showHint, setShowHint] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [hintRevealed, setHintRevealed] = useState(false);
  const [roadmapTasks] = useState([
    { id: 1, title: "Set up a Basic Project Structure", completed: false },
    { id: 2, title: "Create a Simple Search Bar", completed: false },
    { id: 3, title: "Implement Basic Data Storage", completed: false },
    { id: 4, title: "Implement Search Functionality", completed: false },
    { id: 5, title: "Display Search Results", completed: false },
    { id: 6, title: "Enhance User Interface", completed: false },
  ]);

  const tabs = ["main.js", "rrwt.js"];
  const files = ["main.js", "rrwt.js"];

  const handleHintClick = () => {
    setShowHint(!showHint);
    if (!hintRevealed) {
      setHintRevealed(true);
    }
  };

  const handleExampleClick = () => {
    setShowExample(!showExample);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="DojoBuild" className="h-8 w-8" />
            <span className="text-lg font-semibold text-foreground md:text-xl">{projectName}</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button variant="outline" size="sm">Download</Button>
            <Button variant="outline" size="sm">Import</Button>
            <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>Dashboard</Button>
            <Button variant="destructive" size="sm">Log Out</Button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-border bg-white px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <div className="w-full md:w-64">
            <div className="text-xs text-muted-foreground">
              Progress: 0 of 6 tasks complete (0%)
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full bg-primary transition-all" style={{ width: "0%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Sidebar - Files & Roadmap */}
        <aside className="w-full border-b border-border bg-white p-4 md:w-64 md:border-b-0 md:border-r md:p-6">
          {/* Files Section */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Files</h2>
              <button className="text-foreground hover:text-primary">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1">
              {files.map((file) => (
                <div
                  key={file}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <span className="text-foreground">{file}</span>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Roadmap</h2>
            <div className="relative space-y-3">
              {/* Vertical line connecting the roadmap items */}
              <div className="absolute left-[18px] top-8 bottom-8 w-[2px] bg-gray-200" />
              
              {roadmapTasks.map((task, index) => (
                <div key={task.id} className="relative">
                  <div className="flex gap-3">
                    {/* Number circle */}
                    <div className={`z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white text-sm font-semibold ${
                      task.id === 1 ? "border-primary text-primary" : "border-gray-300 text-foreground"
                    }`}>
                      {task.id}
                    </div>
                    
                    {/* Task card */}
                    <div className={`flex-1 rounded-lg border-2 p-3 ${
                      task.id === 1 
                        ? "border-primary bg-primary/5" 
                        : "border-gray-200 bg-white"
                    }`}>
                      <h3 className="mb-2 text-sm font-medium leading-tight text-foreground">
                        {task.title}
                      </h3>
                      {task.id === 1 && (
                        <Button size="sm" className="w-full bg-primary text-xs hover:bg-primary/90">
                          Mark as Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center - Code Editor */}
        <main className="flex flex-1 flex-col">
          {/* File Tabs */}
          <div className="flex border-b border-gray-300 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-2 border-r border-gray-300 px-4 py-2 text-xs font-medium transition-colors md:px-6 md:py-3 md:text-sm ${
                  activeTab === tab
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-[#1E1E1E] p-4 md:p-6">
            <Textarea
              className="h-full min-h-[300px] resize-none border-0 bg-transparent font-mono text-xs text-gray-400 placeholder:text-gray-600 focus-visible:ring-0 md:min-h-[500px] md:text-sm"
              placeholder="// Start coding here..."
              defaultValue=""
            />
          </div>
        </main>

        {/* Right Sidebar - Hints & Mentor Feedback */}
        <aside className="w-full border-t border-border bg-white p-4 md:w-80 md:border-l md:border-t-0 md:p-6">
          <div className="space-y-6">
            {/* Hints Section */}
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground">Hints</h2>
              <div className="space-y-2">
                <Button className="w-full justify-between bg-primary text-sm hover:bg-primary/90" onClick={handleHintClick}>
                  Give me a hint
                  {showHint ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
                
                {/* Hint Dropdown */}
                {showHint && (
                  <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
                    <p className="text-xs text-foreground">
                      Start by creating a basic HTML file structure. Think about the essential elements you need: a DOCTYPE declaration, html tags, head section with meta tags, and a body for your content.
                    </p>
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-2 text-sm" 
                  onClick={handleExampleClick}
                  disabled={!hintRevealed}
                >
                  Show example
                  {showExample ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
                
                {/* Example Dropdown */}
                {showExample && hintRevealed && (
                  <div className="rounded-lg border-2 border-border bg-gray-50 p-4">
                    <pre className="text-xs text-foreground overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Project</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}
                    </pre>
                  </div>
                )}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                {hintRevealed ? "You've unlocked the example!" : "Reveal one hint to unlock the example."}
              </p>
            </div>

            {/* Mentor Feedback Section */}
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground">Mentor Feedback</h2>
              <div className="space-y-3">
                <Button className="w-full bg-primary text-sm hover:bg-primary/90">
                  Check My Code
                </Button>

                <div className="min-h-[254px] rounded-xl border-2 border-gray-200 bg-gray-50 p-4 md:min-h-[312px]">
                  <p className="text-xs text-muted-foreground">No feedback yet.</p>
                </div>

                <div className="pt-2">
                  <label className="mb-2 block text-xs font-medium text-foreground">
                    Ask a follow-up question
                  </label>
                  <Input
                    placeholder="What should I fix next?"
                    className="mb-2 border-2 text-sm"
                  />
                  <Button variant="outline" className="w-full border-2 text-sm">
                    Send question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}