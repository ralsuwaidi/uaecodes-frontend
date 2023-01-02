type IBrutalBtnProps = {
  text: string;
  color: string;
  url?: string;
};

const BrutalBtn = (props: IBrutalBtnProps) => {
  return (
    <div className="my-4 h-14 text-center font-ubuntu-mono font-bold">
      <div
        className={
          `relative before:absolute before:top-2 before:left-2  ` +
          `before:h-14 ` +
          `w-44 before:w-44 ` +
          `before:bg-neon-${props.color} `
        }
      >
        <a
          href="#"
          className={
            'absolute inset-0 bg-white object-cover outline outline-1 outline-black ' +
            `w-44 h-14`
          }
        >
          <p className="my-3 px-6">{props.text}</p>
        </a>
      </div>
    </div>
  );
};
export { BrutalBtn };
