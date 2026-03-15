import styles from './Experience.module.css';
import { work } from '../ExperienceSection'
import { MouseEvent, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
    workExperience: work[]
    activeClass: string
    experienceTitle: string
    setWorkExperience: (event: MouseEvent<HTMLElement>) => void
}

export default function Experience(props: Props) {
    const refKey = useRef(0);

    return (
        <div>
            <h3 className={styles.experience_title}>
                {props.experienceTitle}:
            </h3>
            <div className={styles.experience_list}>
                {props.workExperience.map((work: work) =>
                    <button 
                        key={refKey.current++}
                        className={`${styles[props.visualMode]} ${props.activeClass === work.id ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                        id={work.id}
                        onClick={props.setWorkExperience}
                    >
                            {work.title}
                    </button>
                )}
            </div>
        </div>
    )
}
