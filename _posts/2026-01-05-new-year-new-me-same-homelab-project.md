---
layout: post
title: "So You Want To Build A Homelab In The New Year"
description: "Part III of my homelab journey: setting up Portainer for container management, testing Jellyfin with media files, and planning future homelab expansions."
tags: [job search, unemployment, career change, personal projects, homelab, media server, linux, jellyfin, resume building, self-hosted, career development, docker, git, nginx, docker-networking, reverse-proxy, nginx-configuration, container-networking, portainer, cli, UI, container-management, docker-compose, kubernetes, docker-swarm]
---

## We aren't done yet? A recap for the ages!

I started a homelab project to build skills and strengthen my resume while job hunting. After acquiring my wife's old laptop and updating some internal hardware and configurations, I began the project by migrating from Windows 11 to Ubuntu. Next came installing Docker and Docker Compose, then setting up a local Git repo and synchronizing it with GitHub. After that, I installed and made initial configurations for Jellyfin and Nginx. I encountered numerous hiccups along the way, which is normal when learning new things. Mistakes make lessons mean more. I realized that additional networking will be needed at some point—problems for another day. To further test the operability of Jellyfin, I "found" some media files to see if Jellyfin would play them without issue. Seeing Jellyfin correctly identify metadata with minimal work and play the media files was honestly a rush, seeing some of my hard work show such positive results. 
<img src="{{ "/assets/images/homer-i-did-it.webp" | relative_url }}" alt="Homer Simpson exclaiming I DID IT!!!" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;"> 

## SO MUCH TYPING
### Time to get away from so much CLI and start getting into some UI

My next logical step in this homelab project is to install and configure Portainer. Don't get me wrong, it's good to learn commands and how to navigate CLI, but it's SO TEDIOUS! 
<img src="{{ "/assets/images/homework-jim-carrey.gif" | relative_url }}" alt="gif of Jim Carrey typing" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">

**What is Portainer?**

Click [HERE](https://www.youtube.com/watch?v=jxPUzn409XU) for a brief YouTube breakdown. I know for a little while I'll be relying heavily on these video tutorials to learn what it is and how to use it.

If you watched that, and are not already aware of what Portainer is, you probably still have questions. So, as I understand at this time, Portainer is a UI that simplifies deployment, management, and securing of your containers. It can be used with Docker, Docker Swarm, Kubernetes, and more. I get it, you keep reading and coming across more names than you can keep up with. Welcome to the world of homelabs. As I chug along and learn, I'll put in future blog posts what I learn. Otherwise, you're stuck Googling, YouTubing, TikToking...

## I hate rabbit holes
I think for the foreseeable future, I'm going to continue to:
 - Load media into my file system, which will one day be migrated to some sort of NAS.
 - Research to become more familiar with the three containers that I do have: Jellyfin, Nginx, and Portainer.
 - Research the many ways I can and/or should build out my network so that multiple devices have access to the features I want to build out. I also need to figure out how to stream my Jellyfin content to other devices, both on and off my network.
 - Research the dozens to hundreds of containers I wish to add and play with, hardware required/desired to run these containers on, and all of the things that I cannot possibly fathom at this time as the possibilities are literally endless.

If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).


P.S. I THINK THIS IS THE QUICKEST I'VE PUMPED OUT A BLOG POST! I'M STARTING TO GET GOOD AT THIS!