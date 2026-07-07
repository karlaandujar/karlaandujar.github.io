function Sidebar() {

  const sections = [
    { name: "about.js", id: "about" },
    { name: "skills.js", id: "skills" },
    { name: "projects.js", id: "projects" },
    { name: "experience.js", id: "experience" },
    { name: "contact.js", id: "contact" },
  ];


  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }


  return (
    <aside className="sidebar">

      <p>EXPLORER</p>

      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            📄 {section.name}
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default Sidebar;