import styles from './ProjectsSection.module.css'
import { PageSection } from '../General/PageSection';
import projects from '../../assets/projects.json'
import Project from './Project/Project';
import { project } from './Project/Project';
import { useRef, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

let displayedProjects: project[] = [];

export function ProjectsSection(props: Props) {
    const refKey = useRef(0);

    const [allProjectsShown, setAllProjectsShown] = useState(false);

    if (!allProjectsShown) {
        displayedProjects = projects.reduce(
            (acc, proj) => {
                if(proj.favorite) acc.push(proj);
                return acc;
            }, [] as project[] 
        )
    } else {
        displayedProjects = projects.sort((x, y) => (x.favorite === y.favorite)? 0 : x? -1 : 1);
    }

    return (
        <PageSection title='Projects' id="projectsSection" style={contentStyle} visualMode={props.visualMode}>
            <p className={styles.projects_desc}>
                I like to stay busy! Especially when something I find something challenging, new, or intresting to work on. You'll find projects with all kinds of different technologies, languages, or applications here! Don't worry about how many of them are Pokémon based. 😅 I also called out some of my favorites. Also, open source contrabution? cashmere?
            </p>
            <span className={styles.show_all_check}>
                <label htmlFor="show_favorite">Show only Jake's favorites</label>
                <input type="checkbox" name="show_favorite" value="show" onChange={() => setAllProjectsShown(!allProjectsShown)} defaultChecked={true}/>
            </span>
            <div className={`${styles.projects} ${styles[props.visualMode]}`}>
                {displayedProjects.map((proj: project) =>
                    <Project visualMode={props.visualMode} key={refKey.current++} project={proj}/>
                )}
            </div>
        </PageSection>
    );
}
