
export type Announcement = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: "Notice" | "Event" | "Academic" | "Admission";
  important: boolean;
  link?: string;
};

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Welcome to the New Academic Session",
    description:
      "Important information and updates for students and parents regarding the new academic session.",
    date: "2026-11-20",
    category: "Notice",
    important: true,
  },
  {
    id: 2,
    title: "Annual Sports Day",
    description:
      "Details about the school's annual sports activities and participation.",
    date: "2026-11-15",
    category: "Event",
    important: false,
  },
  {
    id: 3,
    title: "Examination Schedule",
    description:
      "Students and parents are requested to check the examination schedule and prepare accordingly.",
    date: "2026-11-10",
    category: "Academic",
    important: true,
  },
  {
    id: 4,
    title: "Admissions Open",
    description:
      "For admission-related information, please contact the school office.",
    date: "2026-11-05",
    category: "Admission",
    important: false,
  },
];
