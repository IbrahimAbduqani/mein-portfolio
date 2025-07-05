import { useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import profileImage from"../public/a63baaff-79bf-4209-a63e-b0ce18a6cf39.png";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("projects");

    const projects = [
        {
            title: "Projekt A",
            description: "Ein interessantes Projekt mit React und Tailwind.",
            url: "https://github.com/deinusername/projekt-a"
        },
        {
            title: "Projekt B",
            description: "Ein Backend-Projekt mit DevOps Tools.",
            url: "https://github.com/IbrahimAbduqani/remsfal-backend"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-100 text-gray-900 p-6 font-sans">
            <header className="text-center py-10">
                <img src={profileImage} alt="Profil" className="mx-auto w-16 h-16 rounded-full shadow-lg mb-4" />
                <h1 className="text-red-600 text-4xl">Test Titel</h1>
                <h1 className="text-4xl font-bold mb-1">Abduqani Ibrahim</h1>
                <p className="text-lg text-gray-600">Full-Stack Entwickler | GitHub Projekte</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:deine.email@example.com" aria-label="Email" className="hover:text-blue-600">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/deinusername" target="_blank" aria-label="GitHub" className="hover:text-blue-600">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/deinusername" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </header>

            <nav className="flex justify-center gap-4 mb-8">
                <button
                    className={`px-5 py-2 rounded-full shadow ${activeTab === "projects" ? "bg-blue-600 text-white" : "bg-white border border-blue-600 text-blue-600"}`}
                    onClick={() => setActiveTab("projects")}
                >
                    Projekte
                </button>
                <button
                    className={`px-5 py-2 rounded-full shadow ${activeTab === "about" ? "bg-blue-600 text-white" : "bg-white border border-blue-600 text-blue-600"}`}
                    onClick={() => setActiveTab("about")}
                >
                    Über mich
                </button>
            </nav>

            {activeTab === "projects" ? (
                <section className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <a
                            key={i}
                            href={project.url}
                            target="_blank"
                            className="block p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </a>
                    ))}
                </section>
            ) : (
                <section className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold mb-4 text-blue-700">Über mich</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ich bin einn leidenschaftlicher Entwickler mit Fokus auf moderne Webtechnologien wie React, Node.js und Tailwind CSS.
                        Mit praktischer Erfahrung in der Entwicklung und Betreuung technischer Systeme bin ich bestrebt, benutzerfreundliche und effiziente Weblösungen zu schaffen.
                    </p>
                </section>
            )}

            <footer className="text-center mt-12 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Abduqani Ibrahim. Alle Rechte vorbehalten.
            </footer>
        </main>
    );
}
