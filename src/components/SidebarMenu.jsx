import { NavLink } from "react-router";
import "./SidebarMenu.css";

export default function SidebarMenu() {
  return (
    <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
            <img className="sidebar-item-img" src="dashboard.svg" alt="" />
            <NavLink className="sidebar-item-link" href="#">Dashboard</NavLink>
        </li>
        <li className="sidebar-menu-item">
            <img className="sidebar-item-img" src="property.svg" alt="" />
            <NavLink className="sidebar-item-link" href="#">Properties</NavLink>
        </li>
        <li className="sidebar-menu-item">
            <img className="sidebar-item-img" src="clients.svg" alt="" />
            <NavLink className="sidebar-item-link" href="#">Clients</NavLink>
        </li>
        <li className="sidebar-menu-item">
            <img className="sidebar-item-img" src="settings.svg" alt="" />
            <NavLink className="sidebar-item-link" href="#">Settings</NavLink>
        </li>
    </ul>
  )
}
