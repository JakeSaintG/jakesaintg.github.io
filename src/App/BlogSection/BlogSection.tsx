import { useEffect, useRef, useState } from 'react';
import styles from './BlogSection.module.css';
import { PageSection } from '../General/PageSection';
import blogs from '../../assets/blogs.json';
import { blog } from './BlogPreview/BlogPreview';
import BlogPreview from './BlogPreview';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

const contentStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

const blogPreviews = blogs.reduce((acc, proj) => {
    if (proj.visible) acc.push(proj);
    return acc;
}, [] as blog[]);

export function BlogSection(props: Props) {
    const { visualMode } = props;
    const refKey = useRef(0);

    const [isBlogDisplayed, setIsBlogDisplayed] = useState(false);
    const [displayedBlogId, setDisplayedBlogId] = useState('');
    const [displayedMarkdown, setDisplayedMarkdown] = useState('');

    const displayedBlog: blog | undefined = blogPreviews.find((b) => b.id === displayedBlogId);

    const toggleIsBlogDisplayed = (id: string = '') => {
        if (id !== '') setDisplayedBlogId(id);
        setIsBlogDisplayed(!isBlogDisplayed);
    };

    useEffect(() => {
        if (isBlogDisplayed && displayedBlog !== undefined) {
            fetch(displayedBlog.markdown)
                .then((response) => {
                    return response.text();
                })
                .then((text) => {
                    setDisplayedMarkdown(text);
                });
        }
    }, [isBlogDisplayed]);

    if (isBlogDisplayed) {
        const date = new Date(parseInt(displayedBlog!.publish_date) * 1000).toDateString();

        return (
            <PageSection title="Blog" id="blogSection" style={contentStyle} visualMode={visualMode} >
                <div className={styles.blog_header}>
                    <button className={styles[visualMode]} onClick={() => toggleIsBlogDisplayed()} aria-label="go back">
                        <FontAwesomeIcon icon={faArrowLeftLong} size='xl' aria-hidden="true" aria-label="back"/>
                    </button>
                    <h2>{displayedBlog?.title}</h2>
                    <p>{date}</p>
                </div>
                <div className={`${styles.blog_indentation} ${styles.blog_markdown} ${styles[visualMode]}`}>
                    <Markdown>{displayedMarkdown}</Markdown>
                </div>
            </PageSection>
        );
    } else {
        return (
            <PageSection title="Blog" id="blogSection" style={{}} visualMode={visualMode}>
                <div className={`${styles.blog_indentation} ${styles.preview} ${styles[visualMode]}`}>
                    <div>
                        {blogPreviews.map((b: blog) => (
                            <BlogPreview
                            visualMode={props.visualMode}
                            displayBlog={toggleIsBlogDisplayed}
                            key={refKey.current++}
                            blog={b}
                            ></BlogPreview>
                        ))}
                    </div>
                </div>
            </PageSection>
        );
    }
}
