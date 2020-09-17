import React from "react";
import CIcon from "@coreui/icons-react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "사용자 목록",
    to: "/user",
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "신청현황",
    to: "/request",
    icon: <CIcon name="cil-spreadsheet" customClasses="c-sidebar-nav-icon" />,
  },
];

