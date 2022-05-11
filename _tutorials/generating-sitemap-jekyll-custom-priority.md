---
title: "Generating sitemap with custom priority in Jekyll site"
author: Priyanshu Tiwari
excerpt: Generating sitemap with custom priority in Jekyll site without any plugin
image: 
  thumbnail: /images/tutorials/sitemap.png
  caption: "latex"
---

In the end the final `sitemap.xml` file should look like this,

```
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
```