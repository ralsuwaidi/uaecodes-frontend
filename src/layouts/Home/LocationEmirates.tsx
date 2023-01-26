type ILocationProps = {
  emirate: string;
  locations: string[];
};

const LocationEmirates = (props: ILocationProps) => {
  return (
    <div className="mb-5">
      <p className="text-lg font-bold uppercase">{props.emirate}</p>
      {props.locations.map((location) => (
        <p key={location} className="text-sm">
          - {location}
        </p>
      ))}
    </div>
  );
};

export { LocationEmirates };
