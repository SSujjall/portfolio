import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="border-t border-stone-200 dark:border-stone-700 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center space-x-5 mb-4">
          <a
            href="https://www.linkedin.com/in/sujal-maharjan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/SSujjall"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        <p className="text-xs text-stone-400 dark:text-stone-500">
          &copy; {new Date().getFullYear()} Sujal Maharjan
        </p>
      </div>
    </div>
  );
}

export default Footer;
