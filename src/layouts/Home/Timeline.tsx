import { BrutalBtnGreen } from '../Common/Brutal';
import { TimelineItem } from './TimelineItem';

const Timeline = () => {
  return (
    <section className=" bg-black py-16 font-ubuntu-mono text-white">
      <div className="container mx-auto px-5">
        <p className=" mb-5 text-2xl font-bold uppercase md:mb-12 md:text-3xl">
          Timeline
        </p>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <TimelineItem
            title="Application UI code in Tailwind CSS"
            date="February 2022"
            text="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.<"
          >
            <BrutalBtnGreen text="LEARN MORE" />
          </TimelineItem>

          <TimelineItem
            title="Marketing UI design in Figma"
            date="March 2022"
            text="All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
          ></TimelineItem>
          <TimelineItem
            title="Commerce UI code in Tailwind CSS"
            date="April 2022"
            text="Get started with dozens of web components and interactive elements built on top of Tailwind CSS"
          ></TimelineItem>
        </ol>
      </div>
    </section>
  );
};

export { Timeline };
