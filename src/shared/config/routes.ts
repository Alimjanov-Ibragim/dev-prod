import { TIcon } from 'shared/lib';

type TRouteItem = {
  icon?: TIcon;
  title: string;
  to: string;
  badgeText?: string;
};

interface TRoute extends TRouteItem {
  sub?: TRouteItem[];
}

export const routes: TRoute[] = [
  {
    icon: 'check2-circle',
    title: 'Tasks',
    to: '/tasks',
  },
  {
    icon: 'check2-square',
    title: 'Deals',
    to: '/deals',
    badgeText: '5',
  },
  {
    icon: 'person',
    title: 'Leads',
    to: '/leads',
  },
  {
    icon: 'people',
    title: 'Contacts',
    to: '/contacts',
    sub: [
      {
        title: 'Companies',
        to: '/companies',
      },
      {
        title: 'Users',
        to: '/users',
      },
      {
        title: 'Clients',
        to: '/clients',
      },
    ],
  },
  {
    icon: 'house-door',
    title: 'Units',
    to: '/units',
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
