'use client';
import { dashedLine, underlineEffect } from "../../utils/utils";

export default function Jobs() {


  return (
    <section className="max-w-[700px]">

      <h3 style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}>
        Where I’ve Worked
      </h3>

      <div className="flex max-[600px]:block min-[700px]:min-h-[340px] ">
        <div className="relative w-max p-0 m-0 list-none z-10
                        max-[480px]:w-[calc(100% + 50px)] max-[480px]:pl-6 max-[480px]:ml-6
                        max-[600px]:flex max-[600px]:overflow-x-auto max-[600px]:w-[calc(100% + 100px)]
                        max-[600px]:pl-[50px] max-[600px]:ml-[-50px] max-[600px]:mb-8
                        ">

{/* <li className="first-of-type:max-[600px]:ml-8">
li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
</li> */}

        </div>

      </div>
    </section>
  );
}