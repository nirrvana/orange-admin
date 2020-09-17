import React from "react";

const UserTable = React.lazy(() => import("./components/users/UserTable"));
const UserDetails = React.lazy(() => import("./components/users/UserDetails"));
const UserEdit = React.lazy(() => import("./components/users/UserEdit"));
const Request = React.lazy(() => import("./components/requests/Request"));

const routes = [
  { path: "/", exact: true },
  { path: "/user", name: "사용자 목록", component: UserTable },
  {
    path: "/show/:id",
    exact: true,
    name: "회원정보",
    component: UserDetails,
  },
  {
    path: "/edit/:id",
    exact: true,
    name: "회원정보수정",
    component: UserEdit,
  },
  { path: "/request", name: "신청현황", component: Request },
];

export default routes;
