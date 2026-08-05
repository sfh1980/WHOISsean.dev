---
layout: post
title: "I Built a Thing. It's Live. Let's Talk About It."
description: "Yum4Less is on the public internet now — yum4less.com, homelab-hosted, estimate-honest, and still somehow a dinner planner I made while unemployed."
tags: [yum4less, meal planning, grocery shopping, dinner ideas, sale circulars, weekly ads, budget cooking, food prices, store deals, multi-store shopping, pantry, recipes, job search, unemployment, career change, personal projects, resume building, portfolio, junior developer, nextjs, typescript, postgresql, docker, leaflet, playwright, cursor, agentic ai, cloudflare, cloudflare tunnel, truenas, NAS, watchtower, homelab, self-hosted, SaaS, public beta, web app, mobile-first, kroger, aldi, publix, food lion]
---

## I SHIPPED IT TO THE ACTUAL INTERNET

Last month I [introduced Yum4Less]({% post_url 2026-07-10-its-been-a-while-welcome-to-yum4less %}) like a proud parent showing ultrasound photos. Cute. Hypothetical. Running on my machine.

Today it has a real domain.

**[yum4less.com](https://yum4less.com/)**

Not a staging URL. Not "works on my laptop if the stars align." A public site, tunneled through Cloudflare, living on my TrueNAS homelab like every other questionable life choice I've made since October.

<img src="{{ "/assets/images/yum4less-01-live-settings-landing.png" | relative_url }}" alt="Yum4Less live Settings landing with ZIP, radius, and Find stores CTAs" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

If nobody reads this either: cool. At least the app is out there judging grocery prices without me.

## WHAT "LIVE" ACTUALLY MEANS

It means I can open a phone browser, type a ZIP, and the thing behaves like a product instead of a science fair project.

Setup starts in Settings. Enter a ZIP, pick a radius, then — because ZIP centroids lie sometimes — you drop a search-center pin on a map before it goes hunting for stores.

<a href="{{ "/assets/images/yum4less-02-live-zip-search-center-map.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: ZIP search-center map">
  <img src="{{ "/assets/images/yum4less-02-live-zip-search-center-map.png" | relative_url }}" alt="Map dialog to choose a search center for ZIP 23111 in Mechanicsville, VA" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

Confirm the pin. Then it finds nearby chains.

<a href="{{ "/assets/images/yum4less-03-live-confirm-search-center.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Confirm search center">
  <img src="{{ "/assets/images/yum4less-03-live-confirm-search-center.png" | relative_url }}" alt="Confirm dialog asking to use the placed map pin as search center" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

<a href="{{ "/assets/images/yum4less-04-live-store-picker.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Nearby store picker">
  <img src="{{ "/assets/images/yum4less-04-live-store-picker.png" | relative_url }}" alt="Store picker listing Kroger, Publix, Aldi, and Food Lion near Mechanicsville" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

Flip on multi-store and it gets honest about coverage — which chains actually have sale data this week versus which ones are mostly vibes.

<a href="{{ "/assets/images/yum4less-05-live-multi-store-settings.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Multi-store settings with coverage">
  <img src="{{ "/assets/images/yum4less-05-live-multi-store-settings.png" | relative_url }}" alt="Multi-store Settings with selected chains and weekly sale-price coverage counts" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

Save. Continue. Welcome screen asks for a spending limit and dietary focus for *this visit only* — because Preferences That Haunt You Forever is someone else's product strategy.

<img src="{{ "/assets/images/yum4less-06-live-home-welcome.png" | relative_url }}" alt="Yum4Less Welcome screen with $20 spending limit and dietary focus Anything" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

## THE PART WHERE IT STOPS BEING A DEMO REEL

Deals is the "show me the receipts" tab. Sale items, estimated or directional prices, and which store the signal came from. No coupon-clipping carnival. No Instacart cosplay.

<a href="{{ "/assets/images/yum4less-07-live-deals-sale-items.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Deals — sale items">
  <img src="{{ "/assets/images/yum4less-07-live-deals-sale-items.png" | relative_url }}" alt="Deals tab listing sale ingredients with lowest found prices and trust labels" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

Then ingredients: use everything on sale, or pick manually. Pantry check for what you already have *this session*. Then ranking.

<img src="{{ "/assets/images/yum4less-09-live-ingredients-scope.png" | relative_url }}" alt="Ingredients screen offering use-all or pick-manually for 97 sale ingredients" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

<img src="{{ "/assets/images/yum4less-10-live-pantry-checklist.png" | relative_url }}" alt="Pantry check screen before suggesting recipes" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

And then — dinner recommendations. On the live site. With the giant "heads up about these prices" box that refuses to let anyone pretend this is a checkout total.

<a href="{{ "/assets/images/yum4less-11-live-dinner-recommendations.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Live dinner recommendations">
  <img src="{{ "/assets/images/yum4less-11-live-dinner-recommendations.png" | relative_url }}" alt="Dinner recommendations list with trust disclaimer and suggested recipes including Garlic Butter Pasta with Spinach" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

<a href="{{ "/assets/images/yum4less-12-live-recipe-detail.png" | relative_url }}" class="glightbox" data-gallery="yum4less-live" data-glightbox="title: Recipe detail on live site">
  <img src="{{ "/assets/images/yum4less-12-live-recipe-detail.png" | relative_url }}" alt="Expanded recipe detail view within the live dinner recommendations flow" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">
</a>

Click any of those to enlarge. I took these straight off the live site with Playwright, because if I'm going to claim it's live, the screenshots should not be from a local Docker fantasy land.

## THE UNCOMFORTABLE HONESTY SECTION

Yum4Less is still a beta. Continental US ZIPs. A limited set of chains. Prices that are estimated or directional on purpose. Saved dinners are... let's call that "aspirational UI."

There's a feedback form if something looks wrong. Anonymous. No receipts. No "please dump your home address into my Postgres."

<img src="{{ "/assets/images/yum4less-13-live-feedback.png" | relative_url }}" alt="Yum4Less beta feedback form for reporting wrong prices or product ideas" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

I also kept the trust copy mean to *me*, not soft for marketing. No "save money!" badges. No fake confidence meters. If the data is from a weekly ad syndicated feed, it says so. If Kroger is doing most of the heavy lifting because other stores have thin coverage this week, it says *that* too.

Settings after you've configured everything still looks like Settings — ZIP, radius, multi-store, the whole ritual — because I am not rewriting the product every time I feel productive.

<img src="{{ "/assets/images/yum4less-15-live-settings-configured.png" | relative_url }}" alt="Configured Settings screen with selected multi-store chains after setup" style="max-width: 55%; height: auto; display: block; margin: 1rem 0; border: 1px solid #ddd; border-radius: 4px;">

## WHY THIS MATTERS (TO ME, ANYWAY)

Part of this is still unemployment math. Applications into the void. Homelab as both therapy and resume padding. Cursor + agents + rules + CI until the thing stops lying to itself.

But the other part is simpler: dinner is a daily problem. "What's on sale near me, and what can I cook from that without inventing a shopping list from vibes" is more useful than another half-finished media-server side quest.

So I put it on the internet.

Go poke it: [https://yum4less.com/](https://yum4less.com/)

Repo (for the people who read READMEs for fun): [github.com/sfh1980/Yum4Less](https://github.com/sfh1980/Yum4Less)

If it breaks, tell the feedback form. If it works, make dinner. If neither: welcome to software.

ANYWHO, as always...
If you'd like to support my work, you can [donate via PayPal](https://paypal.me/sfh1980).
