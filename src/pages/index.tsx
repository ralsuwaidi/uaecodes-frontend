import { About } from '@/layouts/Home/About';
import { Features } from '@/layouts/Home/Features';
import { Hero } from '@/layouts/Home/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Hero />
      <About />
      <Features />
    </Main>
  );
};

export default Index;