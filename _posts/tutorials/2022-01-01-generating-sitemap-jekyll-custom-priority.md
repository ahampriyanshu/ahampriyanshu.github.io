---
title: "Generating sitemap with custom priority in Jekyll site"
author: ahampriyanshu
excerpt: Generating sitemap with custom priority in Jekyll site without any plugin
categories: [Tutorials]
tags: [priyanshu, tiwari, ahampriyanshu, tutorials]
image:
  src: /images/tutorials/sitemap.png
  width: 1000
  height: 400
  alt: loading
---

1. Create a new file `sitemap.xml` in the root of your folder.

2. Copy-&-paste the following content into the newly created file and fine tune it according to your needs. Here, we are using two for loops to render `<url>` , the first for the posts, and the second for the site's pages.

```xml
{%raw%}
---
layout: null
sitemap_omit: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for post in site.posts %}
    {% unless post.published == false %}
    <url>
      <loc>{{ site.url }}{{ post.url }}</loc>
      {% if post.lastmod %}
        <lastmod>{{ post.lastmod | date_to_xmlschema }}</lastmod>
      {% elsif post.date %}
        <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if post.sitemap.changefreq %}
        <changefreq>{{ post.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>monthly</changefreq>
      {% endif %}
      {% if post.sitemap.priority %}
        <priority>{{ post.sitemap.priority }}</priority>
      {% else %}
        <priority>0.7</priority>
      {% endif %}
    </url>
    {% endunless %}
  {% endfor %}
  {% for page in site.pages %}
    {% unless page.sitemap_omit or page.name == "feed.xml" %}
    <url>
      <loc>{{ site.url }}{{ page.url | remove: "index.html" }}</loc>
      {% if page.lastmod %}
        <lastmod>{{ page.lastmod | date_to_xmlschema }}</lastmod>
      {% elsif page.date %}
        <lastmod>{{ page.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if page.sitemap.changefreq %}
        <changefreq>{{ page.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>weekly</changefreq>
      {% endif %}
      {% if page.sitemap.priority %}
        <priority>{{ page.sitemap.priority }}</priority>
      {% else %}
        <priority>0.9</priority>
      {% endif %}
    </url>
    {% endunless %}
  {% endfor %}
</urlset>
{%endraw%}
```

3. Now, for front-matter use

```yml
sitemap_omit: boolean
sitemap:
  priority: 0.1 - 1.0
  changefreq: 'daily' or 'weekly' or 'monthly' or 'yearly'
```

4. Atlast, add new default scope in the \_config.yml file to exclude all the js/css assets.

```yml
- scope:
    path: "assets/**"
  values:
    sitemap_omit: true
```

5. Voilà 🎉

Verfify the changes by visiting [basename/sitemap.xml](https://ahampriyanshu.com/sitemap.xml)
{: .prompt-tip }
