+++
title = "Front Matter"
date = "2019-03-10"
description = "How to config salinger theme using front matter"
toc = true
+++

> 🔥 read the update wiki on the github wiki section

## Global Config  
Besides to [Hugo Global config](https://gohugo.io/content-management/front-matter/) there are some more variables that can be used in config.toml.

### Site Params  

```toml

# Optional Footer
copyright = 'Name'

[params]

# True if the header must appears also in the homepage (default: True)
showHeaderOnHomepage = true

# Google Analytics G-Tag (optional)
googleAnalytics = "G-XX00000"

# True if you want to use Twemoji (optional)
twemoji = true

# Optional text for 404 text.
text404 = "Some text"

# Font Awesome 6 id. Optional, FA4 will be used without any ID provided.
fontawesomekitcode = "123456789"
```

### Social links  

Social links can be add in the homepage by writing them directly on config.toml

```toml
[[params.social]]
name = "email"
icon = "fa fa-envelope" # name of FA icon
url = "https://t.me/example" 
before = "and on " # text before the icon
after = "." # text after the icon
```

### Menu  

The header menu is also configurable:

```toml
[Menu]
[[Menu.Main]]
name = "Projects."
url = "/projects/"
weight = 1
``` 

## Page config  

```markdown
---
# the title that appears on the single page
title: "example title"

# optional: if provided appears on the home page instead of the title
description: "this is and example description longer that the title."


date: 2021-03-17T22:00:00Z
slug: "website-page-cool"

# optional: to display toc on bigger screens (toc on smartphones isn't supported yet)
toc: true
---
```

## Taxonomy  


E.g.: you want use the categories and tags taxonomies.

In the config file:

```toml
[taxonomies]
	tag = "tags"
	category = "categories"
```

In each article:

```markdown
categories: ["cat1"]
tags: ["tag1", "..."]
```