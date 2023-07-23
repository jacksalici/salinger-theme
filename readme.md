# Salinger Theme 📻
___Clean and minimalistic Hugo theme built with DaisyUI and Tailwind.___

![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)
![Version Badge](https://img.shields.io/badge/version-2.0.0-yellow)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jacksalici/salinger-theme/main)



__Salinger__ is a _clean, minimalistic, mobile-first, blazing-fast, fancy_ and _lightweight_ theme for the [Hugo framework](https://gohugo.io).
Born as the theme for [my website (demo)](http://jacksalici.com), it has been completely rebuilt using __Tailwind__ and __DaisyUI__.  
Why this name? During the design of the light mode homepage, I was inspired by [the Italian edition cover by Einaudi](https://duckduckgo.com/?q=il+giovane+holden+by+j.d.+salinger+einaudi+1961&t=h_&ia=images&iax=images&iaf=color%3AWhite) of _The Catcher in The Rye_ by J.D. Salinger.

![Screenshot of the homepage](https://github.com/jacksalici/salinger-theme/blob/main/images/screenshot.jpg)

## Features 🗂️

- [x] Tailwind and DaisyUI 🌼 framework 
- [x] Responsive and mobile-first 📲
- [x] Google Analytics 📈
- [x] Custom visibility of meta
- [x] __Dark, Auto__ and Light Mode 🌚
- [x] 2️⃣ hamburger Menu with custom icon
- [x] __Tweemoji__ Emoji support 🐧
- [x] SEO support (**100% score on PageSpeed**) 🚀

## Quick Start ⚠️

### Preview the _example site_  

```shell
git clone https://github.com/jacksalici/salinger-theme.git salinger
cd salinger/exampleSite
hugo server --t ../..
```

A demo usage can also be seen on [my website](https://jacksalici.com). 

### Install the theme

1. Add the repository to your Hugo Project repository as a submodule: 

    ```bash
    git submodule add https://github.com/jacksalici/salinger-theme.git themes/salinger
    ```

2. Configure your `hugo.toml`. I suggest copying the demo file present in the __example site__ folder. Please note that some parameters are mandatory for the theme to work properly.

3. Install the dependencies.

    ```bash
    hugo mod npm pack 
    npm install
    ```

4. You can build your site with `hugo server` and admire the result at `http://localhost:1313/`.

#### Update your installation

If you want to get the latest update of the `Salinger` theme please execute this command:

```bash
git submodule update --remote --merge
```

_Please note that during the development of the new version (Jul 23) a rebase has been made and the commit history is not so clean. If you came from the legacy version, updating it can be a bit annoying. I suggest [removing completely](https://gist.github.com/myusuf3/7f645819ded92bda6677) the submodule and adding it again._

## Usage 📐

Check out the [__wiki__](https://github.com/jacksalici/salinger-theme/wiki) and the _example site_. 

## License 📜

The Salinger theme code is licensed under the [MIT license](https://github.com/jacksalici/salinger-theme/blob/master/LICENSE).
Texts and other resources are licensed with [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)
