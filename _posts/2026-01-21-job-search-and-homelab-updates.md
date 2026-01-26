---
layout: post
title: "Updates: Life, Homelabs, Job Searches... The Whole Nine..."
description: "Part IV of my homelab journey: setting up dnsmasq, Dozzle and cAdvisor. And other updates and lessons learned."
tags: [job search, unemployment, career change, personal projects, homelab, media server, linux, jellyfin, resume building, self-hosted, career development, docker, git, nginx, docker-networking, reverse-proxy, nginx-configuration, container-networking, portainer, cli, UI, container-management, docker-compose, kubernetes, docker-swarm, dozzle, cadvisor, monitoring, dnsmasq, opnsense, truenas, truenas-scale, dell-optiplex, plex, immich, networking, security-stack, monitoring-stack, file-system-stack, job-interview]
---

## Where We've Been: A Quick Catch-Up

After losing my first job as a Junior Developer due to company restructuring, I found myself back in the job search trenches—applying for unemployment, reaching out to my network, and submitting applications like it's a full-time hobby. To stay productive and build skills while job hunting, I decided to build a homelab media server. I acquired my wife's old Dell Inspiron 17 7786 (she got a new MacBook Air as compensation), upgraded the hardware by replacing the Optane NVMe SSD with a Samsung 990 EVO Plus 1TB SSD, added 16GB of RAM to bring it up to 32GB total, and migrated from Windows 11 to Ubuntu. After wrestling with BIOS settings (switching from RAID On to AHCI), creating a bootable USB, and fixing a boot loop caused by a repurposed 1TB HDD, I installed Docker and Docker Compose, set up a local Git repository synced with GitHub, and finally got Jellyfin running in a Docker container—though not without learning the hard way that YAML indentation really matters and that I should write down my admin credentials.

In [Part II]({{ "/2025/12/29/how-i-created-my-first-homelab-part-2.html" | relative_url }}), I installed Nginx as a reverse proxy to manage web traffic and scale with future services, but hit a Docker networking issue where Nginx couldn't find Jellyfin because containers need to be on the same Docker network. After creating a shared Docker network, I discovered Client Isolation on my ISP-provided router prevents devices from communicating with each other, which led me to realize I'll eventually need OPNsense for better network control (another hit to the wallet). Before adding a UI, I reorganized my file structure based on AI guidance to prevent future versioning conflicts and scaling issues. In [Part III]({{ "/2026/01/05/new-year-new-me-same-homelab-project.html" | relative_url }}), I installed Portainer to escape the CLI tedium and tested Jellyfin with some "found" media files—seeing it correctly identify metadata and play the files was honestly a rush, a moment where all the hard work paid off. Now it's time to keep building.

<img src="{{ "/assets/images/im-tired-of-this-grandpa.png" | relative_url }}" alt="I'm tired of this grandpa! That's too damn bad!" style="max-width: 15%; height: auto; display: block; margin: 1rem 0;">

## What We're Doing Now

After installing Portainer and attempting to use it, as well as attempting to read docs and watch YouTube videos about it, I figured out that for the time being, it's going to be best I stick with adding and configuring containers through the terminal. Portainer does A LOT, but I just don't have the bandwidth to put that much of a pause on the progression of my homelab build. 

As these blog posts continue, if you keep up, you'll notice slight progressive changes. This is due to me learning new information and applying new skills. For instance, thinking of my homelab in stacks. Today I'll talk about a Security Stack, Monitoring Stack, and File System Stack.

### The Security Stack

Before figuring out that cash flow was not keeping up with my lofty ambitions, I started down a rabbit hole of security, as you see above in the Catch-Up. I still want to put OPNsense to good use, but the hardware required (or perhaps desired is the more suitable word) to install it on is not cheap. And before making this realization, I deployed dnsmasq. I tried to configure it to be used in the homelab as well and figured out that for right now, it's just not working. I continue to deploy containers and set them up to be used by dnsmasq, but their configurations are not live.

In layman's terms and at a surface level, OPNsense, dnsmasq, and nginx sort of complete the security stack of my homelab.
    - OPNsense acts as a gatekeeper and defender. Out of the MANY ports that could be open in any network, OPNsense makes it so only one is open and it directs traffic it deems safe through that one open port straight to the correct container with the help of Nginx.
    - Nginx takes the incoming traffic, such as when a user types a domain name, from OPNsense and uses server blocks you have configured, then directs that traffic once inside your network.
    - dnsmasq assigns your containers IP addresses and maps a hostname to that IP address to help Nginx direct traffic.

### The Monitoring Stack

Another important aspect of building a homelab is monitoring it from every end to ensure it's working optimally. To start this stack out, I deployed Dozzle and cAdvisor. These will not be the last monitoring applications deployed in my homelab, but starting points. 

- Dozzle displays logs collected from running containers in real-time to a web page. It uses a Docker API to obtain these logs. Dozzle does not archive these logs, only showing real-time logs. 

- cAdvisor acts as an agent that discovers every container and collects metrics. It can track CPU usage, memory utilization, network statistics, filesystem usage... Raw metrics are gathered from the Linux kernel and sent to a web endpoint that other tools can read and display. 

Later additions to my homelab will be tools that will take logs and metrics and store them in databases, which means installing databases and setting up schemas will be in my future as well. 

### The File System Stack

I had a general idea of what I thought I wanted my homelab to look like. As I continue to build it out, and learn more, the homelab changes a little more. The first iteration of a file system was just an extra 1TB NVMe drive in a laptop. We all know that would never be a sustainable long-term solution. So I bought a used Dell Optiplex 7050 from Facebook Marketplace for $125. It came with 32GB RAM and a single 1TB SSD. A great start by any measure, but not enough. Once I figured that I was going to use this as my File System server, I popped in a 256 GB SSD to hold the TrueNAS Scale OS. I ordered an adapter and cables to take the original SSD and use that as extra storage. I'll also be ordering a dual NVMe adapter to plug into the PCIe slot as well as pop in an additional NVMe in the onboard M.2 slot. This will go a little slowly as prices for storage are NOT cheap. All of that covers the physical and management layers of the File System Stack. 

The application layer of my File System Stack is Jellyfin, and will be other applications such as Immich. And hopefully, with money and hardware provided, a backup layer at some point.

When setting up the Dell Optiplex with TrueNAS Scale, I learned that it had to be physically connected to my network as there is no option for wireless connectivity. Which I think the universe was kind of telling me anyway, given that the Dell Optiplex does not have a wireless card installed. I attempted connecting a USB Wi-Fi dongle before learning TrueNAS only works over physical communication to the network. Good thing I had some old TP-Link extenders that have ethernet ports. Oh, and PLENTY of extra ethernet cable. BUT... connecting the TP-Link extender presented an issue to other devices on my home network, namely my wife's iPhone and MacBook. They kept giving messages that the network wasn't safe. To fix that, I had to learn that there was a web UI for the TP-Link extender that I had never used before. I had to use that web UI to reconfigure security settings. Look at that, so much learning. 

Anywho, that's where we're at right now. Though I am thinking of swapping Jellyfin for Plex. There is SO much more support for and access to Plex. Trying to get Jellyfin on my smart TVs is going to be difficult to impossible. 

## Job Search Updates

I've been putting in resumes and applications every week. Sometimes I'll get an automatic reply stating it's been received. Mostly, any response from prospective employers stops there. Rarely I'll get a rejection email. Believe it or not, I actually appreciate those. Tells me SOMEBODY took time out of their day. Perhaps not much, but it's more than an auto computer-generated response. I actually had an initial phone interview last week. I'm supposed to have a follow-up interview sometime this week that has me terrified if I'm being honest. But fingers crossed either way.

If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).