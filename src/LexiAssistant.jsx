import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Loader2,
  Scale,
  ExternalLink,
  FileText,
  Sparkles,
  Moon,
  Sun,
  Quote,
  ArrowRight,
  BookOpen,
  Gavel,
} from "lucide-react";

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
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Advanced Legal Intelligence
              </p>
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
          <div className="lg:col-span-2 space-y-8">
            {/* Input Panel */}
            <Card
              className={`border-0 shadow-2xl ${
                isDarkMode
                  ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                  : "bg-white/80 backdrop-blur-sm border border-white/30"
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-purple-600/20" : "bg-indigo-100"
                    }`}
                  >
                    <FileText
                      className={`h-5 w-5 ${
                        isDarkMode ? "text-purple-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <h2
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Ask Your Legal Question
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Textarea
                      placeholder="Enter your legal query here"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className={`min-h-[140px] resize-none text-lg border-0 shadow-inner ${
                        isDarkMode
                          ? "bg-slate-900/50 text-white placeholder:text-gray-500 focus:ring-purple-500"
                          : "bg-gray-50/50 text-gray-900 placeholder:text-gray-500 focus:ring-indigo-500"
                      }`}
                      disabled={isLoading}
                    />
                    {query && (
                      <div
                        className={`absolute bottom-3 right-3 text-xs ${
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {query.length} characters
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={!query.trim() || isLoading}
                      className={`flex-1 h-12 text-lg font-medium transition-all hover:scale-105 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                          : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Analyzing Legal Query...
                        </>
                      ) : (
                        <>
                          Get Legal Answer
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {response && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleReset}
                        disabled={isLoading}
                        className={`h-12 ${
                          isDarkMode
                            ? "border-slate-600 text-gray-300 hover:bg-slate-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        New Query
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* show only for the response */}
            {response && (
              <div className="space-y-8 ">
                {/* Answer Card */}
                <Card
                  className={`border-0 shadow-2xl overflow-hidden ${
                    isDarkMode
                      ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50"
                      : "bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-white/30"
                  }`}
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${
                      isDarkMode
                        ? "from-purple-500 to-blue-500"
                        : "from-indigo-500 to-purple-500"
                    }`}
                  ></div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-2 rounded-lg ${
                          isDarkMode ? "bg-green-600/20" : "bg-green-100"
                        }`}
                      >
                        <Sparkles className="h-5 w-5 text-green-500" />
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Legal Analysis
                      </h3>
                    </div>

                    <div
                      className={`text-lg leading-relaxed ${
                        isDarkMode ? "text-gray-200" : "text-gray-800"
                      } ${isTyping ? "animate-pulse" : ""}`}
                    >
                      {response.answer}
                    </div>
                  </CardContent>
                </Card>

                {/* Citations card */}
                <Card
                  className={`border-0 shadow-2xl ${
                    isDarkMode
                      ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                      : "bg-white/80 backdrop-blur-sm border border-white/30"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-2 rounded-lg ${
                          isDarkMode ? "bg-blue-600/20" : "bg-blue-100"
                        }`}
                      >
                        <Quote className="h-5 w-5 text-blue-500" />
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Legal Citations
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {response.citations.map((citation, index) => (
                        <div
                          key={index}
                          className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                            isDarkMode
                              ? "bg-slate-700/30 border-slate-600/50 hover:bg-slate-700/50 hover:border-purple-500/50"
                              : "bg-gray-50/50 border-gray-200/50 hover:bg-white hover:border-indigo-300 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <Badge
                              variant="secondary"
                              className={`${
                                isDarkMode
                                  ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                                  : "bg-indigo-100 text-indigo-700 border-indigo-200"
                              }`}
                            >
                              Citation {index + 1}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`${
                                isDarkMode
                                  ? "border-slate-500 text-gray-300"
                                  : "border-gray-300 text-gray-600"
                              }`}
                            >
                              {citation.paragraph}
                            </Badge>
                          </div>

                          <div
                            className={`relative pl-6 mb-4 ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <div
                              className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${
                                isDarkMode ? "bg-purple-500" : "bg-indigo-500"
                              }`}
                            ></div>
                            <span className="italic text-lg leading-relaxed">
                              "{citation.text}"
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div
                              className={`flex items-center gap-2 text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              <FileText className="h-4 w-4" />
                              <span className="font-medium">
                                {citation.source}
                              </span>
                            </div>
                            <a href={citation.link} target="_blank">
                              <Button
                                target="_blank"
                                variant="ghost"
                                size="sm"
                                className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                                  isDarkMode
                                    ? "text-purple-400 hover:text-purple-300 hover:bg-purple-600/20"
                                    : "text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                }`}
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Open Document
                              </Button>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
