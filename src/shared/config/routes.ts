import { AgenciesPage, SingleAgency } from 'pages/agencies';
import { CitiesPage } from 'pages/cities';
import { ClientsPage, SingleClients } from 'pages/clients';
import { CompaniesPage, SingleCompanies } from 'pages/companies';
import { CountriesPage } from 'pages/countries';
import { DealsPage, SingleDeals } from 'pages/deals';
import { DevelopersPage, SingleDeveloperPage } from 'pages/developers';
import { LeadsPage, SingleLeads } from 'pages/leads';
import { ProjectsPage, SingleProjectPage } from 'pages/projects';
import { ReportsPage } from 'pages/reports';
import { TasksPage } from 'pages/tasks';
import { SingleUnit, UnitsPage } from 'pages/units';
import { SingleUser, UsersPage } from 'pages/users';

import { TIcon } from 'shared/lib';

type TRouteItem = {
  isHidden?: boolean;
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
    isHidden: true,
    icon: 'check2-square',
    title: 'Deal',
    to: '/deals/:id',
    badgeText: '5',
    component: SingleDeals,
  },
  {
    icon: 'person',
    title: 'Leads',
    to: '/leads',
    component: LeadsPage,
  },
  {
    isHidden: true,
    icon: 'person',
    title: 'Lead',
    to: '/leads/:id',
    component: SingleLeads,
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
        isHidden: true,
        title: 'Client',
        to: '/clients/:id',
        component: SingleClients,
      },
      {
        title: 'Companies',
        to: '/companies',
        component: CompaniesPage,
      },
      {
        isHidden: true,
        title: 'Company',
        to: '/companies/:id',
        component: SingleCompanies,
      },
      {
        title: 'Users',
        to: '/users',
        component: UsersPage,
      },
      {
        isHidden: true,
        title: 'User',
        to: '/users/:id',
        component: SingleUser,
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
    isHidden: true,
    icon: 'houses',
    title: 'Agency',
    to: '/agencies/:id',
    component: SingleAgency,
  },
  {
    icon: 'house-door',
    title: 'Units',
    to: '/units',
    component: UnitsPage,
  },
  {
    isHidden: true,
    icon: 'house-door',
    title: 'Unit',
    to: '/units/:id',
    component: SingleUnit,
  },
  {
    icon: 'layers',
    title: 'Projects',
    to: '/projects',
    component: ProjectsPage,
  },
  {
    isHidden: true,
    // icon: 'layers',
    title: 'Project',
    to: '/projects/:id',
    component: SingleProjectPage,
  },
  {
    icon: 'building',
    title: 'Developers',
    to: '/developers',
    component: DevelopersPage,
  },
  {
    isHidden: true,
    icon: 'building',
    title: 'Developer',
    to: '/developers/:id',
    component: SingleDeveloperPage,
  },
  {
    icon: 'cloud-download',
    title: 'Reports',
    to: '/reports',
    component: ReportsPage,
  },
  {
    icon: 'globe2',
    title: 'Countries',
    to: '/countries',
    component: CountriesPage,
  },
  {
    icon: 'flag',
    title: 'Cities',
    to: '/cities',
    component: CitiesPage,
  },
];
