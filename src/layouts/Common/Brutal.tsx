type IBrutalBtnProps = {
  text: string;
  small?: boolean;
  url?: string;
};

type IBrutalPillProps = {
  text: string;
  dark?: boolean;
};

const BrutalBtn = (props: IBrutalBtnProps) => {
  return (
    <div className="my-4 h-6 text-center font-ubuntu-mono font-bold md:h-14">
      <div
        className={
          `relative before:absolute before:top-1.5 before:left-1.5 md:before:top-2 md:before:left-2  ` +
          `md:before:h-14 before:h-6 ` +
          `w-28 before:w-28 md:w-44 md:before:w-44 ` +
          `before:bg-neon-red `
        }
      >
        <a
          href="#"
          className={
            'absolute inset-0 bg-white object-cover outline outline-1 md:outline-2 outline-black ' +
            `w-28 md:w-44 md:h-14 h-6`
          }
        >
          <p className="pt-1 text-xs md:pt-3 md:text-xl">{props.text}</p>
        </a>
      </div>
    </div>
  );
};

const BrutalBtnGreen = (props: IBrutalBtnProps) => {
  return (
    <div className="my-4 h-6 text-center font-ubuntu-mono font-bold text-black md:h-14">
      <div
        className={
          `relative before:absolute before:top-1.5 before:left-1.5 md:before:top-2 md:before:left-2  ` +
          `md:before:h-14 before:h-6 ` +
          `w-28 before:w-28 md:w-44 md:before:w-44 ` +
          `before:bg-neon-green `
        }
      >
        <a
          href="#"
          className={
            'absolute inset-0 bg-white object-cover outline outline-1 md:outline-2 outline-black ' +
            `w-28 md:w-44 md:h-14 h-6`
          }
        >
          <p className="pt-1 text-xs md:pt-3 md:text-xl">{props.text}</p>
        </a>
      </div>
    </div>
  );
};

const BrutalBtnSmall = (props: IBrutalBtnProps) => {
  return (
    <div className="my-4 h-6 text-center font-ubuntu-mono font-bold ">
      <div
        className={
          `relative before:absolute before:top-1.5 before:left-1.5  ` +
          ` before:h-6 ` +
          `w-28 before:w-28  ` +
          `before:bg-neon-red `
        }
      >
        <a
          href="#"
          className={
            'absolute inset-0 bg-white object-cover outline outline-1 outline-black ' +
            `w-28 h-6`
          }
        >
          <p className="pt-1 text-xs ">{props.text}</p>
        </a>
      </div>
    </div>
  );
};

const BrutalPill = (props: IBrutalPillProps) => {
  const borderColor = props.dark ? 'border-white' : 'border-black';
  return (
    <div>
      <a
        className={`border-2  bg-neon-purple px-2 text-xs font-semibold uppercase tracking-wider text-white md:text-sm ${borderColor}`}
      >
        {props.text}
      </a>
    </div>
  );
};

export { BrutalBtn, BrutalBtnGreen, BrutalBtnSmall, BrutalPill };
