import type { ReactNode } from 'react';

import { Footer } from './footer';
import { Header } from './header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className=" font-ubuntu antialiased">
    {props.meta}

    <Header />

    {props.children}

    <Footer />
  </div>
);

export { Main };
