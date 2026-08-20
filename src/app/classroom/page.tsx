"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Tv, 
  LogOut, 
  Send, 
  BookOpen, 
  FolderOpen, 
  FileText, 
  Clock, 
  MessageSquare,
  Sparkles,
  Award
} from "lucide-react";

export default function VirtualClassroomPage() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");
  const [chatMessage, setChatMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    { sender: "Teacher", text: "Assalamu Alaikum Zainab. Let's start by reciting Surah Al-Mulk.", time: "05:30 PM" },
    { sender: "Student", text: "Walaikum Assalam Sheikh. I am ready.", time: "05:31 PM" },
    { sender: "Teacher", text: "Great. Please start from verse 5. Watch the Makhraj of letter 'Qaf'.", time: "05:32 PM" }
  ]);

  const resources = [
    { name: "Noorani Qaida Booklet.pdf", size: "2.4 MB" },
    { name: "Makharij Articulation Guide.pdf", size: "1.1 MB" },
    { name: "Surah Al-Mulk recitation.mp3", size: "4.8 MB" }
  ];

  const notes = [
    "Mistake corrected in Surah Al-Mulk v.5: Articulation of 'Qaf' (Echo sound).",
    "Homework: Memorize Surah Al-Mulk verses 6 to 10 with Tajweed rules.",
    "Practice stretching Madd Far'ee for 4 counts."
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const newMsg = {
        sender: "Student",
        text: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatLog([...chatLog, newMsg]);
      setChatMessage("");

      // Simulated auto-response from teacher
      setTimeout(() => {
        setChatLog(prev => [...prev, {
          sender: "Teacher",
          text: "Excellent. Keep repeating that practice verse.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 2000);
    }
  };

  return (
    <div className="h-screen bg-navy-custom flex flex-col text-white overflow-hidden">
      {/* Classroom Header */}
      <header className="bg-navy-light/50 h-16 border-b border-emerald-950 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <BookOpen className="h-6 w-6 text-gold-custom" />
          <div>
            <h1 className="text-sm sm:text-base font-extrabold tracking-tight">Quran Recitation & Tajweed Class</h1>
            <span className="block text-[10px] text-gray-400 font-semibold">Tutor: Sheikh Muhammad (Egypt) | Student: Zainab (UK)</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-emerald-custom/10 text-emerald-custom-light px-3 py-1 rounded-full text-xs font-bold border border-emerald-custom/20">
            <Clock className="h-3.5 w-3.5 text-gold-custom animate-pulse" />
            <span>Class Time: 00:22:15</span>
          </div>
          <Link
            href="/dashboard/student"
            className="flex items-center space-x-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold shadow-md cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span>Leave Class</span>
          </Link>
        </div>
      </header>

      {/* Main Workspace layout */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Left Side: Interactive Board and Video Feeds (Col-8) */}
        <div className="flex-1 flex flex-col p-4 space-y-4 min-h-0">
          {/* Shared Whiteboard board */}
          <div className="flex-1 bg-white text-navy-custom rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-emerald-custom/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-custom/5 rounded-full filter blur-2xl" />

            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Shared Study Board</span>
              <span className="text-[10px] text-emerald-custom font-extrabold flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 animate-spin text-gold-custom" />
                Page 12 (Noorani Qaida)
              </span>
            </div>

            {/* Simulated Quran text board */}
            <div className="flex-1 flex items-center justify-center p-6 text-center">
              <div className="space-y-6">
                {/* Simulated Arab symbols with pointers */}
                <div className="text-5xl sm:text-6xl font-serif text-emerald-custom tracking-wide leading-loose pt-4" dir="rtl">
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </div>
                <div className="text-4xl sm:text-5xl font-serif text-navy-custom tracking-widest leading-loose pt-2 border-t border-dashed border-gray-150" dir="rtl">
                  خَ لَ قَ كُ مْ
                </div>
                
                {/* Pointer marker tag */}
                <div className="inline-flex items-center space-x-1 px-3 py-1 rounded bg-amber-100 border border-amber-300 text-amber-800 text-[10px] font-bold">
                  <span>Teacher Pointer: Correct Makhraj of Letter 'Kha' (خ)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 text-[10px] text-gray-400 flex justify-between">
              <span>* Pointer tracking active</span>
              <span>Double-click board to draw annotations (Mockup only)</span>
            </div>
          </div>

          {/* Video Feeds panel (Bottom overlay style) */}
          <div className="grid grid-cols-2 gap-4 h-36 sm:h-44 shrink-0">
            {/* Teacher video mock */}
            <div className="bg-navy-light rounded-xl overflow-hidden relative border border-emerald-950 flex items-center justify-center">
              {micOn ? (
                <div className="absolute top-2 right-2 p-1.5 bg-emerald-custom text-white rounded-full">
                  <Mic className="h-3.5 w-3.5" />
                </div>
              ) : (
                <div className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full">
                  <MicOff className="h-3.5 w-3.5" />
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-black/60 text-[10px] text-white px-2 py-0.5 rounded">
                Sheikh Muhammad (Egypt)
              </div>
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald-custom text-white flex items-center justify-center font-bold text-lg mx-auto">
                  SM
                </div>
                <span className="text-[10px] text-emerald-custom-light font-bold">Live Stream Active</span>
              </div>
            </div>

            {/* Student video mock */}
            <div className="bg-navy-light rounded-xl overflow-hidden relative border border-emerald-950 flex items-center justify-center">
              {!videoOn ? (
                <div className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full">
                  <VideoOff className="h-3.5 w-3.5" />
                </div>
              ) : (
                <div className="absolute top-2 right-2 p-1.5 bg-emerald-custom text-white rounded-full">
                  <Video className="h-3.5 w-3.5" />
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-black/60 text-[10px] text-white px-2 py-0.5 rounded">
                Zainab Mahmood (UK)
              </div>
              <div className="text-center space-y-1">
                <div className="w-12 h-12 rounded-full bg-navy-custom border border-emerald-950 text-white flex items-center justify-center font-bold text-lg mx-auto">
                  ZM
                </div>
                <span className="text-[10px] text-emerald-custom-light font-bold">Camera Stream Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Chat, Files, Notes Tab Panels (Col-4) */}
        <aside className="w-full lg:w-80 bg-navy-light/35 border-t lg:border-t-0 lg:border-l border-emerald-950 flex flex-col min-h-0 shrink-0">
          {/* Tab Navigation header */}
          <div className="flex border-b border-emerald-950 text-xs font-bold">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "chat" ? "border-gold-custom text-gold-custom bg-navy-light/10" : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat Log</span>
            </button>
            <button
              onClick={() => setActiveTab("files")}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "files" ? "border-gold-custom text-gold-custom bg-navy-light/10" : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <FolderOpen className="h-4 w-4" />
              <span>Resources</span>
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`flex-1 py-3 text-center border-b-2 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "notes" ? "border-gold-custom text-gold-custom bg-navy-light/10" : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Notes</span>
            </button>
          </div>

          {/* Tab contents */}
          <div className="flex-1 p-4 overflow-y-auto min-h-0 text-xs font-semibold">
            {/* Chat Tab Panel */}
            {activeTab === "chat" && (
              <div className="h-full flex flex-col justify-between min-h-0">
                <div className="flex-1 space-y-3 overflow-y-auto mb-4 pr-1">
                  {chatLog.map((c, i) => (
                    <div key={i} className={`p-2.5 rounded-lg max-w-[85%] ${
                      c.sender === "Teacher" ? "bg-emerald-custom/10 text-emerald-custom-light mr-auto" : "bg-navy-light text-white ml-auto"
                    }`}>
                      <span className="block text-[9px] text-gray-400 mb-0.5">{c.sender} • {c.time}</span>
                      <p className="leading-relaxed font-medium">{c.text}</p>
                    </div>
                  ))}
                </div>
                
                {/* Message input form */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type class message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-grow px-3 py-2 text-xs rounded bg-navy-light/80 border border-emerald-950 focus:outline-none focus:border-gold-custom text-white"
                  />
                  <button type="submit" className="p-2 bg-emerald-custom hover:bg-emerald-900 rounded text-white cursor-pointer">
                    <Send className="h-4 w-4 text-gold-custom-light" />
                  </button>
                </form>
              </div>
            )}

            {/* Files Tab Panel */}
            {activeTab === "files" && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Lesson Files Sharing</h4>
                {resources.map((res, i) => (
                  <div key={i} className="p-3 bg-navy-light/35 border border-emerald-950 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="block font-bold text-white leading-tight">{res.name}</span>
                      <span className="block text-[9px] text-gray-400 font-medium">{res.size}</span>
                    </div>
                    <button className="px-2.5 py-1 bg-emerald-custom text-white rounded text-[10px] hover:bg-emerald-900">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Notes Tab Panel */}
            {activeTab === "notes" && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Teacher Class Notes</h4>
                <ul className="space-y-2.5">
                  {notes.map((note, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-custom shrink-0 mt-1.5"></span>
                      <span className="text-gray-300 font-medium leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Media control controls footer */}
      <footer className="h-16 bg-navy-light/80 border-t border-emerald-950 flex justify-center items-center gap-4 shrink-0">
        <button
          onClick={() => setMicOn(!micOn)}
          className={`p-3 rounded-full shadow cursor-pointer transition-colors ${
            micOn ? "bg-navy-light hover:bg-emerald-950 text-white" : "bg-red-600 text-white"
          }`}
          title={micOn ? "Mute Mic" : "Unmute Mic"}
        >
          {micOn ? <Mic className="h-5 w-5 text-gold-custom-light" /> : <MicOff className="h-5 w-5" />}
        </button>

        <button
          onClick={() => setVideoOn(!videoOn)}
          className={`p-3 rounded-full shadow cursor-pointer transition-colors ${
            videoOn ? "bg-navy-light hover:bg-emerald-950 text-white" : "bg-red-600 text-white"
          }`}
          title={videoOn ? "Disable Camera" : "Enable Camera"}
        >
          {videoOn ? <Video className="h-5 w-5 text-gold-custom-light" /> : <VideoOff className="h-5 w-5" />}
        </button>

        <button
          className="p-3 rounded-full bg-navy-light hover:bg-emerald-950 text-white shadow cursor-pointer transition-colors"
          title="Share Screen"
        >
          <Tv className="h-5 w-5 text-gold-custom-light" />
        </button>
      </footer>
    </div>
  );
}
