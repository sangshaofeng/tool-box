import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import BinaryConversion from '@/pages/BinaryConversion'
import ASCIItable from '@/pages/ASCIItable'

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: 'binary-conversion',
        name: 'BinaryConversion',
        component: BinaryConversion
      },
      {
        path: 'ascii-table',
        name: 'ASCIItable',
        component: ASCIItable
      }
    ]
  }
];

export default routes;
