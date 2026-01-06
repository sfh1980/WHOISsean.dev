---
layout: post
title: "How I Built a Linux Home Lab with Docker and Jellyfin (While Job Hunting): Part II"
description: "Part II of my homelab journey: setting up Nginx reverse proxy, configuring Docker networking, troubleshooting container communication, and learning about network isolation while building a self-hosted media server."
tags: [job search, unemployment, career change, personal projects, homelab, media server, linux, jellyfin, resume building, self-hosted, career development, docker, git, nginx, docker-networking, reverse-proxy, nginx-configuration, container-networking, opnsense]
---

## Where Were We?

In [Part I]({{ "/2025/12/17/how-i-created-my-first-homelab.html" | relative_url }}), I started by acquiring a Dell Inspiron 17 7786 (after buying my wife a new MacBook Air as compensation), then upgraded the hardware by replacing the factory Optane NVMe SSD with a Samsung 990 EVO Plus 1TB SSD, adding 16GB of RAM to bring it up to 32GB total, and planning to replace the problematic Wi-Fi card. After switching the BIOS from RAID On to AHCI, I created a bootable USB drive and successfully installed Ubuntu—though not without some anxiety until I saw that language selection screen. I repurposed an old 1TB HDD for extra storage, which caused a boot loop that I had to fix by reformatting it in recovery mode. Once Ubuntu was stable, I installed Docker and Docker Compose to containerize my services, set up a local Git repository synced with GitHub for version control, and finally got Jellyfin running in a Docker container after wrestling with directory structure issues and learning the hard way that YAML indentation in `docker-compose.yml` really matters (and that I should have written down my admin login credentials). With Jellyfin up and running, it was time to take things to the next level.

## And Now, The Conclusion...But Not Really
<img src="{{ "/assets/images/kirk-but-wait-theres-more-meme.jpeg" | relative_url }}" alt="Kirk meme saying 'But wait, there's more!' - continuing the homelab build journey" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">

### Installing Nginx

I'm trusting a lot of **tried and true** processes with my research and subsequent setup of my homelab, which is why my next step was to install Nginx.

- **What is Nginx?**
    - Do I go technical, or layman? First, and important to many a nerd, it's open source. That means anyone with a wild hare can pull the code and contribute to it. Nginx's core functions include acting as a web server, reverse proxy, and load balancer.
    - Or, think of it as the doorman or receptionist. People come in, the doorman or receptionist verifies who they are and figures out where you're trying to go. If they have business being there, it directs them to their destination. If they don't belong, they're stopped.
    - More in-depth information can be found at the [Nginx website](https://nginx.org/en/).

- **What do I expect Nginx to do with my homelab? How might it scale with my homelab?**
    - Right now, all I have in my homelab is Jellyfin. Later I'll possibly have another personal website, though this time hosted by my homelab instead of GitHub. I'll also be adding my own file cloud so I don't have to use Google Drive or Apple or other cloud services. Nginx will manage all that web traffic for me. It will allow that traffic in through as few ports as possible (ideally just ports 80 and 443 for HTTP and HTTPS) and send it to all the open ports and services running on my server. Instead of remembering that Jellyfin is on port 8096, Nextcloud might be on 8080, and so on, I can set up clean URLs like `jellyfin.mydomain.com` or `files.mydomain.com` that Nginx will route to the correct service behind the scenes. As I add more services, I just add more configuration files to Nginx—it's designed to handle many services from a single instance, so it scales with my homelab without needing to add more infrastructure.

- **Of course there were more opportunities to learn from setting up the Nginx Docker container**

While testing the operability of Jellyfin and Nginx, I found that Nginx appeared to be stuck in some sort of restart loop in Docker, and it couldn't find Jellyfin. Why? Docker DNS only works if the Jellyfin and Nginx containers are on the same Docker network. Sometimes, it appears, trusting the process can leave important things out. Thank all the gods of the bits and bytes for the multitude of resources available—mainly the AI and social media variety. Otherwise, the ***PEBKAC*** (Problem Exists Between Keyboard And Chair) can be strong! I'm not against support communities, but a few bad Stack Overflow experiences turned me away from using those as my first line of defense. 
    - **Let's create a Shared Docker Network!**
        - The shared Docker network allows all containers within that shared network to communicate. For my homelab, as it exists now, it allows Nginx to do its web service magic on Jellyfin. I can now test Jellyfin in my browser by simply accessing it via `localhost` as opposed to `localhost:8096`.

- **EVERY opportunity for learning brings with it another hit to the wallet**

So now we have the shared Docker network created and the containers communicating. We also have further testing. If you've been keeping up with this blog site, you'll remember a mantra I strive to live by when it comes to being a developer: "little code, little test...". I have applied this mantra to creating my homelab as well. I want to ensure every little step I take...
<img src="{{ "/assets/images/every-little-step-i-take.png" | relative_url }}" alt="Meme about testing every step in the homelab build process - little code, little test philosophy" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">

Sorry, anyway. Where was I? Oh yes... every step I take in building my homelab, I test to ensure that every step of the way, everything works. Well, after setting up the shared Docker network and testing Nginx and Jellyfin, part of that test was attempting to access it from a different laptop on my home network. The thing is, my home network in its current state is just a bunch of wireless devices connected to my ISP-provided Wi-Fi router. I tried, got fed up, and gave up looking for a way to disable Client Isolation. Client Isolation prevents my devices connected to the ISP-provided Wi-Fi router from seeing each other. Meaning, my Windows laptop cannot communicate with my Ubuntu laptop. Why is this a hit to my wallet? Further research has convinced me I need another computer so that I can install [OPNsense](https://opnsense.org/) for more control over my home internet and home network. 
<img src="{{ "/assets/images/expensive-hobby.jpg" | relative_url }}" alt="Drake meme about expensive hobbies - homelab projects can get costly" style="max-width: 50%; height: auto; display: block; margin: 1rem 0;">

Let's put some things on the back burner and move forward. So far, everything I've done has been through CLI. I think maybe it's time to add a little simplicity and ease. Let's install some UI! Right?

NOPE! Apparently ChatGPT wants me to update my file structure! My current file/folder structure isn't bad for the time being, but the more I add to my homelab, it will present a lot of future confusion, versioning conflicts, and scaling issues. I've spoken before about how leveraging AI can be amazing. As long as you think outside the box, think long-term, employ critical thinking, and properly use prompt engineering. Or, just keep asking "Why?" Do not simply trust what AI is telling you. It can and will lie, mislead, ***hallucinate***. 

Why should I update my file/folder structure now, as opposed to much later down the road? My homelab setup is in its infancy and much easier to manage. Making structural changes now will help keep versioning clean, meaning security is maintained and unwanted files will not be accidentally committed. Future scaling pain is prevented when additional containers and services are added. If need be, this update will make destroying and rebuilding containers much safer. Addition and management of Kubernetes nodes, NAS storage, and other as-yet-unknown future additions will be easier to set up and maintain. Trust the process, right?

If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).


