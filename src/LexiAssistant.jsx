import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import { Scale, Sparkles, Moon, Sun, BookOpen, Gavel } from "lucide-react";
import MainContent from "./MainContent.jsx";

export default function LexiAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const simulatedResponse = {
    answer:
      "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
    citations: [
      {
        text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
        source: "Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        paragraph: "Para 7",
      },
    ],
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setIsLoading(true);
    setIsTyping(true);
    setTimeout(() => {
      //add delay for request
      setResponse(simulatedResponse);
      setIsLoading(false);
      setTimeout(() => setIsTyping(false), 500);
    }, 1000);
  };
  const handleReset = () => {
    setQuery("");
    setResponse(null);
    setIsTyping(false);
  };
  const sampleQueries = [
    "Motor accident compensation under Section 166",
    "Future prospects for self-employed deceased",
    "Computation of damages in personal injury",
  ];
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-2xl ${
                isDarkMode
                  ? "bg-purple-600/20 border border-purple-500/30"
                  : "bg-indigo-100 border border-indigo-200"
              }`}
            >
              <Scale
                className={`h-8 w-8 ${
                  isDarkMode ? "text-purple-400" : "text-indigo-600"
                }`}
              />
            </div>
            <div>
              <h1
                className={`text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Lexi
                <span
                  className={isDarkMode ? "text-purple-400" : "text-indigo-600"}
                >
                  AI
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sun
              className={`h-4 w-4 ${
                isDarkMode ? "text-gray-400" : "text-yellow-500"
              }`}
            />
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-purple-600 data-[state-unchecked]:bg-gray-600"
            />
            <Moon
              className={`h-4 w-4 ${
                isDarkMode ? "text-purple-400" : "text-gray-400"
              }`}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <Card
              className={`border-0 shadow-xl ${
                isDarkMode
                  ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                  : "bg-white/70 backdrop-blur-sm border border-white/20"
              }`}
            >
              <CardContent className="p-6">
                <h3
                  className={`font-semibold mb-4 flex items-center gap-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  Quick Start
                </h3>
                <div className="space-y-3">
                  {sampleQueries.map((sample, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(sample)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all hover:scale-105 ${
                        isDarkMode
                          ? "bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white"
                          : "bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700"
                      }`}
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border-0 shadow-xl ${
                isDarkMode
                  ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                  : "bg-white/70 backdrop-blur-sm border border-white/20"
              }`}
            >
              <CardContent className="p-6">
                <h3
                  className={`font-semibold mb-4 flex items-center gap-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Legal Areas
                </h3>
                <div className="space-y-2">
                  {[
                    "Motor Vehicle Act",
                    "Personal Injury",
                    "Compensation Law",
                    "Civil Procedure",
                  ].map((area, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Gavel className="h-3 w-3" />
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <MainContent
            response={response}
            isLoading={isLoading}
            isTyping={isTyping}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            isDarkMode={isDarkMode}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>
    </div>
  );
}
