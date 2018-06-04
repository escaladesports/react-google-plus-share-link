# react-google-plus-share-link

Create "share this on Google+" links in React.

## Installation

With npm:

```bash
npm install --save react-google-plus-share-link
```

Or with Yarn:

```bash
yarn add react-google-plus-share-link
```

## Usage

```jsx
import ShareLink from 'react-google-plus-share-link'

...

<ShareLink link='https://your-site.com/some-page'>
   {link => (
      <a href={link} target='_blank'>Share this on Google+</a>
   )}
</ShareLink>
```

If you don't pass in a `link` prop, it will use the current page (`window.location.href`).