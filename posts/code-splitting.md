---
title: 'Code Splitting and Prefetching'
date: '2023-11-10'
---

Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.