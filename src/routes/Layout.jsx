import { useState } from "react"
import SidebarMenu from "../components/SidebarMenu"

export default function Layout() {
  const [collapse, setCollapse] = useState(false)


  return (
    <main>
        <aside className={collapse ? 'collapse' : ''}>
          <button onClick={() => setCollapse(!collapse)}>
            <img src="menu.svg" alt=""/>
          </button>
          <SidebarMenu />
        </aside>
        <nav>
          Navbar
        </nav>
        <section>Content</section>
    </main>
  )
}
