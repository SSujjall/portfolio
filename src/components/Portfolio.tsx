import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="py-1">
      <Title id="portfolio">Portfolio</Title>

      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4
                    w-10/12 md:w-11/12 max-w-[1000px] mx-auto"
      >
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
  );
}

export default Portfolio;
