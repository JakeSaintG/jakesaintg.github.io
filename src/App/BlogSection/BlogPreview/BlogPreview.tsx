import { useRef } from 'react';
import styles from './BlogPreview.module.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
    displayBlog: (id: string) => void;
    blog: blog;
}

export interface blog {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    tags: string[];
    markdown: string;
    visible: boolean;
}

export default function BlogPreview(props: Props) {
    const postDate = new Date(
        parseInt(props.blog.publish_date) * 1000
    ).toLocaleDateString();
    const refKey = useRef(0);
    let tags = props.blog.tags;

    if (tags.length >= 6) tags = tags.slice(0, 6);

    return (
        <div
            className={`${styles.blog_preview} ${styles[props.visualMode]}`}
            onClick={() => props.displayBlog(props.blog.id)}
        >
            <h3>{props.blog.title}</h3>
            <p>{postDate}</p>
            <div className={styles.tags}>
                {tags.map((tag) => (
                    <p key={refKey.current++}>{tag}</p>
                ))}
            </div>
        </div>
    );
}
