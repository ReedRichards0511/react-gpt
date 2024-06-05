import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <>
      <div>Dashboard</div>
      <Outlet />
    </>
  )
}