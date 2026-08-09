const SCENARIO_KEY = "abtalks_scenario";
const STUDENT_NAME_KEY = "abtalks_student_name";

function submissionKey(dayNumber) {
  return "abtalks_day" + dayNumber + "_submission";
}

export function getSubmission(dayNumber) {
  try {
    return JSON.parse(localStorage.getItem(submissionKey(dayNumber)) || "null");
  } catch (e) {
    return null;
  }
}

export function setSubmission(dayNumber, value) {
  try {
    localStorage.setItem(submissionKey(dayNumber), JSON.stringify(value));
  } catch (e) {
    /* storage unavailable — demo still works, just won't persist */
  }
}

export function getScenario() {
  try {
    return localStorage.getItem(SCENARIO_KEY) || "normal";
  } catch (e) {
    return "normal";
  }
}

export function setScenario(name) {
  try {
    localStorage.setItem(SCENARIO_KEY, name);
  } catch (e) {}
}

const PROGRESS_KEY = "abtalks_live_progress";

/* Real (non-preview) student progress — what actually happens as you
   submit days, separate from the canned demo scenarios used by the
   grader-preview switcher. Starts fresh on every sign-up. */
export function getProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "null");
    if (raw) return raw;
  } catch (e) {}
  return { today: 1, streak: 0, longestStreak: 0, completed: [], missed: [], grace: null, rank: null };
}

export function setProgress(value) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(value));
  } catch (e) {}
}

export function resetProgress() {
  setProgress({ today: 1, streak: 0, longestStreak: 0, completed: [], missed: [], grace: null, rank: null });
}

/* Call after a successful day submission to move the live student
   forward: marks the day complete, bumps the streak, and advances
   "today" to the next day so the dashboard reflects real progress
   instead of a static scenario. */
export function advanceProgress(dayNum) {
  const p = getProgress();
  const completed = p.completed.includes(dayNum) ? p.completed : [...p.completed, dayNum];
  const streak = p.streak + 1;
  const longestStreak = Math.max(p.longestStreak, streak);
  const next = {
    ...p,
    completed,
    streak,
    longestStreak,
    today: Math.max(p.today, dayNum + 1),
    missed: p.missed.filter(d => d !== dayNum)
  };
  setProgress(next);
  return next;
}

/* Overrides the mocked student's display name — set on sign-up so the
   dashboard greets the actual name typed into the form instead of the
   hardcoded demo student. No backend; just a stand-in for a real
   session, per the "mocked data only" brief. */
export function getStudentName() {
  try {
    return localStorage.getItem(STUDENT_NAME_KEY) || null;
  } catch (e) {
    return null;
  }
}

export function setStudentName(name) {
  try {
    if (name && name.trim()) {
      localStorage.setItem(STUDENT_NAME_KEY, name.trim());
    }
  } catch (e) {}
}
