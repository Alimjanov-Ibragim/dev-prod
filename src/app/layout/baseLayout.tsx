import React from 'react';
import { Layout } from 'shared/ui/Layout/Layout';
import { Sidebar } from './sidebar';

export const baseLayout = <Layout sidebarSlot={<Sidebar />} />;
