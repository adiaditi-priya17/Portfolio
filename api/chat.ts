import OpenAI from "openai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const apiKey = process.env.OPENAI_API_KEY || process.env.api_key;
const openai = new OpenAI({
  apiKey: apiKey || "dummy-key",
});

const portfolioInfo = `
You are the personal AI assistant for Aditi Priya's interactive portfolio website.

About Aditi Priya:
- Name: Aditi Priya
- Role: Full-Stack Developer & B.Tech Computer Science & Engineering student at BIT Mesra, Patna (Class of 2023–2027)
- Academic Standing: CGPA 8.95 / 10
- Location: Patna, Bihar, India
- Email: adiaditipriya03@gmail.com
- LinkedIn: https://www.linkedin.com/in/aditi-priya-9a6a382b4/
- GitHub: https://github.com/adiaditi-priya17

Primary Technical Skills:
- Languages: Java, Python, JavaScript
- Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
- Backend & Databases: Node.js, Express.js, MongoDB, Mongoose, SQL
- APIs & Security: RESTful APIs, JWT Authentication, Gemini API
- Decentralized Tech: Solana Devnet
- Tools: Git, GitHub, Vite, VS Code

Featured Projects (Originals):
1. SAFER-AI (2025):
   - Description: Full-stack cross-border payment prototype with AI-assisted transaction risk analysis using the Gemini API and Solana Devnet blockchain simulation & verification.
   - Stack: React.js, Node.js, Express.js, MongoDB, Gemini API, Solana Devnet, Tailwind CSS.
   - GitHub: https://github.com/adiaditi-priya17/SAFER-AI.git

2. HydroNet (2025):
   - Description: Computational hydrology network flow simulation and fluid dynamics modeling built in Python with automated data pipelines and NumPy numerical state evaluation.
   - Stack: Python, NumPy, Computational Modeling, Simulation Pipelines.
   - GitHub: https://github.com/adiaditi-priya17/HydroNet

3. Physics Engine from Scratch (2025):
   - Description: A 2D/3D physics simulation engine engineered entirely from scratch in pure Java with zero third-party physics libraries. Features Euler & Verlet numerical integration, particle dynamics, and impulse-based collision solvers.
   - Stack: Java, OOP, Algorithms, Physics Engine.
   - GitHub: https://github.com/adiaditi-priya17/physics-engine

4. Netflix Homepage Clone (2024):
   - Description: Pixel-faithful, fully responsive Netflix UI recreation with vanilla HTML, CSS & JavaScript.
   - Live Demo: https://netflixclonelearning.vercel.app
   - GitHub: https://github.com/adiaditi-priya17/Netflix-Clone

5. Personal Portfolio Website (2024-2025):
   - Description: Cinematic dark cosmic portfolio (Electric Violet & Cyan) built with React, TypeScript, and Framer Motion.
   - Live Demo: https://aditipriya-portfolio.vercel.app
   - GitHub: https://github.com/adiaditi-priya17/portfolio.git

Experience:
- Digital Marketing Intern at Dixit Global Tech Pvt. Ltd. (July 2025 – January 2026): Managed prospect data with Apollo & Google Sheets, conducted market research with SEMrush, standardized email data with JETCleaner.

Achievements & Certifications:
- Head of Design & Decoration for Technika '24–'25, BIT Mesra Off Campus, Patna (Verified Certificate).
- State Level Pre-Republic Day Parade Selection Camp 2024, NSS Regional Directorate, Patna (Verified Certificate).
- Dixit Global Tech Internship Certificate.

Instructions for your responses:
- Be friendly, enthusiastic, concise, and professional.
- Highlight Aditi's genuine strengths in full-stack engineering, Java, Python, and creative problem-solving.
- If someone asks how to contact her or hire her, provide her email (adiaditipriya03@gmail.com) and LinkedIn.
- Never invent experiences or skills not listed above.
`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.length > 0 &&
    message.content.length <= 4000
  );
}

function getFallbackAnswer(query: string): string {
  const q = query.trim().toLowerCase();
  if (/^(hi|hello|hey|hola|greetings|namaste)\b/i.test(q)) {
    return "Hey there! 👋 I'm Aditi's Portfolio AI Assistant. You can ask me anything about her projects (like SAFER-AI, HydroNet, or the Java Physics Engine), technical skills, BIT Mesra education, or how to contact her!";
  }
  if (/contact|email|hire|reach|phone|call|message|talk|connect|linkedin|github/i.test(q)) {
    return "📬 You can easily connect with Aditi Priya:\n\n• Email: adiaditipriya03@gmail.com\n• LinkedIn: https://www.linkedin.com/in/aditi-priya-9a6a382b4/\n• GitHub: https://github.com/adiaditi-priya17\n• Location: Patna, Bihar, India\n\nFeel free to reach out for opportunities or technical collaborations!";
  }
  if (/hydronet|hydro|hydrolog|fluid/i.test(q)) {
    return "🌊 HydroNet is Aditi's computational modeling project built in Python:\n\n• Core Stack: Python, NumPy, Data Analysis, Simulation Pipelines\n• Purpose: Simulates hydrological network routing, fluid flow dynamics, and system behavior under variable conditions.\n• Features: High-throughput parameter evaluation with NumPy, automated data pipelines, and state diagnostics.\n• GitHub: https://github.com/adiaditi-priya17/HydroNet";
  }
  if (/physics|physics engine|engine from scratch|verlet|euler/i.test(q)) {
    return "⚙️ Physics Engine from Scratch is Aditi's core Java systems project:\n\n• Core Stack: Pure Java, OOP, Numerical Algorithms (zero 3rd-party physics libraries)\n• Features: Custom numerical integration (Euler & Verlet), impulse-based collision detection, and rigid-body mechanics.\n• Architecture: Modular and object-oriented, designed from first principles.\n• GitHub: https://github.com/adiaditi-priya17/physics-engine";
  }
  if (/safer|safer-ai|solana|blockchain|gemini/i.test(q)) {
    return "🛡️ SAFER-AI is Aditi's flagship Full-Stack AI & Web3 project:\n\n• Tech Stack: React.js, Node.js, Express.js, MongoDB, Gemini API, Solana Devnet, Tailwind CSS\n• What it does: Cross-border payment prototype featuring AI-assisted transaction risk analysis via Gemini API and Solana blockchain verification.\n• Highlights: Secure user auth, payment tracking, review workflows, and dual-layer APIs.\n• GitHub: https://github.com/adiaditi-priya17/SAFER-AI.git";
  }
  if (/netflix|clone|streaming/i.test(q)) {
    return "🎬 Netflix Homepage Clone:\n\n• Stack: Vanilla HTML, CSS, and JavaScript\n• Features: Fully responsive across desktop, tablet, and mobile; pixel-faithful recreation of hero banners, movie carousels, and navigation.\n• Live Demo: https://netflixclonelearning.vercel.app\n• GitHub: https://github.com/adiaditi-priya17/Netflix-Clone";
  }
  if (/project|projects|originals|work|built|portfolio website/i.test(q)) {
    return "🚀 Aditi has built 5 featured Originals:\n\n1. SAFER-AI — AI & Solana Blockchain cross-border payments (React, Node, Gemini API, Solana)\n2. HydroNet — Computational hydrology & fluid network modeling in Python with NumPy\n3. Physics Engine — Engineered from scratch in pure Java (zero external libraries)\n4. Netflix Homepage Clone — Pixel-faithful responsive streaming UI (HTML, CSS, JS)\n5. Personal Portfolio — Cinematic dark cosmic portfolio (React, TypeScript, Tailwind, Framer Motion)\n\nAsk me about any specific project for details and code links!";
  }
  if (/education|college|university|bit|mesra|cgpa|marks|grade|school|degree|study/i.test(q)) {
    return "🎓 Education Background:\n\n• College: Birla Institute of Technology (BIT), Mesra, Patna\n• Degree: Bachelor of Technology (B.Tech) in Computer Science & Engineering (2023 – 2027)\n• Academic Standing: CGPA 8.95 / 10\n• Schooling: BPL Residential Public School, Ajwan, Patna — CBSE (82% in Class XII)";
  }
  if (/skill|skills|tech|stack|language|languages|python|java|javascript|react|node|mongo|sql/i.test(q)) {
    return "💻 Aditi's Technical Arsenal:\n\n• Languages: Java (Primary), Python (Computational Modeling), JavaScript (Full-Stack)\n• Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS\n• Backend & DB: Node.js, Express.js, MongoDB, Mongoose, SQL\n• APIs & Security: RESTful APIs, JWT Authentication, Gemini API\n• Blockchain: Solana Devnet\n• Tools & Core: Git, GitHub, Vite, VS Code, DSA, OOP, DBMS, OS, CNS";
  }
  if (/experience|intern|internship|dixit|job|work history/i.test(q)) {
    return "💼 Professional Experience:\n\n• Role: Digital Marketing Intern\n• Company: Dixit Global Tech Pvt. Ltd. (July 2025 – January 2026)\n• Highlights: Managed prospect data and lead generation using Apollo & Google Sheets, conducted market research with SEMrush, standardized email data with JETCleaner, and tracked international bidding opportunities for the Beeking project.";
  }
  if (/achievement|achievements|award|awards|technika|nss|pre-rd|camp|certificate|certifications/i.test(q)) {
    return "🏆 Key Achievements & Certifications:\n\n1. Head of Design & Decoration — Technika '24–'25, BIT Mesra Off Campus, Patna (Official Certificate)\n2. Pre-RD Camp Participant — State Level Pre-Republic Day Parade Selection Camp 2024, NSS Regional Directorate, Patna (Official Certificate)\n3. Digital Marketing Intern Certificate — Dixit Global Tech Pvt. Ltd.\n\nAll verified certificate links are accessible in the 'Top Moments' section of this portfolio!";
  }
  if (/resume|cv|biodata|pdf/i.test(q)) {
    return "📄 Aditi's Resume:\n\nYou can preview or download Aditi's full verified resume using the 'Download Resume' button in the Hero section or the 'Resume' sheet section on this website!";
  }
  return "Aditi Priya is a Full-Stack Developer and B.Tech CSE student at BIT Mesra (CGPA 8.95). She works extensively with Java, Python, React.js, Node.js, and Blockchain. Feel free to ask about her projects (SAFER-AI, HydroNet, Physics Engine), her skills, education, or how to contact her at adiaditipriya03@gmail.com!";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as { messages?: unknown } | undefined;
  const messages = body?.messages;
  const lastUserMsg = Array.isArray(messages) && messages.length > 0 ? (messages[messages.length - 1] as any)?.content : "";

  // If no OpenAI API key is configured on Vercel, answer using intelligent portfolio engine
  if (!apiKey || apiKey === "dummy-key") {
    return res.status(200).json({
      reply: getFallbackAnswer(lastUserMsg || "")
    });
  }

  try {
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20 || !messages.every(isChatMessage)) {
      return res.status(200).json({
        reply: getFallbackAnswer(lastUserMsg || "")
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: portfolioInfo },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: 450,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || getFallbackAnswer(lastUserMsg || "");

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.warn("OpenAI API error, answering with portfolio engine:", error?.message);
    // Graceful fallback: return accurate answer instead of a 500 error that breaks the chat
    return res.status(200).json({
      reply: getFallbackAnswer(lastUserMsg || "")
    });
  }
}
