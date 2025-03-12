# How to run the program
Run install & dev commands:
```bash
npm install
```

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the site.

# Rational

Going into the build of this site there were two core principles guiding my choices:
- Minimize complexity to meet the 4-hour build time while also meeting the criteria of using GraphQL, routing, and using a CSS framework 
- Build something visually engaging, with a structure that could be made responsive quickly, while not requiring much design time

## Why I chose NextJS / Tailwinds
- I'm experience working with it, which minimizes unknown unknowns that could cause problems with meeting time limit
- I recently have been coding mostly BEM style CSS instead of using CSS frameworks however I've done a few things with Tailwinds and NextJS can configure Tailwinds for you on setup
- NextJS makes it easy to mix CSS modules and Tailwinds, which would be important to save time on design elements that would be more fiddly to get working in tailwinds
- NextJS has a variety of routing options, I switched from their more modern server components routing to client side to keep GraphQL setup simple
- I prefer working with Typescript and NextJS has a solid default configuration

# Why I choose to make a Mock streaming site
- I was already familiar with https://www.themoviedb.org, I knew I'd be able to source movie logos, backdrops, and posters allowing for quick image sourcing
- Sourcing images and designing for other elements available in SWAPI like characters, planets, ships would be more time-consuming
- Having the intro crawl available in SWAPI felt like the perfect fit for designing for the design principle of incorporating moments of joy and surprise while meeting assignments constraints
- There is lots of quick reference available for the design, and the layout would be an opportunity to code more interesting styling for the assignment
