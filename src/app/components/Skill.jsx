import { PixelatedImage } from "./PixelatedImage";

export default function Skill({ url, back }) {
  return (
    <article className="group border-4 border-dashed border-main-gray rounded-sm w-[300px] max-[450px]:w-64 h-[220px] max-[450px]:h-48 hover:scale-110 transition-all
                        duration-[0.87s] max-[768px]:m-auto max-[768px]:my-7"
      style={{ perspective: '1000px' }}>
      <div className="w-full h-full relative transition-transform duration-[0.87s] group-hover:rotate-y-180"
        style={{ transformStyle: 'preserve-3d' }}>

        <div className="absolute w-full h-full flex items-center justify-center rounded-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
          <PixelatedImage
            blockSize={15}
            src={`/images/${url}.png`}
            alt={url}
            className={'p-8 w-full h-full'}
          />
        </div>

        <div className="absolute w-full h-full flex items-center justify-center rounded-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {back}
        </div>

      </div>
    </article>
  );
}
