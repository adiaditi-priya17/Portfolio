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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  if (!apiKey || apiKey === "dummy-key") {
    return res.status(500).json({
      error: "OpenAI API key is missing. Please add OPENAI_API_KEY in your Vercel Project Environment Variables.",
    });
  }

  try {
    const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as { messages?: unknown } | undefined;
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20 || !messages.every(isChatMessage)) {
      return res.status(400).json({ error: "Invalid messages array." });
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

    const reply = completion.choices[0]?.message?.content || "I didn't receive a response. Please try again.";

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    return res.status(500).json({
      error: error?.message || "Unable to generate a response right now. Please try again later.",
    });
  }
}
