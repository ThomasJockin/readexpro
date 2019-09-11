# Lexend Website

<img width="1093" alt="Screen Shot 2019-06-08 at 7 26 26 PM" src="https://user-images.githubusercontent.com/25366/64728959-329a1b80-d4aa-11e9-9025-f6536102a21e.png">

An awesome, function website for an awesome, functional font — Lexend is a font designed specifically to increase to reading-proficiency, and it's got some data to back it up. We designed this sucker to show it.

There's a lot of fun but not-too-complicated tech here:

- [next.js](https://nextjs.org) for a minimal react framework
- [react-spring](https://www.react-spring.io/) for amazing animation
- [emotion](https://emotion.sh/docs/introduction) for simple & mostly-contained component styling
- [mdx](https://mdxjs.com/) to keep our homepage in fairly simple markdown, with components mixed in

### 🏃‍♂️ Getting Up & Running

> Make sure you've got [Node](https://nodejs.org/en/) installed, cuz we usin' JavaScript. I prefer [yarn](https://yarnpkg.com/en/) to install dependencies, but [npm](https://www.npmjs.com/get-npm) works, too. You just need one or the other — the commands are the same, switch `yarn` with `npm` if that's what you've got.

The website is ultimately generated & committed with special requirements to make it work with Github Pages, so the you can think of the `website` branch as the source code for the site, and the `gh-pages` branch as minified distribution code — you won't ever really need to touch the `gh-pages` branch manually.

1. Checkout the `website` branch & install dependencies so you can run locally:

```bash
git checkout website
yarn install
```

2. Run locally:

```bash
yarn dev
```

2. To make changes, create a new branch based off the `website` branch, make your changes, and push. You can make a pull request on Github, which if accepted will get merged into the `website` branch.
3. Once a pull request is merged, you'll have to pull changes from the website branch down to your local machine in order to generate & deploy to the `gh-pages` branch.

```bash
git pull --all
git checkout website
yarn deploy
```

The deploy command simplifies the gh-pages deploy process using the lovely [gh-pages](https://github.com/tschaub/gh-pages) library, which is included in the development dependencies when you `yarn install` and uses `git` behind the scenes.

It will do all the work for you of generating the final site code (`yarn predeploy` is run automatically behind the scenes when you run `yarn deploy`) & pushing it to the correct branch (which is what `yarn deploy` does).

Github Pages sometimes takes a minute or two to clear the cache on Github's end after deploying, but you won't ever need to do anything beyond running `yarn deploy` locally when you have the `website` branch up-to-date to get your changes live.

#### 👨🏻‍🚒 Gotchas to Watch Out For in Future Development

###### Deployment

One gotcha (which you might notice in `package.json` on #master and shouldn't have to worry about if you use as-is), is that we have to pass the `-t` argument, which is shortcode for _including dotfiles_ — gh-pages ignores folders that start with an `_` if you don't include a `.nojekyll` file, and we're making sure to include that shnaz in the `predeploy` command that gets automatically run when you hit `yarn deploy`.

###### Static Files

The `/static` folder is an important part of Next.js, and where we store all our non-dynamic files like fonts, images, etc. Because gh-pages is running in a subdirectory (`thomasjockin.github.io/lexend` instead of just `thomasjockin.github.io` or `lexend.com`), we have to change the URLs for static files to match whatever directory it's living in.

You'll notice all the static files are absolute URLs, just to make it simple. If you change where this lives, you'll want to do a find & replace to update those static files. There aren't a lot.
