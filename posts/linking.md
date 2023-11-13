---
title: 'Linking Between Pages on Websites'
date: '2023-09-15'
---

When linking between pages on websites, you use the **<a>** HTML tag.

In Next.js, you can use the **Link** Component **next/link** to link between pages in your application. **<Link>** allows you to do client-side navigation and accepts **props** that give you better control over the navigation behavior.

Client-side navigation means that the page transition happens *using JavaScript*, which is faster than the default navigation done by the browser.

**Note:** If you need to link to an *external* page outside the Next.js app, just use an **<a>** tag without **Link**.