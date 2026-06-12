import { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Plant Shop App",
      description:
        "A React application for browsing, searching, and managing plants.",
      category: "React",
      image: "https://picsum.photos/400/250?1",
    },
    {
      id: 2,
      title: "Movie Finder",
      description:
        "Search and discover movies using a public movie API.",
      category: "API Integration",
      image: "https://picsum.photos/400/250?2",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A productivity application for managing daily tasks.",
      category: "JavaScript",
      image: "https://picsum.photos/400/250?3",
    },
  ]);

  const [search, setSearch] = useState("");

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      id: Date.now(),
      ...newProject,
    };

    setProjects([...projects, project]);

    setNewProject({
      title: "",
      description: "",
      category: "",
      image: "",
    });
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Joshua Magolo Portfolio</h1>
        <p>
          A collection of projects showcasing my skills in React,
          JavaScript, API integration, and modern web development.
        </p>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search projects by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Add Project Form */}
      <section className="form-section">
        <h2>Add New Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={newProject.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newProject.category}
            onChange={handleChange}
            required
          />

          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={newProject.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={newProject.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Project</button>
        </form>
      </section>

      {/* Project Cards */}
      <section className="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div className="card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="category">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p>No projects found.</p>
        )}
      </section>
    </div>
  );
}

export default App;

