import { AgenciesPage } from 'pages/agencies';
import { ClientsPage } from 'pages/clients';
import { CompaniesPage } from 'pages/companies';
import { DealsPage } from 'pages/deals';
import { LeadsPage } from 'pages/leads';
import { TasksPage } from 'pages/tasks';
import { UnitsPage } from 'pages/units';
import { UsersPage } from 'pages/users';

import { TIcon } from 'shared/lib';

type TRouteItem = {
  icon?: TIcon;
  title: string;
  to: string;
  badgeText?: string;
  component?: React.ComponentClass | React.FunctionComponent;
};

interface TRoute extends TRouteItem {
  sub?: TRouteItem[];
}

export const routes: TRoute[] = [
  {
    icon: 'check2-circle',
    title: 'Tasks',
    to: '/tasks',
    component: TasksPage,
  },
  {
    icon: 'check2-square',
    title: 'Deals',
    to: '/deals',
    badgeText: '5',
    component: DealsPage,
  },
  {
    icon: 'person',
    title: 'Leads',
    to: '/leads',
    component: LeadsPage,
  },
  {
    icon: 'people',
    title: 'Contacts',
    to: '/contacts',
    sub: [
      {
        title: 'Clients',
        to: '/clients',
        component: ClientsPage,
      },
      {
        title: 'Companies',
        to: '/companies',
        component: CompaniesPage,
      },
      {
        title: 'Users',
        to: '/users',
        component: UsersPage,
      },
    ],
  },
  {
    icon: 'houses',
    title: 'Agencies',
    to: '/agencies',
    component: AgenciesPage,
  },
  {
    icon: 'house-door',
    title: 'Units',
    to: '/units',
    component: UnitsPage,
  },
  {
    icon: 'layers',
    title: 'Projects',
    to: '/projects',
  },
  {
    icon: 'building',
    title: 'Developers',
    to: '/developers',
  },
  {
    icon: 'cloud-download',
    title: 'Reports',
    to: '/reports',
  },
  {
    icon: 'globe2',
    title: 'Countries',
    to: '/countries',
  },
  {
    icon: 'flag',
    title: 'Cities',
    to: '/cities',
  },
];
