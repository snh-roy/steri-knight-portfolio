import type { TimelineEntryProps } from "./TimelineEntry";
import type { ProjectCardProps } from "./ProjectCard";

export const experience: TimelineEntryProps[] = [
  {
    ref: "0002",
    date: "AUG 2025 — DEC 2025",
    role: "App Development Intern",
    company: "NYC Department of Transportation",
    location: "New York, NY",
    bullets: [
      "Built an interactive web application that helps New Yorkers report and track streetlight conditions, collaborating with another intern to improve how maintenance teams inspect and handle streetlight bases.",
      "Designed and implemented the full stack — Python and Flask on the backend, JavaScript on a dynamic front-end, HTML/CSS for the user interface.",
      "Enhanced reporting accuracy and responsiveness through end-to-end testing and by optimizing the database and API calls, producing real-time, reliable streetlight status updates.",
    ],
    tags: ["Python", "Flask", "JavaScript", "HTML/CSS", "REST"],
  },
  {
    ref: "0001",
    date: "JUL 2025 — AUG 2025",
    role: "Drupal Developer & Website Designer Intern",
    company: "Art Beyond Sight",
    bullets: [
      "Managed and customized Drupal content and components, improving site usability and accessibility across key public-facing pages.",
      "Worked with a group of interns to design and implement native forms, streamlining communication workflows with investors and partners.",
    ],
    tags: ["Drupal", "PHP", "Accessibility", "UX"],
  },
];

export const projects: ProjectCardProps[] = [
  {
    designation: "SK-03",
    title: "AI Card Grade Estimator",
    status: "IN BUILD",
    dateRange: "MAY 2026 — PRESENT",
    description:
      "A web application that analyzes uploaded trading card images and estimates condition grades using computer vision techniques.",
    bullets: [
      "Implementing image preprocessing and feature extraction (centering, edge and corner wear detection) with OpenCV and NumPy.",
      "Building a FastAPI backend that serves inference results and integrates AI-based classification via Hugging Face APIs.",
      "Designing a lightweight upload + review UI so graders can validate model output before publishing scores.",
    ],
    stack: ["Python", "FastAPI", "OpenCV", "NumPy", "Hugging Face"],
  },
  {
    designation: "SK-02",
    title: "Maze Game",
    status: "SHIPPED",
    dateRange: "APR 2025 — DEC 2025",
    description:
      "A 2D maze game where players navigate obstacles to reach an exit — designed for beginners who want a simple, accessible puzzle experience.",
    bullets: [
      "Implemented a hint system using Breadth-First Search to generate and display the optimal solution path, improving gameplay clarity.",
      "Optimized rendering and movement logic with OpenGL transformations for smooth frame updates and responsive controls on common desktop setups.",
      "Iterated on level design to keep the difficulty curve gentle for first-time puzzle players.",
    ],
    stack: ["C++", "OpenGL", "BFS"],
  },
  {
    designation: "SK-01",
    title: "Account Management & Login Interface",
    status: "SHIPPED",
    dateRange: "DEC 2024 — JAN 2025",
    description:
      "A C++ account management system for users to register, log in, and recover passwords — built to make it easier to manage multiple accounts.",
    bullets: [
      "Implemented error handling and input validation to guide users through login retries and password resets, reducing confusion and failed attempts.",
      "Used C++ vector containers and file handling to manage account data during program execution.",
      "Structured the CLI flows so each state (register, login, recover) is isolated and testable.",
    ],
    stack: ["C++", "STL", "File I/O"],
  },
];
