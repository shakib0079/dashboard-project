import { useState } from "react"

export default function Layout() {
  const [collapse, setCollapse] = useState(false)


  return (
    <main>
        <aside className={collapse ? 'collapse' : ''}>
          <button onClick={() => setCollapse(!collapse)}>Toggle</button>
        </aside>
        <nav>
          Navbar
        </nav>
        <section>Content</section>
    </main>
  )
}
