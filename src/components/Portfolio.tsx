import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="main-container py-5 md:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Title id="portfolio">Portfolio</Title>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
          {portfolio.map((project, index) => (
            <PortfolioItem
              key={index}
              index={index}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
