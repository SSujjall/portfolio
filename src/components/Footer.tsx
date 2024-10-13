import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="py-5 text-center">
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/sujal-maharjan/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/SSujjall" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Sujal Maharjan. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;