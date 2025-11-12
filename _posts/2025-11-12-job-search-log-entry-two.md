---
layout: post
title: "Job Search Log Entry Two: My First Steps After Becoming Unemployed Again"
description: "After being let go from Richmond Ambulance Authority, I built a Python-based Emergency Services Simulation Platform inspired by the applications I worked on while I was still there in order to grow my skills and add to my portfolio."
tags: [job-search, unemployed, log-entry, tech, personal-project, career-change, junior-developer, prompt-engineering, python, flask, react, sql-server, mongodb, full-stack, portfolio, agentic-cli-tool]
---

## Don't Sit On Your Laurels In The Face Of Adversity: Just Keep Swimming

### First We Cry, Then We Get To Work

While the news wasn’t entirely unexpected, learning about my upcoming job transition was still difficult to process.
> "What am I going to do now?" 
> "Will my wife be disappointed in me?" 
> "Will I lose my house and be forced out on to the streets?"

So many anxious thoughts hit me all at once—so many questions, so many things to fix or prepare for. The shock took a bit to wear off, but once it did, I got to work. I updated my résumé, refreshed my online profiles, reached out to people in my network, and started planning my next steps.

My first role at **Richmond Ambulance Authority** was all about modernizing an existing production app. I took the lead in refactoring and migrating a legacy **Visual Basic** system over to **C#**, layering on modern tools and technologies. I became very proud of the work I created and was honored to contribute to such a noble industry that works diligently every day to save lives. With that experience still fresh in my mind, I decided to take on a similar project of my own—only this time, building it in **Python**. The application in question operated in real time, supporting the **management, tracking, and coordination** of ambulances, field medics, and supervisors... and so much more.

---

### Let's Get Started

Because I still consider myself a **junior developer** and not quite ready to open an IDE and start coding blindly, I use tools like **ChatGPT** and the **Cursor IDE**. While I have a reliance on agentic CLI tools, I don’t have full trust in them. I try to lean on something I was taught that has never left my mind: 
> "Little code, test. Little code, test."
With that mindset, I trained Cursor’s AI to make the experience of building this project educational. I also trained it not to auto-refactor or auto-code everything. I wanted to expand my knowledge with every keystroke and line of code. 
Below are a few examples of how I applied **prompt engineering** to achieve that goal:
<div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0;">
  <img src="{{ "/assets/images/agent-prompt-example-one.png" | relative_url }}" alt="Prompt example: Database-aware ID lesson" style="flex: 1 1 200px; max-width: 22%; min-width: 180px; height: auto; border-radius: 8px;">
  <img src="{{ "/assets/images/agent-prompt-example-two.png" | relative_url }}" alt="Prompt example: Realistic timer request" style="flex: 1 1 200px; max-width: 22%; min-width: 180px; height: auto; border-radius: 8px;">
  <img src="{{ "/assets/images/agent-prompt-example-three.png" | relative_url }}" alt="Prompt example: Leaflet explanation without refactor" style="flex: 1 1 200px; max-width: 22%; min-width: 180px; height: auto; border-radius: 8px;">
  <img src="{{ "/assets/images/agent-prompt-example-four.png" | relative_url }}" alt="Prompt example: Incident modal spec-driven guidance" style="flex: 1 1 200px; max-width: 22%; min-width: 180px; height: auto; border-radius: 8px;">
</div>

---

### What Is Emergency Services Simulation Platform?

The **Emergency Services Simulation Platform** is my full-stack EMS operations dashboard, built to mirror how **Richmond, Virginia** manages 911 calls in real time.

Each simulated incident follows the full workflow:
- **Priority-coded dispatches**
- **Unit movements** across the city map  
- **Crew rosters** with certifications and shifts  
- **End-of-call handoffs** with narrative notes  

The dashboard tracks who’s on duty, how long units spend at each stage, whether patients were transported, and even surfaces the crew’s **narrative documentation**—so it feels like you’re peeking into a live CAD system on a busy night.

Before touching the UI, I focused on the **data backbone**. There are six Python generators:
1. `incidents`  
2. `units`  
3. `crews`  
4. `hospitals`  
5. `provider_notes`  
6. `master_orchestrator`  

They collaborate to produce a believable feed. **Faker** generates realistic names, timestamps, coordinates, and vitals, while my custom logic handles EMS-specific timelines: who gets dispatched, how priorities escalate, and how long a rig stays en route or on scene. Each run seeds both **SQL Server** (structured reporting) and **MongoDB** (narrative and real-time streams), enabling the dashboard to mimic an operational CAD environment.

---

### 🎥 Demo

<div class="video-thumbnail-container" data-video-src="{{ "/assets/videos/emergency-sim-demo.mp4" | relative_url }}" role="button" tabindex="0" aria-label="Play video: Emergency simulation demo">
  <div class="video-thumbnail-placeholder">
    <div class="play-button-overlay">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
    <p class="video-thumbnail-label">Click to play demo</p>
  </div>
</div>
*A quick walkthrough of the Emergency Services Simulation Platform in action*

### Let's Talk Specifics

#### 🧠 Tech Stack
- **Backend:** Python 3.10+ with Flask exposing RESTful endpoints  
- **Databases:** SQL Server Express (structured ops tables) + MongoDB Community (narratives and streams)  
- **Data access:** `pyodbc`, `pymongo`  
- **Automation:** PowerShell for local orchestration  
- **Frontend:** TypeScript + React with modular SCSS/CSS  
- **Deployment:** Simple HTML wrapper for painless GitHub Pages or PaaS deployment  
- **Source:** [GitHub Repository →](https://github.com/sfh1980/emergency-sim-project)

#### ⚙️ Best Practices
- Clear **separation of concerns** (generators → API → UI)  
- Explicit **REST resource routing**  
- Dual-database design inspired by **real CAD systems**  
- **100% test coverage** across generators, database connectivity, and API endpoints  
- Responsive, accessible **UI** with analytics hooks (Lighthouse/GA-ready)  
- Continuous documentation via `docs/PROJECT_DIARY.md`, tracking milestones and validation steps  

This project serves as **portfolio evidence** that I can plan, build, test, and document a production-grade EMS platform end-to-end.