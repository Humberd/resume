# Welcome to My Resume 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Humberd/cv2/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Humberd/cv2/blob/master/LICENSE)

> The project is my Resume written in React.
It is print-optimized, so you can print it either physically or to pdf
without any layout bugs.

## Install

```sh
npm ci
```

## Usage

```sh
npm start
```

## Generate PDF

Before generating PDF make sure the server is running on port 8000.

```sh
npm run pdf
```

## Issues

* GDPR consent is now directly below the last element. Now it looks ok, 
because it is at the bottom, but if the last element is at the top the consent will also be at the top.
The consent should be at the bottom of the last page.

* Each segment now tries to fit a page as a whole, so when some part of it
goes to the next page then the whole segment goes to the new page.
This is not exactly a desired result, because there can be a big gaps as a result of that.
Now it looks good, because I was lucky.
The segment content should hangle how it flows, but the segment header cannot be alone on the page,
it should have at least some part with it.

## Author

👤 **Maciej Sawicki**

* Github: [@Humberd](https://github.com/Humberd)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [Maciej Sawicki](https://github.com/Humberd).

This project is [MIT](https://github.com/Humberd/cv2/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
