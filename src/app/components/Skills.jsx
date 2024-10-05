export default function Skills() {
  return (
    <section className="group transition-all duration-[0.3s] border-4 border-dashed border-main-gray rounded-sm
                        hover:scale-110">

      <div className="transition-all duration-[0.3s] flex justify-center items-center opacity-100 rounded-sm
                      group-hover:h-0 group-hover:opacity-0">
        <span>img with title here</span>
      </div>

      <div className="opacity-0 flex justify-center items-center transition-all duration-[0.3s] text-[0px] rotate-90 rounded-[15px] -scale-100
                      group-hover:opacity-100 group-hover:h-full group-hover:text-[1.8rem] group-hover:rotate-180">
        <span>listed skills here</span>
      </div>

    </section>
  );
}
