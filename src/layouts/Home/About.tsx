import { BrutalBtn } from '../Common/Brutal';

const About = () => {
  return (
    <section className=" my-16 font-ubuntu-mono dark:bg-gray-900 md:my-40">
      <div className="container mx-auto px-4">
        <div className="justify-center gap-2 md:grid md:grid-cols-2">
          <div className="mx-5 mb-6 self-center justify-self-end border-r-2  border-gray-400 md:mb-0">
            <img
              src={
                'https://aicdn.sgp1.cdn.digitaloceanspaces.com/aiocdn/logo/uae-codes/bilingual/UAE-Codes-Color-Logo.png'
              }
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className=" pb-5 text-xl font-bold uppercase md:pb-10 lg:text-3xl">
              What Is UAE Codes
            </p>
            <p className="text-xs lg:text-base">
              This is UAE Codes information. Lorem Ipsum whatever this is just
              text to Lorem Ipsum whatever this is just text to Lorem Ipsum
              whatever this is just text to Lorem Ipsum whatever this is just
              text to Lor
            </p>
            <div className="pt-5">
              <BrutalBtn text="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
