import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactFooter.module.css';
import { faBluesky, faDiscord, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function ContactFooter() {
    return (
        <footer >
            <div className={styles.socials}>
                <h3>Socials</h3>
                <div>
                    <a href="https://www.tiktok.com/@jakesaintg" aria-label="Opens in new tab; Link out to Jake's TikTok profile." target="#">
                        <FontAwesomeIcon icon={faTiktok} size="lg" aria-hidden="true"/>
                    </a>
                    <a href="https://bsky.app/profile/jakesaintg.bsky.social" aria-label="Opens in new tab; Link out to Jake's BlueSky profile." target="#">
                        <FontAwesomeIcon icon={faBluesky} size="lg" aria-hidden="true"/>
                    </a>
                    <a href="https://discordapp.com/users/231257566418698251" aria-label="Opens in new tab; Link out to Discord add-friend page." target="#">
                        <FontAwesomeIcon icon={faDiscord} size="lg" aria-hidden="true"/>
                    </a>
                    <a href="https://www.youtube.com/@jakesaintg" aria-label="Opens in new tab; Link out to Jake's YouTube profile." target="#">
                        <FontAwesomeIcon icon={faYoutube} size="lg" aria-hidden="true"/>
                    </a>
                </div>
            </div>

            <div className={styles.contact}> 
                <h3>Contact</h3>

                <a href="mailto:jake@stgermain.dev?subject=I would like to chat!" aria-label="Open default email app; Will start composing new email to jake@stgermain.dev">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" aria-hidden="true"/>
                    &#8287;
                    <span>jake@stgermain.dev</span>  
                </a>

            </div>

            <div className={styles.footer_base}>1993 Jake St. Germain</div>
        </footer>
    );
}
