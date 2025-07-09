import { useState } from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import profileImage from "../public/a63baaff-79bf-4209-a63e-b0ce18a6cf39.png";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("projects");

    const projects = [
        {
            title: "Projekt A",
            description: "Ein interessantes Projekt mit React und Tailwind.",
            url: "https://github.com/deinusername/projekt-a",
            tags: ["React", "Tailwind", "Frontend"]
        },
        {
            title: "Projekt B",
            description: "Ein Backend-Projekt mit DevOps Tools.",
            url: "https://github.com/IbrahimAbduqani/remsfal-backend",
            tags: ["Node.js", "DevOps", "Backend"]
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 p-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="text-center py-10">
                    <img
                        src={profileImage}
                        alt="Profil"
                        className="mx-auto w-32 h-32 rounded-full shadow-lg mb-4 border-4 border-white"
                    />
                    <h1 className="text-4xl font-bold mb-2 text-gray-800">Abduqani Ibrahim</h1>
                    <p className="text-xl text-gray-600 mb-6">Full-Stack Entwickler</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                            href="mailto:deine.email@example.com"
                            aria-label="Email"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/deinusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/deinusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </header>

                <nav className="flex justify-center gap-4 mb-12">
                    <button
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                            activeTab === "projects"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                        }`}
                        onClick={() => setActiveTab("projects")}
                    >
                        Projekte
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                            activeTab === "about"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                        }`}
                        onClick={() => setActiveTab("about")}
                    >
                        Über mich
                    </button>
                </nav>

                {activeTab === "projects" ? (
                    <section className="grid gap-8 md:grid-cols-2">
                        {projects.map((project, i) => (
                            <a
                                key={i}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </section>
                ) : (
                    <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Über mich</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ich bin ein leidenschaftlicher Full-Stack Entwickler mit Fokus auf moderne Webtechnologien.
                                Meine Expertise umfasst React, Node.js, und Tailwind CSS.
                            </p>
                            <p>
                                Mit praktischer Erfahrung in der Entwicklung und Betreuung technischer Systeme bin ich bestrebt,
                                benutzerfreundliche und effiziente Weblösungen zu schaffen.
                            </p>
                            <p>
                                Neben der Entwicklung interessiere ich mich für UI/UX Design und DevOps-Praktiken.
                            </p>
                        </div>
                    </section>
                )}

                <footer className="text-center mt-16 py-6 text-sm text-gray-500 border-t border-gray-200">
                    &copy; {new Date().getFullYear()} Abduqani Ibrahim. Alle Rechte vorbehalten.
                </footer>
            </div>
        </main>
    );
}