import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Navbar } from './navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className=" font-ubuntu antialiased">
    {props.meta}

    <Navbar />

    {props.children}

    <Footer />
  </div>
);

export { Main };
