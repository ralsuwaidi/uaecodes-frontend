import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

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

    <div className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
      {/*
       * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
       */}
    </div>
  </div>
);

export { Main };
