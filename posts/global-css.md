---
title: 'Global CSS'
date: '2023-11-12'
---

***CSS Modules*** are useful for component-level styles. But if you want some CSS to be loaded by **every page**, Next.js has support for that as well.

To load ***global CSS*** to your application, create a file called **pages/_app.js**

The default export of **_app.js** is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles.

**Important:** You need to restart the development server when you add **pages/_app.js**.

**!!** In Next.js, you can add **global CSS** files by importing them from **pages/_app.js**. You **cannot** import global CSS anywhere else **!!**