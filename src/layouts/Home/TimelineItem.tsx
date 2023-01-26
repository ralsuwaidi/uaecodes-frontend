import type { ReactNode } from 'react';

type ITimelineItemProps = {
  date: string;
  title: string;
  text: string;
  children?: ReactNode;
};

const TimelineItem = (props: ITimelineItemProps) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
        {props.date}
      </time>
      <h3 className="text-lg font-semibold uppercase text-white">
        {props.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-400">{props.text}</p>

      {props.children}
    </li>
  );
};

export { TimelineItem };
