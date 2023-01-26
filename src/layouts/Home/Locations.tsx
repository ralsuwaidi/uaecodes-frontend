import { useRouter } from 'next/router';

import { LocationEmirates } from './LocationEmirates';

const ABU_DHABI = {
  name: 'Abu Dhabi',
  locations: ['Marmoum', 'Hatta'],
};
const DUBAI = {
  name: 'Dubai',
  locations: ['Marmoum', 'Hatta'],
};
const SHARJAH = {
  name: 'Sharjah',
  locations: ['Marmoum', 'Hatta'],
};
const AJMAN = {
  name: 'Ajman',
  locations: ['Marmoum', 'Hatta'],
};
const UMM = {
  name: 'Um Al Quwain',
  locations: ['Marmoum', 'Hatta'],
};
const RAS = {
  name: 'RAS',
  locations: ['Marmoum', 'Hatta'],
};
const FUJAIRAH = {
  name: 'Fujairah',
  locations: ['Marmoum', 'Hatta'],
};

const Locations = () => {
  const router = useRouter();

  return (
    <section className=" mt-16 font-ubuntu-mono dark:bg-gray-900 md:mt-40">
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <p className=" pb-10 text-xl font-bold uppercase md:pb-10 lg:text-4xl">
          Locations
        </p>
        <div className="mx-auto max-w-xl">
          <img
            src={`${router.basePath}/assets/images/uae-map.png`}
            alt="mockup"
          />
        </div>
      </div>
      <div className=" bg-neon-green">
        <div className="container mx-auto px-4">
          <div className="mx-auto p-5">
            <div className="grid grid-cols-2  gap-2 md:grid-cols-4 md:gap-4">
              <LocationEmirates
                emirate={ABU_DHABI.name}
                locations={ABU_DHABI.locations}
              />
              <LocationEmirates
                emirate={DUBAI.name}
                locations={DUBAI.locations}
              />
              <LocationEmirates
                emirate={SHARJAH.name}
                locations={SHARJAH.locations}
              />
              <LocationEmirates
                emirate={AJMAN.name}
                locations={AJMAN.locations}
              />
              <LocationEmirates emirate={UMM.name} locations={UMM.locations} />
              <LocationEmirates emirate={RAS.name} locations={RAS.locations} />
              <LocationEmirates
                emirate={FUJAIRAH.name}
                locations={FUJAIRAH.locations}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Locations };
