---
layout: post
title: "Agentic CLI Tools and MCP Servers: How I Use Cursor and What I Learned"
description: "A practical guide to agentic CLI tools (Cursor, Q CLI, Copilot CLI, Warp) and Model Context Protocol (MCP) servers—what they are, how they work, and how I use them in real projects."
tags: [agentic, cli, mcp, cursor, devtools]
---

## Why this post
This is a required hackathon post (lol). I’ll share what agentic CLI tools are, how MCP servers fit in, and how I’ve used Cursor in real-world development.

## TL;DR
- Agentic CLI tools help automate planning and coding from the command line/editor.
- MCP servers standardize how tools expose context/capabilities to models.
- My workflow: prompt → plan → edits → run → iterate, with safety checks.

## What are "agentic CLI tools"?
Short definition: Tools that let LLMs act as agents—planning steps, reading/writing files, running commands—usually within safe constraints.

- **What is an LLM?** It stands for Large Language Model. It's a relatively new form of AI built to understand and generate text in a way that's readily understandable to humans without needing further interpretation. LLMs are trained by consuming large amounts of data from many sources.
- **What are agents?** Intelligent systems that leverage LLMs to understand, reason, and make decisions based on input from users. 

### Examples of agentic tools

Q CLI, Cursor, GitHub Copilot CLI:

- **Q CLI** was created by Amazon Web Services (AWS)
- **Cursor** is my currently preferred agentic tool. It was founded in 2022 by San Francisco startup Anysphere, Inc.
- **GitHub Copilot** runs on OpenAI's Codex or GPT-4 models that Microsoft licenses through a partnership with OpenAI. There are similarities with ChatGPT as well.

## Why is Cursor my primary agentic tool?
When making the career change from Help Desk to Developer, and in talking to other developers, I was introduced to Cursor. I had already been using ChatGPT in a Jr Developer role. At the time I found Cursor to be a beautiful and masterful blend of VS Code and ChatGPT. 
What I use it for:
- Literally **everything** I can to make my job easier!
- Planning multi-file edits with previews
- Generating tests and docs alongside code changes
- Iterative "code a little, test, document" cycles

What I learned in using agentic tools:
- Agents will do **EXACTLY** what you tell them to do, so your prompts must be clear and **concise**.
- Agents can also assume or "hallucinate"! This means they produce output that might sound plausible, but not quite what you want. A hallucination can be factually incorrect, outright fabricated, or logically inconsistent. It will try to predict what you want from patterns analyzed by any number of sources, including your own chat history. So again, you must be clear and **concise** with your prompts.
- To go along with a lesson I learned in coding bootcamp, it helps to code a little and test, code a little and test, then document. This **way** you have more control over the code and its potential bugginess.
- To keep the flow of development smooth, when I couldn't offer a clear and specific prompt, I provided what I could and then directed the agent to ask me questions before creating or refactoring code.
- It was also incredibly helpful to direct the agent to not auto-refactor after it analyzed my prompt, but rather only respond in the chat. Sometimes when the agent auto-refactors, you can lose **sight** of your work very quickly. 

<img src="{{ "/assets/images/cursor-example-screenshot-1.png" | relative_url }}" alt="Cursor interface example" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">
*This is what this hackathon project looks like in my Cursor IDE*

## Here is an example of the Cursor chat agent in action

<div class="video-thumbnail-container" data-video-src="{{ "/assets/videos/cursor-chat-agent-example.mp4" | relative_url }}" role="button" tabindex="0" aria-label="Play video: Cursor chat agent example">
  <div class="video-thumbnail-placeholder">
    <div class="play-button-overlay">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
    <p class="video-thumbnail-label">Click to play video</p>
  </div>
</div>
*Short clip showing Cursor's chat agent helping me understand the codebase structure*

## MCP and MCP servers (Model Context Protocol)
MCP is a protocol to expose contextual data/tools to models in a consistent, secure way.

- **What does "expose" mean in this context?** Essentially, it allows agentic tools to access, view, and use data.

MCP emerged from the OpenAI ecosystem.

**MCP servers** are not actual servers but rather background programs. They act as translators between AI and other data or resources.

MCP servers, for example, can expose:
- Your file system to allow AI to read/edit files
- A database to query tables
- A web API to fetch real-time data
- A development tool like Docker or Git


<img src="{{ "/assets/images/simple-mcp-diagram.png" | relative_url }}" alt="MCP architecture diagram" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">
*Simple diagram of how MCP servers work - client ↔ server ↔ resources*


If you're curious about any specific part of my Cursor workflow or want to share your own experiences, drop a comment below!


