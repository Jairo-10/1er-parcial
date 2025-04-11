import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),

        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'inventory',
                loadComponent: () => import('./business/inventory/inventory.component')
            },
            {
                path: 'products',
                loadComponent: () => import('./business/products/products.component')
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'user',
                loadComponent: () => import('./business/user/user.component')
            },
            {
                path: 'brand',
                loadComponent: () => import('./business/brand/brand.component')
            },
            {
                path: 'category',
                loadComponent: () => import('./business/category/category.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]

    },
    //Redireccionar al Dashboard si direccionan a cualquier ruta des conocida
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
