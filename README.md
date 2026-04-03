<div align="center">
    <h1>Floorquery</h1>
</div>

## Overview

**A modern jQuery drop-in replacement based on a floorjs script**. The project Floorquery is based on is not deprecated and can be found [here](https://boyninja1555.github.io/floorjs/floorquery/floorquery.html) inside the FloorJS project which is still maintained today.

## Installation

**NPM**

Run this command in a terminal/console:

```bash
npm i floorquery@latest
```

**CDN (supported for our fellow CDN-loving web devs)**

Include this script tag above any other JavaScripts using Floorquery:

```html
<script src="https://cdn.jsdelivr.net/npm/floorquery@latest/dist/floorquery.umd.js"></script>
```

## General Usage

Floorquery is focused on DOM manipulation. You select a list of elements like this:

```javascript
$q("#racecar")  // Element(s) with a "racecar" ID
```

If there are multiple elements returned, all functions with the capability will be affected. For example:

```javascript
$q(".superlinks").class(".supersuperlinks")  // Toggles the .supersuperlinks class on every element with the .superlinks class
$("a").attr("href")  // Only the href= attribute of the first hyperlink found
```

## Contribution

If you're fine writing in vanilla JavaScript and manual type declaration files, you can help us! Read and follow the [license](./LICENSE.md) and you're good.
