import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'organizer',
        path: '/app/organizer',
        component: React.lazy(() => import('views/organizer/OrganizerList')),
        authority: [],
    },
    {
        key: 'organizer',
        path: '/app/organizer/organizer-new',
        component: React.lazy(() => import('views/organizer/OrganizerNew')),
        authority: [],
    },
    {
        key: 'organizer',
        path: '/app/organizer/organizer-edit',
        component: React.lazy(() => import('views/organizer/OrganizerEdit')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: React.lazy(() => import('views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() =>
            import('views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
