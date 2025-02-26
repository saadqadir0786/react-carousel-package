# React Carousel Package

A lightweight, customizable carousel component for React applications.

## 📦 Installation

Install the package via npm:

```sh
npm install react-carousel-package-2
```

## 🚀 Usage

Here’s a basic example of how to use the carousel:

```jsx
import React from "react";
import Carousel from "react-carousel-package-2";

const images = [
  { src: "image1.jpg", description: "Slide 1" },
  { src: "image2.jpg", description: "Slide 2" },
  { src: "image3.jpg", description: "Slide 3" },
];

const App = () => {
  return (
    <Carousel
      images={images}
      autoPlay={true}
      interval={3000}
      infinite={true}
      showArrows={true}
      showIndicators={true}
    />
  );
};

export default App;
```

## ⚙️ Props

| Prop Name           | Type                  | Default      | Description                                            |
| ------------------- | --------------------- | ------------ | ------------------------------------------------------ |
| `images`            | `ImagesData[]`        | **Required** | Array of image data objects (`src` and `description`). |
| `autoPlay`          | `boolean`             | `true`       | Enables autoplay functionality.                        |
| `interval`          | `number`              | `3000`       | Interval for autoplay in milliseconds.                 |
| `infinite`          | `boolean`             | `true`       | Enables infinite scrolling of slides.                  |
| `showArrows`        | `boolean`             | `true`       | Toggles visibility of navigation arrows.               |
| `showIndicators`    | `boolean`             | `true`       | Toggles visibility of slide indicators.                |
| `leftArrowContent`  | `React.ReactNode`     | `"❮"`        | Content for the left arrow button.                     |
| `rightArrowContent` | `React.ReactNode`     | `"❯"`        | Content for the right arrow button.                    |
| `arrowStyle`        | `React.CSSProperties` | `{}`         | Custom styles for the navigation arrows.               |
| `containerStyle`    | `React.CSSProperties` | `{}`         | Custom styles for the entire carousel container.       |
| `height`            | `string`              | `"100%"`     | Sets the height of the carousel.                       |

```

```
