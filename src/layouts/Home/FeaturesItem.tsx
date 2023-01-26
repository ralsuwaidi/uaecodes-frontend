import { BrutalBtn } from '../Common/Brutal';

type IFeatureItemProps = {
  title: string;
  text: string;
  img: string;
};

const FeaturesItem = (props: IFeatureItemProps) => {
  return (
    <div className=" mx-0 mb-5  md:mx-8 md:mb-8">
      <img className="h-64 w-full object-cover" src={props.img} alt="" />
      <p className="mt-5 text-lg font-bold uppercase md:text-2xl">
        {props.title}
      </p>
      <p className=" text-xs md:text-base">{props.text}</p>
      <div className="flex">
        <div className=" mt-0 justify-center md:mt-5">
          <BrutalBtn text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
