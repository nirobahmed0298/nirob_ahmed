import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://protfolio-of-nirob-ahmed-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#12F7FF]"></div>
            </div>
        );
    }

    return (
        <div id="projects" data-aos="fade-up" data-aos-duration="3000" className="pb-16 px-4 lg:px-12">
            <h1 className="text-left font-bold text-2xl md:text-4xl py-6 text-[#12F7FF]">
                My Projects
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="flex flex-col bg-white rounded shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden border border-gray-200"
                    >
                        {/* Image */}
                        <div className="relative w-full h-56 sm:h-64 md:h-72">
                            <img
                                src={project.WebsiteImage}
                                alt={project.WebsiteName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-5">
                            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                                {project.WebsiteName}
                            </h2>
                            <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-2">
                                {project.WebsiteDes}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    to={`/details/${project._id}`}
                                    className="w-full flex justify-center items-center gap-2 rounded-none text-black border-[1px] border-black font-semibold px-4 py-2 bg-gradient-to-r from-[#12F7FF] to-[#1F7FF] hover:opacity-90 transition"
                                >
                                    View Details <FaExternalLinkAlt />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
