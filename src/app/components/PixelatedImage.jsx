import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export const PixelatedImage = forwardRef(
  (
    {
      id,
      className,
      src,
      blockSize = 20,
      width = 600,
      height = 600,
      level = '',
      style,
      ...rest
    },
    ref,
  ) => {
    const canvasRef = useRef(null);
    useImperativeHandle(
      ref,
      () => canvasRef.current || document.createElement('canvas'),
    );

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.imageSmoothingEnabled = false;

      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = src;

      img.onload = () => {
        const size = blockSize * 0.01;
        const w = canvas.width * size;
        const h = canvas.height * size;

        ctx.drawImage(img, 0, 0, w, h);
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

        if (level && level !== '') {
          ctx.shadowColor = "black";
          ctx.shadowOffsetX = 15;
          ctx.shadowOffsetY = 15;
          ctx.font = `200px chill`;
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#FFAD36';
          ctx.fillText(level, canvas.width / 3.8, canvas.height / 2);
        }
      };
    }, [src, blockSize]);

    return (
      <canvas
        ref={canvasRef}
        id={id}
        className={`border-2 border-solid border-[#FFAD36] ${className || ''}`}
        width={width}
        height={height}
        style={{style, imageRendering: 'pixelated'}}
        {...rest}
      />
    );
  },
);

PixelatedImage.displayName = 'PixelatedImage';