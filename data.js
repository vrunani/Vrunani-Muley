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
    headline: "I build software and ship it myself.",
    sub: `Computer engineering student in Pune. I've built a phone app,
    an exam platform, a text editor with its own undo history, and a
    pipeline that pushes code live on its own. Everything below is
    real and working right now.`,
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

  work: [
    {
      tag: "loom",
      title: "LOOM",
      role: "Personal project · Flutter, Firebase, Groq API",
      description: `LOOM brings five productivity tools into one phone app —
      tasks, habits, mood, notes, and screen time. Every week it uses AI to
      read all that data and write a simple wellness report as a PDF. It
      also has a hands-free voice assistant. Ten people tested it before
      it went live, and I fixed the storage bugs they found.`,
      tags: ["flutter", "firebase", "groq api", "pdf"],
      link: "https://github.com/vrunani/loom"
    },
    {
      tag: "versionvibe",
      title: "VersionVibe",
      role: "Java desktop app · Java Swing, custom data structure",
      description: `A text editor, built from scratch in Java, that works
      like Git for your writing — it saves every version so you can undo,
      redo, or jump back in time, even down different branches. No
      outside libraries, just a tree structure I designed myself. Won
      2nd place at the Buffer 6.0 Data Structures Challenge.`,
      tags: ["java", "java swing", "sha-1"],
      link: "https://github.com/vrunani/Buffer-6.0"
    },
    {
      tag: "quizely",
      title: "Quizely",
      role: "Web app · Spring Boot, MySQL",
      description: `An exam platform that grades itself while students
      wait. It saves answers automatically as students type, grades
      multiple-choice questions on its own, and shows teachers exactly
      how each student and each question performed. Runs on a 6-table
      database and is live on the web right now.`,
      tags: ["java", "spring boot", "mysql"],
      link: "https://quize-181s.onrender.com/"
    },
    {
      tag: "ci-cd",
      title: "CI/CD Pipeline",
      role: "DevOps project · Docker, Jenkins, GitHub Actions",
      description: `A weather app with a pipeline behind it: every push
      gets tested, packaged into a Docker image, and put live on the
      internet automatically — no manual steps. From typing code to it
      being live takes about 3 minutes.`,
      tags: ["docker", "jenkins", "github actions", "nginx"],
      link: "https://weather-dashboard-devops-igew.onrender.com/"
    },
  ],

  gallery: [
    {
      number: "01",
      year: "2026",
      title: "Algorithm Visualizer",
      summary: "Watch sorting, search, and trees run one step at a time.",
      tags: ["html", "css", "javascript"],
      link: "https://github.com/vrunani/AlgoVizz"
    },
    {
      number: "02",
      year: "2025",
      title: "Buffer 6.0 — 2nd Runner-Up",
      summary: "Custom Data Structures Challenge, for VersionVibe.",
      tags: ["competition"],
      link: null
    },
    {
      number: "03",
      year: "2025",
      title: "GfG 160",
      summary: "160 straight days of solving problems on GeeksforGeeks.",
      tags: ["certificate"],
      link: null
    },
    {
      number: "04",
      year: "2024",
      title: "AI Chatbot Rumble",
      summary: "Built a chatbot for an NLP competition.",
      tags: ["competition", "nlp"],
      link: null
    },
  ],

  timeline: [
    {
      years: "2024 — 2027",
      title: "B.E. Computer Engineering",
      org: "Cummins College of Engineering for Women",
      detail: "Pune · GPA 7.6 / 10. Still studying — this is where LOOM, VersionVibe, and the CI/CD pipeline all got built."
    },
    {
      years: "2021 — 2023",
      title: "Diploma, Information Technology",
      org: "Government Polytechnic Pune",
      detail: "Pune · GPA 84.60%. Where I first started writing real code."
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
      `I've built across mobile (LOOM), desktop tools (VersionVibe),
      web platforms (Quizely), and DevOps (the CI/CD pipeline) —
      picking up a fairly wide toolbox along the way, from AI/LLM
      integration to cloud and CI/CD.`,
      `Right now I'm looking for a software engineering internship —
      somewhere I can keep building things people actually use.`
    ]
  },

  contact: {
    email: "vrunani.muley@cumminscollege.in",
    phone: "+91 70288 25351",
    linkedin: "https://www.linkedin.com/in/vrunani-muley-99385032a/",
    github: "https://github.com/vrunani",
    intro: "Internships, projects, or just want to say hi — all welcome."
  }

};
