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
    cta: { label: "see the work", href: "#work" }
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
  work: [
    {
      type: "personal project",
      title: "VersionVibe",
      description: `I built this text editor from scratch in Java.
      It works like Git, but for your writing. Every change gets
      saved, so you can undo, redo, or hop back to an old version,
      even down a different branch. No libraries, just a tree
      structure I worked out myself. Placed 2nd at the Buffer 6.0
      Data Structures Challenge.`,
      tags: ["java", "java swing", "sha-1"],
      link: "https://github.com/vrunani/Buffer-6.0"
    },
    {
      type: "personal project",
      title: "Runway",
      description: `During placement season I got sick of a messy
      spreadsheet, so I built Runway. It tracks every application,
      tells me if I'm even eligible based on my CGPA, and turns the
      whole season into charts I can actually read. I still use it,
      daily.`,
      tags: ["firebase", "vercel", "claude api"],
      link: "PASTE_RUNWAY_LINK_HERE"
    },
    {
      type: "personal project",
      title: "LOOM",
      description: `LOOM pulls five things I used to track
      separately into one app: tasks, habits, mood, notes, screen
      time. Once a week it looks at all that data and writes me
      a wellness report as a PDF. There's a hands-free voice
      assistant too. Ten people tested it before launch, and I went
      back and fixed the storage bugs they ran into.`,
      tags: ["flutter", "firebase", "groq api", "pdf"],
      link: "https://github.com/vrunani/loom"
    },
    {
      type: "automation",
      title: "Email-to-Telegram Notifier",
      description: `This one watches my inbox for placement and
      college emails and pings my phone with an AI-written summary
      the second one lands. No laptop, no server on my end. It
      runs on GitHub's free infrastructure, checking every 5
      minutes.`,
      tags: ["github actions", "gmail api", "ai summarization"],
      link: "https://github.com/vrunani/email-notifier"
    },
    {
      type: "desktop app",
      title: "StickyTasks",
      description: `I wanted a sticky note that stays on my desktop
      and stays out of the way. So I built StickyTasks. There are
      no forms and no buttons. You click the blank line, type, and
      press Enter. Tick a task and confetti pops. Finished tasks
      delete themselves after a day or a week. It works fully
      offline, with reminders, five themes and a floating bubble
      mode. It ships as a proper Windows installer.`,
      tags: ["electron", "react", "sqlite"],
      link: "PASTE_STICKYTASKS_LINK_HERE"
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
      `I like understanding how something works before I build on it.
      That's probably why I still write things from scratch instead
      of reaching for a library. LOOM taught me the real work isn't
      the code. It's watching someone use it wrong, then figuring
      out why.`,
      `Outside of this, I crochet. Row by row, patient, one mistake
      and you start over. Not that different from debugging,
      honestly. Most evenings end with my dog, not a screen.`,
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
