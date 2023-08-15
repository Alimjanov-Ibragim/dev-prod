import { Header, Sidebar } from 'widgets/global';
import { Layout } from 'shared/ui';

export const baseLayout = (
  <Layout sidebarSlot={<Sidebar />} header={<Header />} />
);
