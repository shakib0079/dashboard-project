import { useState } from "react"

export default function Layout() {
  const [collapse, setCollapse] = useState(false)


  return (
    <main>
        <aside className={collapse ? 'collapse' : ''}>
          <button onClick={() => setCollapse(!collapse)}>
            <img src="menu.svg" alt=""/>
          </button>
          {/* Sidebar Menu */}
        </aside>
        <nav>
          Navbar
        </nav>
        <section>Content</section>
    </main>
  )
}
