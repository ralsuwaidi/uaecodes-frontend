import FeaturesItem from './FeaturesItem';

const Features = () => {
  return (
    <div className=" container mx-auto font-ubuntu-mono">
      <div className=" mx-5">
        <div className=" justify-center gap-2 md:grid md:grid-cols-2">
          <FeaturesItem
            img="https://images.unsplash.com/photo-1590764258299-0f91fa7f95e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGV0aXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            text="Log in and battle other developers in a world ending fight to the death"
            title="Competition"
          />
          <FeaturesItem
            img="https://images.unsplash.com/photo-1590764258299-0f91fa7f95e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGV0aXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            text="Log in and battle other developers in a world ending fight to the death"
            title="Mentor"
          />
          <FeaturesItem
            img="https://images.unsplash.com/photo-1590764258299-0f91fa7f95e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGV0aXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            text="Log in and battle other developers in a world ending fight to the death"
            title="Workshop"
          />
          <FeaturesItem
            img="https://images.unsplash.com/photo-1590764258299-0f91fa7f95e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGV0aXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            text="Log in and battle other developers in a world ending fight to the death"
            title="Competition"
          />
        </div>
      </div>
    </div>
  );
};

export { Features };
