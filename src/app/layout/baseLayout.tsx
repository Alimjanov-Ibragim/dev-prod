import { Layout } from 'shared/ui';
import { Header } from './header';
import { Sidebar } from './sidebar';

export const baseLayout = (
  <Layout sidebarSlot={<Sidebar />} header={<Header />} />
);
