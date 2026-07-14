import "./SkillWindow.css";

function SkillWindow({ title, skills, type }) {

    return (
        <div className="skill-window">

            <div className="window-header">

                <div className="window-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <p>{title}.js</p>

            </div>


            <div className="window-content">

                <p className="code-line">
                    const {title} = [
                </p>


                <div className="skill-track">

                    {[...skills, ...skills].map((skill) => (

                        <div className="skill-item" key={skill.name || skill}>

                            {skill.image && (
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                />
                            )}

                            <span>
                                {skill.name || skill}
                            </span>

                        </div>

                    ))}

                </div>


                <p className="code-line">
                    ];
                </p>

            </div>

        </div>
    );

}

export default SkillWindow;