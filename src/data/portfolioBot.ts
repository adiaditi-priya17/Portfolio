/**
 * Intelligent Portfolio Assistant Knowledge Engine
 * Provides instant, accurate answers about Aditi Priya's skills, projects,
 * education, and experience, both as standalone logic and as a fallback
 * if an external AI API is unavailable or rate-limited.
 */

export function getLocalPortfolioAnswer(query: string): string {
  const q = query.trim().toLowerCase();

  // 1. Greetings
  if (/^(hi|hello|hey|hola|greetings|namaste|sup|yo)\b/i.test(q)) {
    return "Hey there! 👋 I'm Aditi's Portfolio AI Assistant. You can ask me anything about her projects (like SAFER-AI, HydroNet, or the Java Physics Engine), technical skills, BIT Mesra education, or how to contact her!";
  }

  // 2. Contact / Hiring / Email
  if (/contact|email|hire|reach|phone|call|message|talk|connect|linkedin|github/i.test(q)) {
    return "📬 You can easily connect with Aditi Priya:\n\n• Email: adiaditipriya03@gmail.com\n• LinkedIn: https://www.linkedin.com/in/aditi-priya-9a6a382b4/\n• GitHub: https://github.com/adiaditi-priya17\n• Location: Patna, Bihar, India\n\nFeel free to reach out for opportunities or technical collaborations!";
  }

  // 3. HydroNet (Python Project)
  if (/hydronet|hydro|hydrolog|fluid/i.test(q)) {
    return "🌊 HydroNet is Aditi's computational modeling project built in Python:\n\n• Core Stack: Python, NumPy, Data Analysis, Simulation Pipelines\n• Purpose: Simulates hydrological network routing, fluid flow dynamics, and system behavior under variable conditions.\n• Features: High-throughput parameter evaluation with NumPy, automated data pipelines, and state diagnostics.\n• GitHub: https://github.com/adiaditi-priya17/HydroNet";
  }

  // 4. Physics Engine (Java Project)
  if (/physics|physics engine|engine from scratch|verlet|euler/i.test(q)) {
    return "⚙️ Physics Engine from Scratch is Aditi's core Java systems project:\n\n• Core Stack: Pure Java, OOP, Numerical Algorithms (zero 3rd-party physics libraries)\n• Features: Custom numerical integration (Euler & Verlet), impulse-based collision detection, and rigid-body mechanics.\n• Architecture: Modular and object-oriented, designed from first principles.\n• GitHub: https://github.com/adiaditi-priya17/physics-engine";
  }

  // 5. SAFER-AI Project
  if (/safer|safer-ai|solana|blockchain|gemini/i.test(q)) {
    return "🛡️ SAFER-AI is Aditi's flagship Full-Stack AI & Web3 project:\n\n• Tech Stack: React.js, Node.js, Express.js, MongoDB, Gemini API, Solana Devnet, Tailwind CSS\n• What it does: Cross-border payment prototype featuring AI-assisted transaction risk analysis via Gemini API and Solana blockchain verification.\n• Highlights: Secure user auth, payment tracking, review workflows, and dual-layer APIs.\n• GitHub: https://github.com/adiaditi-priya17/SAFER-AI.git";
  }

  // 6. Netflix Clone
  if (/netflix|clone|streaming/i.test(q)) {
    return "🎬 Netflix Homepage Clone:\n\n• Stack: Vanilla HTML, CSS, and JavaScript\n• Features: Fully responsive across desktop, tablet, and mobile; pixel-faithful recreation of hero banners, movie carousels, and navigation.\n• Live Demo: https://netflixclonelearning.vercel.app\n• GitHub: https://github.com/adiaditi-priya17/Netflix-Clone";
  }

  // 7. All Projects Overview
  if (/project|projects|originals|work|built|portfolio website/i.test(q)) {
    return "🚀 Aditi has built 5 featured Originals:\n\n1. SAFER-AI — AI & Solana Blockchain cross-border payments (React, Node, Gemini API, Solana)\n2. HydroNet — Computational hydrology & fluid network modeling in Python with NumPy\n3. Physics Engine — Engineered from scratch in pure Java (zero external libraries)\n4. Netflix Homepage Clone — Pixel-faithful responsive streaming UI (HTML, CSS, JS)\n5. Personal Portfolio — Cinematic dark cosmic portfolio (React, TypeScript, Tailwind, Framer Motion)\n\nAsk me about any specific project for details and code links!";
  }

  // 8. Education / College / CGPA
  if (/education|college|university|bit|mesra|cgpa|marks|grade|school|degree|study/i.test(q)) {
    return "🎓 Education Background:\n\n• College: Birla Institute of Technology (BIT), Mesra, Patna\n• Degree: Bachelor of Technology (B.Tech) in Computer Science & Engineering (2023 – 2027)\n• Academic Standing: CGPA 8.95 / 10\n• Schooling: BPL Residential Public School, Ajwan, Patna — CBSE (82% in Class XII)";
  }

  // 9. Technical Skills
  if (/skill|skills|tech|stack|language|languages|python|java|javascript|react|node|mongo|sql/i.test(q)) {
    return "💻 Aditi's Technical Arsenal:\n\n• Languages: Java (Primary), Python (Computational Modeling), JavaScript (Full-Stack)\n• Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS\n• Backend & DB: Node.js, Express.js, MongoDB, Mongoose, SQL\n• APIs & Security: RESTful APIs, JWT Authentication, Gemini API\n• Blockchain: Solana Devnet\n• Tools & Core: Git, GitHub, Vite, VS Code, DSA, OOP, DBMS, OS, CNS";
  }

  // 10. Experience / Internship
  if (/experience|intern|internship|dixit|job|work history/i.test(q)) {
    return "💼 Professional Experience:\n\n• Role: Digital Marketing Intern\n• Company: Dixit Global Tech Pvt. Ltd. (July 2025 – January 2026)\n• Highlights: Managed prospect data and lead generation using Apollo & Google Sheets, conducted market research with SEMrush, standardized email data with JETCleaner, and tracked international bidding opportunities for the Beeking project.";
  }

  // 11. Achievements & Certifications
  if (/achievement|achievements|award|awards|technika|nss|pre-rd|camp|certificate|certifications/i.test(q)) {
    return "🏆 Key Achievements & Certifications:\n\n1. Head of Design & Decoration — Technika '24–'25, BIT Mesra Off Campus, Patna (Official Certificate)\n2. Pre-RD Camp Participant — State Level Pre-Republic Day Parade Selection Camp 2024, NSS Regional Directorate, Patna (Official Certificate)\n3. Digital Marketing Intern Certificate — Dixit Global Tech Pvt. Ltd.\n\nAll verified certificate links are accessible in the 'Top Moments' section of this portfolio!";
  }

  // 12. Resume
  if (/resume|cv|biodata|pdf/i.test(q)) {
    return "📄 Aditi's Resume:\n\nYou can preview or download Aditi's full verified resume using the 'Download Resume' button in the Hero section or the 'Resume' sheet section on this website!";
  }

  // 13. About / General Bio
  if (/who (are you|is aditi)|about|bio|background|tell me about/i.test(q)) {
    return "✨ Aditi Priya is a Full-Stack Developer and B.Tech CSE student (CGPA 8.95) at BIT Mesra, Patna. She builds high-performance web applications, AI-integrated platforms (SAFER-AI), computational hydrology pipelines in Python (HydroNet), and physics simulation engines from scratch in Java.";
  }

  // Default fallback
  return "Aditi Priya is a Full-Stack Developer and B.Tech CSE student at BIT Mesra (CGPA 8.95). She works extensively with Java, Python, React.js, Node.js, and Blockchain. Feel free to ask about her projects (SAFER-AI, HydroNet, Physics Engine), her skills, education, or how to contact her at adiaditipriya03@gmail.com!";
}
