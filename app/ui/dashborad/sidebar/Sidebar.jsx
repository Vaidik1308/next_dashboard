import React from 'react'
import UserProfile from './UserProfile'
import MenuLink from './MenuLink';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";



const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
      {
        title: "Logout",
        path: "/",
        icon: <MdLogout  />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className='bg-[#1A2238] w-full min-h-screen h-full'>
      <div>
        <UserProfile/>
      </div>
      <ul className=' items-start gap-7 w-[88%] flex flex-col mx-auto '>
        {
          menuItems.map(cat => (
            <li className='flex flex-col gap-4 w-[100%]' key={cat.title}>
              <span className='text-[15]'>
                {cat.title}
              </span>
              {cat.list.map(item => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Sidebar