import { useRouter } from 'next/router';

import { BrutalBtn } from '../Common/Brutal';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="bg-neon-gray font-ubuntu-mono dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl grid-cols-12 gap-0 px-4 py-8 lg:gap-8 xl:py-16">
        <div className="col-span-5 mr-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            UAE Codes
          </h1>
          <p className="mb-6 max-w-2xl text-sm font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Where UAE Codes
          </p>

          <BrutalBtn text="Join" />
        </div>
        <div className=" col-span-7  ">
          <img
            src={`${router.basePath}/assets/images/uae-map.png`}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
