type IBrutalBtnProps = {
  text: string;
  color: string;
  url?: string;
};

const BrutalBtn = (props: IBrutalBtnProps) => {
  return (
    <div className="my-4 h-7 text-center font-ubuntu-mono font-bold md:h-14">
      <div
        className={
          `relative before:absolute before:top-1.5 before:left-1.5  ` +
          `md:before:h-14 before:h-7 ` +
          `w-36 before:w-36 md:w-44 md:before:w-44 ` +
          `before:bg-neon-${props.color} `
        }
      >
        <a
          href="#"
          className={
            'absolute inset-0 bg-white object-cover outline outline-1 outline-black ' +
            `w-36 md:w-44 md:h-14 h-7`
          }
        >
          <p className="h-full px-6 pt-1 text-sm md:pt-3 md:text-xl">
            {props.text}
          </p>
        </a>
      </div>
    </div>
  );
};
export { BrutalBtn };
