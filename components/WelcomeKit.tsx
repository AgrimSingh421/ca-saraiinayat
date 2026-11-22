
"use client";

import { useEffect, useState } from "react";
import { X, BookOpen, CalendarDays, GraduationCap, Wallet, MessageCircle, Clock, ClipboardList, BookMarked } from "lucide-react";

const resources = [
  { title: "Chairman's Message", icon: MessageCircle },
  { title: "Director's Message", icon: MessageCircle },
  { title: "Principal's Message", icon: GraduationCap },
  { title: "Welcome Brochure", icon: BookOpen },
  { title: "Steps to Use ERP Portal", icon: GraduationCap },
  { title: "Student Login Guide", icon: BookOpen },
  { title: "Fees Payment Guide", icon: Wallet },
  { title: "Digital Calendar", icon: CalendarDays },
  { title: "Notebook Distribution", icon: BookMarked },
  { title: "Syllabus", icon: BookOpen },
  { title: "Time Table", icon: Clock },
  { title: "Examination Pattern", icon: ClipboardList },
];

export default function WelcomeKit() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcome-kit-seen");

    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("welcome-kit-seen", "true");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c2037]/75 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-[#f8f6f1] shadow-2xl">

        <button
          onClick={closePopup}
          aria-label="Close welcome kit"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
        >
          <X size={22} />
        </button>

        <div className="bg-[#142b45] px-6 py-10 text-center text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5a45d]">
            Central Academy • Sarai Inayat
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Welcome Digital Kit
          </h2>

          <p className="mt-3 inline-block rounded-full bg-[#e87936] px-5 py-2 text-sm font-bold tracking-widest">
            SESSION 2026–27
          </p>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/75">
            Welcome to another exciting academic year!
            Explore important information, resources and
            updates for students and parents.
          </p>
        </div>

        <div className="max-h-[calc(90vh-230px)] overflow-y-auto p-5 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#142b45]">
              Explore Your Digital Kit
            </h3>
            <p className="mt-1 text-sm text-[#687582]">
              Select a resource to access important school information.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <button
                  key={resource.title}
                  type="button"
                  className="group flex min-h-28 flex-col items-start justify-between rounded-2xl border border-[#e6e2da] bg-white p-4 text-left transition hover:-translate-y-1 hover:border-[#e87936] hover:shadow-lg"
                >
                  <Icon
                    size={25}
                    className="text-[#e87936] transition group-hover:scale-110"
                  />

                  <span className="mt-4 text-sm font-semibold leading-5 text-[#142b45]">
                    {resource.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-[#e6e2da] pt-6 sm:flex-row">
            <p className="text-xs text-[#687582]">
              Central Academy, Sarai Inayat, Prayagraj
            </p>

            <button
              onClick={closePopup}
              className="rounded-full bg-[#142b45] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#e87936]"
            >
              Continue to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}