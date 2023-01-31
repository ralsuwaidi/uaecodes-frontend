import { Centennial } from '@/layouts/About/Centennial';
import { Hero } from '@/layouts/About/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Hero />
    <Centennial />
  </Main>
);

export default About;
