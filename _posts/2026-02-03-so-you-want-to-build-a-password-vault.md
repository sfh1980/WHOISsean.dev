---
layout: post
title: "When Life Gives You Lemons, Throw Them At People"
description: "Part V of my homelab journey: When you run into a roadblock, PIVOT!"
tags: [job search, unemployment, career change, personal projects, homelab, media server, linux, jellyfin, resume building, self-hosted, career development, docker, git, nginx, docker-networking, reverse-proxy, nginx-configuration, container-networking, portainer, cli, UI, container-management, docker-compose, kubernetes, docker-swarm, dozzle, cadvisor, monitoring, dnsmasq, opnsense, truenas, truenas-scale, dell-optiplex, plex, immich, networking, security-stack, monitoring-stack, file-system-stack, snowmageddon, pivot, python, password-vault, dont-stop]
---

**Where we left off:** Job search is ongoing—applications every week, mostly silence, with an initial phone interview and a nerve-wracking follow-up on the horizon. On the homelab side, I’d deployed dnsmasq (not fully live yet), Dozzle and cAdvisor for monitoring, and picked up a used Dell Optiplex 7050 to run TrueNAS Scale as the file-system server. I’d also decided to stick with the CLI for adding containers instead of diving deeper into Portainer, and was weighing a switch from Jellyfin to Plex for better TV support. Security (OPNsense) and storage expansion are still on the list, but cash flow is still tight. 

<img src="{{ "/assets/images/todays-episode-is-brought-to-you-by.jpg" | relative_url }}" alt="Today's episode is brought to you by the letters WTF" style="max-width: 15%; height: auto; display: block; margin: 1rem 0;">

**And now, on today's episode:** When Snowmageddon stops the US Postal Service in its tracks from delivering an internal hard-drive mounting kit adapter that lets me install two 2.5-inch drives in a 3.5-inch bay—and thus pauses my homelab progress—what was I to do with the downtime? Say it with me: "BUILD A PERSONAL PASSWORD VAULT APPLICATION"!

Not only build a password vault application, but use Agentic AI to help me do it! And to increase the difficulty level, I mean "learn new skills", I'm doing all of this on my Ubuntu laptop. Then I'm going to deploy it using Docker in my homelab. The goal is to make it accessible for both my wife and me on iOS, Windows, Linux, and mobile devices. While Kiro seems like a well made Agentic AI IDE, I still have to say I'm smitten by Cursor. Or perhaps I'm just more familiar with Cursor, so I'm going to continue using it as my preferred IDE.

For a rundown of my current progress, and evidence that it's been a long day because this blog post is missing a lot of the expected zhuzh I usually gift readers of my blog, check out my [github repo](https://github.com/sfh1980/password-vault-app).

It will show how I'm utilizing and leveraging AI to help me build my application per my specs, wants, and needs. Pay close attention to the .cursor/rules directory and its contents. 

And as always... If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).

