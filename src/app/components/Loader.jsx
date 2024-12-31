'use client';
export default function Loader({ progress }) {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[9999]" >
      <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white" >
        <p>Loading... {progress} %</p>
        <div className="w-72 h-7 rounded-sm overflow-hidden border-4">
          <div className={`bg-red-800 h-full`} style={{ width: `${progress}%`, transition: "width 0.3s ease" }} />
        </div>
      </div>
    </div>
  );
}