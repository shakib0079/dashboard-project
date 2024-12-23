import { useState } from "react"

export default function Layout() {
  const [collapse, setCollapse] = useState(false)


  return (
    <main>
        <aside className={collapse ? 'collapse' : ''}>Sidebar</aside>
        <nav>
          <button onClick={() => setCollapse(!collapse)}>Collaspe</button>
        </nav>
        <section>Content</section>
    </main>
  )
}
