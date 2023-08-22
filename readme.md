# Salinger Theme 📻
___Clean and minimalistic Hugo theme built with DaisyUI and TailwindCSS.___

![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub tag (with filter)](https://img.shields.io/github/v/tag/jacksalici/salinger-theme?color=yellow)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jacksalici/salinger-theme/main)



__Salinger__ is a _clean, minimalistic, mobile-first, blazing-fast, fancy_ and _lightweight_ theme for the [Hugo framework](https://gohugo.io).
Born as the theme for [my website (demo)](http://jacksalici.com), recently it has been completely rebuilt using __Tailwind__ and __DaisyUI__.  
Why this name? During the design of the light mode homepage, I was inspired by [the Italian edition cover by Einaudi](https://duckduckgo.com/?q=il+giovane+holden+by+j.d.+salinger+einaudi+1961&t=h_&ia=images&iax=images&iaf=color%3AWhite) of _The Catcher in The Rye_ by J.D. Salinger.

![Screenshot of the homepage](https://raw.githubusercontent.com/jacksalici/salinger-theme/main/images/tn.jpg)

## Features 🗂️

- [x] TailwindCSS and DaisyUI 🌼 framework 
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
# prerequisites: git, hugo, and npm.
git clone https://github.com/jacksalici/salinger-theme.git salinger
cd salinger
npm install
cd example-site
hugo server -t ../..
```

A demo usage can also be seen on [my website](https://jacksalici.com).  

### Install the theme

0. **Prerequisites**: Please, check to have installed a recent version of _hugo_, _git_, and _npm_.

1. Add the repository to your Hugo Project repository as a submodule: 

    ```bash
    git submodule add https://github.com/jacksalici/salinger-theme.git themes/salinger
    ```

2. Configure your `hugo.toml`. I suggest copying the demo file present in the __example site__ folder. Please note that **some parameters are mandatory** for the theme to work properly.

3. Install the dependencies in the theme folder and the main folder.

    ```bash
    cd themes/salinger
    npm install
    cd ../..
    hugo mod npm pack 
    npm install
    ```

4. You can build your site with `hugo server` and admire the result at `http://localhost:1313/`.

#### Update your installation

If you want to get the latest update of the `Salinger` theme please execute this command:

```bash
git submodule update --remote --merge
```

_Please note that during the development of the new major version (v2.x.x - Jul 23) a rebase has been made and the commit history is not so clean. If you came from the legacy version, updating it can be a bit annoying. I suggest [removing completely](https://gist.github.com/myusuf3/7f645819ded92bda6677) the submodule and adding it again._

## Usage 📐

Check out the [__wiki__](https://github.com/jacksalici/salinger-theme/wiki) and the _example site_. 

## License 📜

The Salinger theme code is licensed under the [MIT license](https://github.com/jacksalici/salinger-theme/blob/master/LICENSE).
