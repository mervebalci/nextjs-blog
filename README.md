This is a starter template for [Learn Next.js](https://nextjs.org/learn).
# nextjs-blog


When linking between pages on websites, you use the <a> HTML tag.
In Next.js, you can use the Link Component next/link to link between pages in your application. <Link> allows you to do client-side navigation and accepts props that give you better control over the navigation behavior.
Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.


Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.



CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well.

To load global CSS to your application, create a file called pages/_app.js

The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles.

Important: You need to restart the development server when you add pages/_app.js.

!! In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else !!