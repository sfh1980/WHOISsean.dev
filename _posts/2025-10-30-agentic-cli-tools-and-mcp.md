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

## What are “agentic CLI tools”?
Short definition: Tools that let LLMs act as agents—planning steps, reading/writing files, running commands—usually within safe constraints.

Examples we’ll touch on: Q CLI, Cursor, GitHub Copilot CLI, Warp AI.

## Cursor: my primary agentic tool
What I use it for:
- Understanding unfamiliar codebases
- Planning multi-file edits with previews
- Generating tests and docs alongside changes
- Iterative “code a little, test, document” cycles

Practical notes:
- Keep diffs small and review every hunk
- Ask Cursor to explain risks and add guardrails
- Re-run tests immediately after edits

## MCP servers (Model Context Protocol)
What MCP is: a protocol to expose contextual data/tools to models in a consistent, secure way.

Why it matters:
- Consistent interfaces across tools
- Clear permissions and auditable actions
- Easier to compose capabilities (e.g., repo context + issue tracker + build logs)

Mental model:
- Client (LLM tool) ↔ MCP server(s) ↔ resources/capabilities
- The client requests capabilities; the server returns structured results

## Practical examples
1) Repo-wide refactor with plan-and-review
2) Add feature flag with edits + unit tests
3) Content update workflow (this blog): plan → scaffold → publish

For each, I: define goal → ask for plan → apply minimal edits → run locally → commit → push → verify Pages build.

## Getting started (your own setup)
1) Pick a tool: Cursor or Copilot CLI
2) Start with a small task and a throwaway branch
3) Enforce tiny diffs and mandatory test runs
4) Log decisions in README/CHANGELOG

## Pitfalls and guardrails
- Over-trusting generated changes → always review diffs
- Leaking secrets in prompts → scrub logs; use env var redaction
- Big-bang refactors → prefer incremental, testable steps

## What I learned
- Agentic tools are accelerators, not autopilots
- MCP helps separate “capability exposure” from “model reasoning”
- Best results come from tight feedback loops: plan → run → verify

## Closing
This post will evolve as I add concrete demos and screenshots from this project. Next up: short clips of Cursor planning and applying edits for this blog, plus an MCP example.


