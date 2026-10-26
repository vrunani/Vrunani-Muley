// ===================================================================
// ALL YOUR CONTENT LIVES HERE.
// Edit these values to change what shows up on the page —
// no HTML or CSS editing needed.
// ===================================================================

const SITE_DATA = {

  name: "Vrunani Muley",

  nav: [
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#work" },
    { label: "education", href: "#education" },
    { label: "more about", href: "#about" },
    { label: "contact", href: "#contact" },
  ],

  hero: {
    greeting: "Hi, I'm Vrunani.",
    headline: "I build the tool I wish existed. Then I ship it.",
    sub: `Computer engineering, but I'd rather build than just study it.
    A few apps, a pipeline, built mostly on my own. More below.`,
    cta: { label: "see the work", href: "#work" },
    resume: { label: "view resume", href: "assets/Vrunani_Muley_Resume.pdf" }
  },

  // Each skill now carries a "level" (0–100) — this drives how full the
  // liquid fill rises on hover. Tune these numbers to match your own
  // sense of how strong each skill is; nothing else needs to change.
  skills: [
    {
      category: "languages",
      items: [
        { name: "python", level: 90 },
        { name: "java", level: 88 },
        { name: "javascript", level: 82 },
        { name: "sql", level: 78 },
        { name: "dart", level: 70 },
        { name: "html", level: 88 },
        { name: "css", level: 82 },
      ]
    },
    {
      category: "ai & llm",
      items: [
        { name: "groq api", level: 72 },
        { name: "langchain", level: 60 },
        { name: "llm integration", level: 68 },
        { name: "prompt engineering", level: 75 },
      ]
    },
    {
      category: "frameworks",
      items: [
        { name: "react", level: 65 },
        { name: "spring boot", level: 82 },
        { name: "spring data jpa", level: 75 },
        { name: "hibernate", level: 70 },
        { name: "flutter", level: 78 },
      ]
    },
    {
      category: "databases",
      items: [
        { name: "mysql", level: 82 },
        { name: "mongodb", level: 65 },
        { name: "firebase", level: 75 },
        { name: "hive", level: 55 },
      ]
    },
    {
      category: "cloud & devops",
      items: [
        { name: "aws (ec2, s3, iam)", level: 62 },
        { name: "git", level: 85 },
        { name: "github actions", level: 72 },
        { name: "docker", level: 68 },
        { name: "jenkins", level: 60 },
        { name: "nginx", level: 55 },
        { name: "maven", level: 62 },
        { name: "render", level: 68 },
      ]
    },
    {
      category: "concepts",
      items: [
        { name: "oop", level: 88 },
        { name: "dsa", level: 85 },
        { name: "rest apis", level: 80 },
        { name: "ci/cd", level: 70 },
        { name: "microservices", level: 58 },
        { name: "system design", level: 60 },
      ]
    },
  ],

  // Each project's "type" is a short category label shown above the
  // title (e.g. "personal project", "automation") — it should NEVER
  // repeat the title itself, that's redundant.
// Replace the whole `work: [ ... ],` array in data.js with this one.
// what = paragraph, how = short points, why = paragraph.
work: [
  {
    type: "personal project",
    title: "VersionVibe",
    tags: ["java", "java swing", "sha-1"],
    what: `A desktop text editor that treats your writing the way Git treats code. Every saved change becomes a version, and you can undo, redo or jump to any earlier one, even on a different branch, without losing anything. It placed 2nd at the Buffer 6.0 Data Structures Challenge.`,
    how: [
      `Each version is a node in a hand-written tree: its text, a SHA-1 hash, a parent pointer and a list of children.`,
      `Undo is one move up the parent pointer. Redo shows a popup when a node has more than one child.`,
      `Save compares the new hash with the last one, so saving twice without a change never creates a duplicate.`,
    ],
    why: `In a normal editor, undo and then typing something new wipes your redo history. I wanted history that keeps every alternative, so a tree fit better than a stack.`,
    link: "https://github.com/vrunani/Buffer-6.0"
  },
  {
    type: "personal project",
    title: "Runway",
    tags: ["vanilla js", "firebase", "chart.js", "vercel"],
    what: `A placement tracker for one person: me. It holds every company, deadline, CGPA cutoff, interview round, note and resume version, then shows how the season is going through a funnel and stats. I still use it daily.`,
    how: [
      `No backend. The browser talks straight to Firebase Auth, Firestore and Storage, and Vercel hosts the static frontend.`,
      `Adding an opening takes four fields. Everything else is filled in later.`,
      `The stage shown on a card is worked out from its round timeline, so it can never disagree with the rounds.`,
    ],
    why: `Placement season meant dozens of companies at once, tracked in a messy spreadsheet that never warned me about a deadline or told me if I was eligible.`,
    link: "PASTE_RUNWAY_LINK_HERE"
  },
  {
    type: "personal project",
    title: "LOOM",
    tags: ["flutter", "hive", "groq api", "claude api"],
    what: `One offline-first app for tasks, habits, mood, notes and screen time. Once a week it analyses all of it and writes a wellness report as a PDF. A hands-free voice assistant runs the app too. Ten people tested it before launch, and I fixed the storage bugs they found.`,
    how: [
      `Everything lives in Hive on the device. Firebase is only an optional backup.`,
      `Voice goes speech-to-text, then a fast Groq model that must answer in JSON from a fixed list of about 25 intents, then the app runs the action.`,
      `The weekly report is written by Claude, with a template fallback so it still works with no API key.`,
    ],
    why: `A to-do app, a habit app, a mood journal and a screen-time tracker are four separate apps, and none of them can tell you that your mood dips on high-screen-time days.`,
    link: "https://github.com/vrunani/loom"
  },
  {
    type: "automation",
    title: "Email-to-Telegram Notifier",
    tags: ["github actions", "gmail api", "python", "telegram"],
    what: `It watches my Gmail for placement and college senders and sends me a Telegram message with the sender, the subject and an AI summary of under five lines. It runs on GitHub's free infrastructure, with no laptop or server.`,
    how: [
      `A GitHub Actions cron job runs every 5 minutes and checks the last hour of mail against a sender allowlist.`,
      `Matching emails are summarised by GPT-4o-mini through GitHub Models, then posted to the Telegram Bot API.`,
      `Secrets stay in GitHub Secrets, and the OAuth refresh token is generated once locally.`,
    ],
    why: `Placement emails are time-critical and get buried. I wanted them on my phone within minutes, with enough of a summary to decide whether to open them. It went through Cloud Functions, Twilio and Meta WhatsApp before Telegram, because that was the only one needing no card.`,
    link: "https://github.com/vrunani/email-notifier"
  },
  {
    type: "desktop app",
    title: "StickyTasks",
    tags: ["electron", "react", "sqlite"],
    what: `An offline Windows sticky note that stays on top, starts with Windows and toggles with Ctrl+Shift+T. You type tasks straight onto the paper, finished ones clean themselves up, and it can shrink into a small floating bubble.`,
    how: [
      `Electron main process for windows, tray, hotkey and reminders. React for the UI, with a locked-down preload bridge between them.`,
      `Tasks live in built-in SQLite. Deletes are soft, which makes Undo easy.`,
      `Packaged with an NSIS installer and auto-updates from GitHub Releases.`,
    ],
    why: `Windows' built-in sticky notes are limited, and heavy to-do apps want accounts and many clicks. I wanted capture to be one hotkey, type, Enter, with nothing leaving my PC.`,
    link: "https://github.com/vrunani/StickyTasks",
    download: "https://github.com/vrunani/StickyTasks/releases/download/v1.1.0/StickyTasks.Setup.1.1.0.exe"
  },
],

  gallery: [
    {
      number: "01",
      year: "2026",
      title: "Algorithm Visualizer",
      summary: "Sorting, searching, trees. Watch each one run step by step.",
      tags: ["html", "css", "javascript"],
      link: "https://github.com/vrunani/AlgoVizz",
      image: "assets/gallery/algo vizz.jpg",
      imageDark: "assets/gallery/algo vizz dark.jpeg"
    },
    {
      number: "02",
      year: "2025",
      title: "Quizely",
      summary: "A full exam platform, objective and subjective. Students attempt, teachers grade the subjective answers, results go out.",
      tags: ["java", "spring boot", "postgresql"],
      link: "https://quize-181s.onrender.com/",
      image: "assets/gallery/quizly.jpg",
      imageDark: "assets/gallery/quizly dark.jpeg"
    },
    {
      number: "03",
      year: "2025",
      title: "CI/CD Pipeline",
      summary: "Push code, it's live in about 3 minutes: tested, containerized, deployed on its own.",
      tags: ["docker", "jenkins", "github actions"],
      link: "https://weather-dashboard-devops-igew.onrender.com/",
      image: "assets/gallery/cicd.jpg",
      imageDark: "assets/gallery/cicd dark.jpeg"
    },
    {
      number: "04",
      year: "2026",
      title: "Moonly",
      summary: "A period-tracking app that predicts your upcoming cycle dates.",
      tags: ["flutter", "firebase"],
      link: null,
      image: "assets/gallery/moonly.jpg",
      imageDark: "assets/gallery/moonly dark.jpeg"
    },
    {
      number: "05",
      year: "2025",
      title: "Buffer 6.0: 2nd Runner-Up",
      summary: "VersionVibe, the version control tool I built with custom data structures.",
      tags: ["competition"],
      link: "assets/buffer6.png",
      image: "assets/gallery/version vibe.jpg",
      imageDark: "assets/gallery/version vibe dark.jpeg"
    },
    {
      number: "06",
      year: "2025",
      title: "GfG 160",
      summary: "160 problems solved on GeeksforGeeks. No streak, just 160 total.",
      tags: ["certificate"],
      link: "assets/gfg160.png",
      image: "assets/gallery/gfg160.jpg",
      imageDark: "assets/gallery/gfg160 dark.jpeg"
    },
    {
      number: "07",
      year: "2024",
      title: "AI Chatbot Rumble",
      summary: "Built a chatbot for an NLP competition.",
      tags: ["competition", "nlp"],
      link: "assets/chatbot.png",
      image: "assets/gallery/chatbot.jpg",
      imageDark: "assets/gallery/chatbot dark.jpeg"
    },
  ],

  timeline: [
    {
      years: "2024 — 2027",
      title: "B.E. Computer Engineering",
      org: "Cummins College of Engineering for Women",
      detail: "Pune · GPA 7.6/10. Final year now. This is where I actually started shipping. VersionVibe, LOOM, Runway all happened here."
    },
    {
      years: "2021 — 2023",
      title: "Diploma, Information Technology",
      org: "Government Polytechnic Pune",
      detail: "Pune · GPA 84.60%. Where I wrote my first real code. Everything after this traces back to it."
    },
    {
      years: "2019 — 2020",
      title: "SSC",
      org: "Karmveer Bhaurao Patil High School",
      detail: "Mokhada · GPA 86.60%."
    },
  ],
about: {
    heading: "More about me",
    paragraphs: [
      `I grew up in Mokhada. Pune is where things picked up speed.`,
      `I love building things my way. It gives me the challenge
      to make them better than what already exists. VersionVibe
      was my first big project. It won a prize. That made me
      want to build more.`,
      `Outside of this, I crochet. Row by row, patient, one mistake
      and you start over. Not that different from debugging,
      honestly.`,
      `Final year now. Open to placements, somewhere I can keep
      building things people actually use.`
    ]
  },

  contact: {
    email: "vrunani.muley@cumminscollege.in",
    phone: "+91 70288 25351",
    linkedin: "https://www.linkedin.com/in/vrunani-muley-99385032a/",
    github: "https://github.com/vrunani",
    intro: "Placements, projects, or just want to say hi. All welcome."
  }

};
