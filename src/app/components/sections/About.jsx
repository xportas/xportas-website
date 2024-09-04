'use client';
import { skills } from "../../utils/config";
import { dashedLine, underlineEffect } from "../../utils/utils";

export default function About() {


  return (
    <section className='max-w-5xl mx-auto numbered mb-12 md:mb-24' >

      <h3 style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}>
        About Me</h3>

      <div className="block md:grid md:grid-cols-[3fr_2fr] md:gap-12">
        <div>
          <div className="grid grid-cols-1 gap-y-4">
            <p>
              asdfa sdfasdfñlkj dflñaksdjf ñlasdkfj ñsldkfj sdlkfjsdolkfj sdlkfjlkjsdlfkj sdlfkj
              dlkf jsldkfj sldkfj sldkfj sldkfj sdlkfj sdlkfj sdlkfj sdlkfj skldjf lksdjf lksdjf klsd
              lskdjf lksdjf lksdjf lskdjf lskdjf lskdf jklsdjflksdjfklsd klfjlsdkfklsdf klsdfj lsd
              ñsldfk sñdlfk sdñlfks
            </p>

            <p>
              lksdj dlkjlk jdlkjdkljdkl jklsjd kl jsdjskl dkls jdkl jsdkldlk d{' '}
              <a href="" className={`text-secondary-orange ${underlineEffect}`}>dkj kdj dkjd kdk kdk</a>,{' '}
              <a href="" className={`text-secondary-orange ${underlineEffect}`}>kjd kdj dk</a>,{' '}
              <a href="" className={`text-secondary-orange ${underlineEffect}`}>kdj dkj dkdj kdk dd</a>, and{' '}
              <a href="" className={`text-secondary-orange ${underlineEffect}`}>kdj kdj dkjd kdjd kdj kddkj</a>. My
              lsdkj dkjd kjdkjsfkljsdflskj flsdk sdlk dldk jsdlkd ldk jdlk jldk dlkd jdl d
              djkj dkjd kdj d<a href="https://upstatement.com/">dlkjdlkjdlk</a> dkljd kdj kdjd dk
              asdfasd.
            </p>

            <p>
              asdlkfj sdlñf asd{' '}
              <a href="" className={`text-secondary-orange ${underlineEffect}`}>
                asd alñksdfj aslñdkfj
              </a>{' '}
              dslkf jdklf jdkf jldkfjldkjf lksd jfkldj fkldfj kld jfkld lkfjkldfd fdkfjldk fjld
              lkd jdlkj dl
            </p>

            <p>Here are all the technologies I’ve been working:</p>
          </div>
        </div>

        <div className="relative max-w-[300px] mt-[50px] mx-auto mb-0 w-[70%] md:m-auto md:w-full">
          <div className="block relative w-full rounded bg-main-gray">
            <img src="/images/xportas-img.jpeg" />
          </div>
        </div>

      </div>

      <div className="block mt-7 md:grid md:grid-cols-3 md:gap-12">
        {skills ? Object.entries(skills).map(([category, items]) => {
          return (
            <div key={category}>
              <h6 className="font-header mb-2">{category}</h6>
              <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-x-2.5 p-0 mt-5 overflow-hidden list-none">
                {Object.entries(items).map(([key, value]) => {
                  return (
                    <li
                      key={key}
                      className="relative mb-2.5 pl-5 text-xs before:content-['▹'] before:absolute before:left-0 before:text-secondary-orange before:text-sm before:leading-3"
                    >
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }) : null}
      </div>
    </section>
  );
}