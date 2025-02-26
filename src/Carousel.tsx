import React, { useEffect, useState } from "react";

export interface ImagesData {
  src: string;
  description?: React.ReactNode;
}

interface CarouselProps {
  images: ImagesData[];
  autoPlay?: boolean;
  interval?: number;
  infinite?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  leftArrowPosition?: React.CSSProperties;
  rightArrowPosition?: React.CSSProperties;
  descriptionPosition?: React.CSSProperties;
  leftArrowContent?: React.ReactNode;
  rightArrowContent?: React.ReactNode;
  arrowStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
  infinite = true,
  showArrows = true,
  showIndicators = true,
  leftArrowPosition = {
    top: "50%",
    left: "10px",
  },
  rightArrowPosition = {
    top: "50%",
    right: "10px",
  },
  descriptionPosition = {
    bottom: "10px",
    left: "50%",
  },
  leftArrowContent = "❮",
  rightArrowContent = "❯",
  arrowStyle = {},
  containerStyle = {},
  height = "100%",
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const totalSlides: number = images.length;

  const moveSlide = (direction: "next" | "prev") => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => setIsTransitioning(false), 500);

    if (direction === "next") {
      setCurrentSlide((prevSlide) => {
        if (prevSlide + 1 >= totalSlides) {
          return infinite ? 0 : prevSlide;
        }
        return prevSlide + 1;
      });
    } else if (direction === "prev") {
      setCurrentSlide((prevSlide) => {
        if (prevSlide - 1 < 0) {
          return infinite ? totalSlides - 1 : prevSlide;
        }
        return prevSlide - 1;
      });
    }
  };

  useEffect(() => {
    if (autoPlay && totalSlides > 1) {
      const intervalId = setInterval(() => {
        moveSlide("next");
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, interval, totalSlides, infinite]);

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        overflow: "hidden",
        height,
        ...containerStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(${-currentSlide * 100}%)`,
        }}
      >
        {images.map((img: ImagesData, index: number) => (
          <div key={index} style={{ minWidth: "100%", position: "relative" }}>
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height, objectFit: "cover" }}
            />
            {img.description && (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  ...descriptionPosition,
                }}
              >
                {img.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {showArrows && totalSlides > 1 && (
        <>
          <button
            style={{
              position: "absolute",
              ...leftArrowPosition,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "50%",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "40px",
              height: "40px",
              ...arrowStyle,
            }}
            onClick={() => moveSlide("prev")}
          >
            {leftArrowContent}
          </button>
          <button
            style={{
              position: "absolute",
              ...rightArrowPosition,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "50%",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "40px",
              height: "40px",
              ...arrowStyle,
            }}
            onClick={() => moveSlide("next")}
          >
            {rightArrowContent}
          </button>
        </>
      )}

      {showIndicators && totalSlides > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              style={{
                width: "10px",
                height: "10px",
                margin: "0 5px",
                borderRadius: "50%",
                backgroundColor: index === currentSlide ? "black" : "gray",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
