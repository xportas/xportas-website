import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';



export const PixelatedImage = forwardRef(
  (
    {
      id,
      className = '',
      src,
      blockSize = 20,
      width = 600,
      height = 600,
      level = '',
      style = {},
      onClick,
      ...rest
    },
    ref
  ) => {
    const canvasRef = useRef(null);

    useImperativeHandle(ref, () => canvasRef.current);

    const img = useMemo(() => {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = src;
      return image;
    }, [src]);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.imageSmoothingEnabled = false;

      img.onload = () => {
        requestAnimationFrame(() => {
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');

          const scaledWidth = canvas.width * blockSize * 0.01;
          const scaledHeight = canvas.height * blockSize * 0.01;

          tempCanvas.width = scaledWidth;
          tempCanvas.height = scaledHeight;

          if (tempCtx) {
            tempCtx.imageSmoothingEnabled = false;
            tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvas.width, canvas.height);

          if (level) {
            ctx.save();
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 15;
            ctx.shadowOffsetY = 15;
            ctx.font = '200px chill';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#FFAD36';
            ctx.fillText(level, canvas.width / 3.8, canvas.height / 2);
            ctx.restore();
          }
        });
      };
    }, [img, blockSize, level]);

    return (
      <canvas
        ref={canvasRef}
        id={id}
        width={width}
        height={height}
        className={`${level ? 'border-2 border-solid border-[#FFAD36]' : ''} ${className}`}
        style={{
          ...style,
          imageRendering: 'pixelated',
          pointerEvents: 'auto',
        }}
        onClick={onClick}
        {...rest}
      />
    );
  }
);

PixelatedImage.displayName = 'PixelatedImage';