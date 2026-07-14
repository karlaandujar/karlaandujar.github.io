import SkillWindow from "../components/SkillWindow";

import languages from "../data/languages";
import tools from "../data/tools";
import ai from "../data/ai";
import "./../styles/skills.css";


function Skills(){

    return (

        <section id="skills">

            <h2>Skills</h2>


            <SkillWindow
                title="languages"
                skills={languages}
            />


            <SkillWindow
                title="tools"
                skills={tools}
            />


            <SkillWindow
                title="ai_ml"
                skills={ai}
            />

        </section>

    );

}


export default Skills;