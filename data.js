/* ABTalks — mocked data layer. No backend; a small localStorage
   helper (see storage.js) makes the day-12 submission and the
   dashboard demo-scenario choice persist across a session. */

export const student = {
  name: "Ananya Sharma",
  initials: "AS",
  track: "Web Development",
  college: "MIT-WPU, Pune",
  totalDays: 60
};

/* Four states the dashboard can render. "normal" is the default —
   mid-challenge, one real missed day in the past (life happens), no
   active grace period. The other three exist to demonstrate the
   edge cases called out in the brief; reachable via the demo switch. */
export const scenarios = {
  normal: {
    label: "Day 12 · active streak",
    today: 12,
    streak: 4,
    longestStreak: 6,
    completed: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11],
    missed: [7],
    grace: null,
    rank: { percentile: 18, cohortSize: 214 }
  },
  dayOne: {
    label: "Day 1 · brand new",
    today: 1,
    streak: 0,
    longestStreak: 0,
    completed: [],
    missed: [],
    grace: null,
    rank: null
  },
  missed: {
    label: "Day 12 · streak at risk",
    today: 12,
    streak: 0,
    longestStreak: 6,
    completed: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    missed: [7, 11],
    grace: { hoursLeft: 6, minutesLeft: 20, forDay: 11 },
    rank: { percentile: 61, cohortSize: 214 }
  },
  empty: {
    label: "Day 1 · no activity yet",
    today: 1,
    streak: 0,
    longestStreak: 0,
    completed: [],
    missed: [],
    grace: null,
    rank: null,
    emptyProfile: true
  }
};

export const badgesCatalog = [
  { id: "first-commit", label: "First Commit", need: "Complete Day 1" },
  { id: "week-one", label: "Week One", need: "7-day streak" },
  { id: "halfway", label: "Halfway Hero", need: "Reach Day 30" },
  { id: "comeback", label: "Comeback", need: "Recover from a missed day" },
  { id: "finisher", label: "Finisher", need: "Complete Day 60" }
];

export const day1 = {
  dayNumber: 1,
  track: "Web Development",
  title: "Ship Your First Commit",
  difficulty: "Beginner",
  estMinutes: 60,
  brief:
    "The whole point of Day 1 is proving to yourself this is real. No fancy scope — build one small, complete page and push it. The habit matters more than the code today.",
  requirements: [
    "A single HTML/CSS page introducing yourself — name, track, and what you're building toward",
    "Fully responsive from 360px to desktop — no horizontal scroll",
    "Pushed to a public GitHub repo with a clear commit message",
    "Uses your own copy — no lorem ipsum in the final commit"
  ],
  resources: [
    { label: "Writing your first good commit message", url: "#" },
    { label: "Free hosting for a static page (GitHub Pages)", url: "#" }
  ]
};

export const day2 = {
  dayNumber: 2,
  track: "Web Development",
  title: "Style It Like You Mean It",
  difficulty: "Beginner",
  estMinutes: 60,
  brief:
    "Yesterday was structure. Today is taste. Take the page you shipped on Day 1 and give it real visual hierarchy — spacing, type, and color that make it look intentional, not default-browser.",
  requirements: [
    "Apply a real color palette and font pairing — no default black-on-white",
    "Clear visual hierarchy: one obvious heading, readable body text, consistent spacing",
    "Fully responsive from 360px to desktop — no horizontal scroll",
    "Commit message explains what changed from Day 1"
  ],
  resources: [
    { label: "Type scale basics for the web", url: "#" },
    { label: "Picking a color palette fast", url: "#" }
  ]
};

export const day12 = {
  dayNumber: 12,
  track: "Web Development",
  title: "Build a Responsive Pricing Page",
  difficulty: "Intermediate",
  estMinutes: 90,
  brief:
    "Recruiters skim, they don't read. Today you're building a pricing page that gets the plan across in one glance — three tiers, a highlighted recommended plan, and a layout that doesn't fall apart on a phone.",
  requirements: [
    "Three pricing tiers with at least one visually highlighted as \u201crecommended\u201d",
    "Fully responsive from 360px to desktop — no horizontal scroll",
    "Each tier lists at least 4 features and has a clear call-to-action button",
    "Uses your own copy — no lorem ipsum in the final commit"
  ],
  resources: [
    { label: "CSS Grid vs Flexbox for pricing cards", url: "#" },
    { label: "Reference: Stripe's pricing page structure", url: "#" }
  ]
};

export const tasksByDay = {
  1: day1,
  2: day2,
  12: day12
};
