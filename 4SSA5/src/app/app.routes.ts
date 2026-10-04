import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'conferences',
	},
	{
		path: 'home',
		loadComponent: () => import('./home/home').then((module) => module.Home),
	},
	{
		path: 'conferences',
		loadComponent: () =>
			import('./list-conference/list-conference').then(
				(module) => module.ListConference,
			),
	},
	{
		path: '**',
		redirectTo: 'conferences',
	},
];
