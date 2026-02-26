---
layout: post
title: "Shouldn't Hobbies Be Cheap And Fun?"
description: "Part VII of my homelab journey: Homelabbing is not a cheap hobby!"
tags: [job search, unemployment, homelab, media server, linux, jellyfin, docker, truenas, truenas-scale, dell-optiplex, NAS, self-hosted, resume building, OPNsense, network-topology, virtualization, Immich, networking]
---

## Recap

- was let go from my job in October
- signed up for unemployment
- started job hunting, keeping up with LinkedIn and resumes and applications...
- received a few rejections, which is better than being ghosted altogether
- restarted some python tutorial courses
- worked on a few projects (EMT simulation app that provides real-time data for an Emergency Management app, a life coach app for young adults and adults with mental health disabilities)
- started a homelab to fill time and add skills to the resume
    - swapped Windows for Ubuntu in a Dell laptop
    - installed Docker, Docker Compose, deployed: Nginx, Portainer, dnsmasq, Dozzle, cAdvisor, Jellyfin, Immich
    - bought Dell Optiplex and turned it into a NAS
    - chose Usenet over torrenting
    - installed ARR stack, signed up for providers and indexers to work with Usenet

## I honestly don't know why I keep this blog going.

If I get views on this blog at all, it's probably only a dedicated handful. Maybe at some point I'll pivot this blog into something else, I paid for the domain for a year. 

Job hunting can feel a bit like psychological warfare. Especially in the corporate and political climates of 2026. Not to mention the constant conversation about AI and how it will take over so many industries, significantly increasing what automation did starting in the late 80s.

Anywho, I still continue to submit applications and collect unemployment. Let's hope I find a sweet spot in everything happening in the world and find myself gainfully employed again soon.

## Enough of the "poor pitiful me" stuff

So this is an approximation of the topology of my homelab in its current state. *(Click to view full size)*

<a href="{{ "/assets/images/home-net-topology.png" | relative_url }}" class="glightbox" data-glightbox="title: Current homelab topology" data-gallery="topology">
  <img src="{{ "/assets/images/home-net-topology.png" | relative_url }}" alt="Topology of my current homelab setup" style="max-width: 100%; max-height: 400px; width: auto; height: auto; display: block; margin: 1rem 0; cursor: pointer; border-radius: 4px; border: 1px solid #ddd;">
</a>

Much like any other hobby that one dedicates time and love to, money is always soon to follow. Previous blog posts show I was considering purchasing a whole separate machine to load OPNsense on. I came up with an alternative once I moved my NAS and its peripherals to a media cubby downstairs in my living room.
<img src="{{ "/assets/images/homelab-cubby-rack.jpg" | relative_url }}" alt="Homelab Cubby Rack" style="max-width: 30%; height: auto; display: block; margin: 1rem 0;">

I feel like a few things should be mentioned to describe the mess, starting with the monitor. That monitor was surgically removed from a laptop screen extender I bought, only to find it did not extend wide enough for my HP laptop. It is powered by the USB-C cable coming from the front of the Optiplex NAS server. The rest, I imagine, looks pretty self-explanatory. 

## Ideas for the future

The proposed alternative to a physical PC with OPNsense loaded will be to find, purchase, and install a low-profile, dual-port PCIe NIC. I have to be careful to pick the best one to work with the Debian Linux kernel TrueNAS Scale is based on. And of course checking BIOS compatibility and everything else as well, such as additional fans for increased heat. 

With the additional dual-port NIC, and the fact the NAS has an as-yet-unused 1TB internal SSD, I will use TrueNAS to create a separate pool. Then I will create a VM to install a virtual instance of OPNsense. Theoretically, it will not operate inline with the rest of the network. This is the proposed topology once all is said and hopefully done. *(Click to view full size)*

<a href="{{ "/assets/images/proposed-network-topology.png" | relative_url }}" class="glightbox" data-glightbox="title: Proposed homelab topology after OPNsense in a VM" data-gallery="topology">
  <img src="{{ "/assets/images/proposed-network-topology.png" | relative_url }}" alt="Proposed topology of my homelab after OPNsense is installed in a VM in TrueNAS" style="max-width: 100%; max-height: 400px; width: auto; height: auto; display: block; margin: 1rem 0; cursor: pointer; border-radius: 4px; border: 1px solid #ddd;">
</a>

And even after all that is complete, or maybe before, who knows, I'll finish the setup for Immich to allow access outside of my network. As well as setting up a homelab equivalent of Spotify. I don't think I'll ever be done with adding to and taking away from this homelab. I suppose therein lies the fun. Now if it were just cheaper. But I guess cost would be much less important if I were employed.

Anywho, as always...
If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).
