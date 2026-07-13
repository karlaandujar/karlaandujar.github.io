import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./ProjectCard.css";

function ProjectCard({ project }) {

    // State to track if card is flipped or not
    const [isFlipped, setIsFlipped] = useState(false);
    // State to track current image in image carousel
    const [currImage, setCurrImage] = useState(0);

    return (
        <>
            <motion.div
                className="project-card"

                whileHover={{
                    y: -8,
                    scale: 1.02
                }}

                whileTap={{
                    scale: .98
                }}

                onClick={() => setIsFlipped(true)}
            >

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                    {project.tech.map((t) => (

                        <span
                            className="tech"
                            key={t}
                        >
                            {t}
                        </span>

                    ))}

                </div>

                <p className="open-file">

                    Open {project.title}.jsx →

                </p>

            </motion.div>


            <AnimatePresence>

                {isFlipped && (

                    <motion.div

                        className="overlay"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        onClick={() => setIsFlipped(false)}

                    >

                        <motion.div

                            className="project-card-expanded"

                            initial={{
                                rotateY: -90,
                                scale: .75,
                                opacity: 0
                            }}

                            animate={{
                                rotateY: 0,
                                scale: 1,
                                opacity: 1
                            }}

                            exit={{
                                rotateY: 90,
                                scale: .75,
                                opacity: 0
                            }}

                            transition={{
                                duration: .45
                            }}

                            onClick={(e) => e.stopPropagation()}

                        >

                            <button
                                className="close-btn"
                                onClick={() => setIsFlipped(false)}
                            >

                                ✕

                            </button>

                            <h2>{project.title}</h2>

                            <h3>Inspiration</h3>

                            <p>{project.inspiration}</p>

                            <h3>Tech Stack</h3>

                            <div className="tech-stack expanded-tech">

                                {project.tech.map((t) => (

                                    <span
                                        key={t}
                                        className="tech"
                                    >
                                        {t}
                                    </span>

                                ))}

                            </div>

                            <h3>Screenshots</h3>

                            <div className="carousel">

                                <button
                                    onClick={() =>
                                        setCurrImage(
                                            currImage === 0
                                            ? project.images.length - 1
                                            : currImage - 1
                                        )
                                    }
                                >
                                    ←
                                </button>


                                <div className="image-container">

                                    <img
                                        src={project.images[currImage]}
                                        alt={`${project.title} screenshot`}
                                    />


                                    <div className="dots">

                                        {project.images.map((_, index) => (

                                            <span
                                                key={index}
                                                className={
                                                    index === currImage
                                                    ? "active-dot"
                                                    : ""
                                                }
                                            />

                                        ))}

                                    </div>

                                </div>


                                <button
                                    onClick={() =>
                                        setCurrImage(
                                            currImage === project.images.length - 1
                                            ? 0
                                            : currImage + 1
                                        )
                                    }
                                >
                                    →
                                </button>

                            </div>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >

                                View on GitHub →

                            </a>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    );

}

export default ProjectCard;