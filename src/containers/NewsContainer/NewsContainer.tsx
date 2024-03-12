import News from "../../components/News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./NewsContainer.scss";
import NewsType from "../../types/NewsType";

type NewsContainerProps = {
  articles: NewsType[] | undefined;
}

const NewsContainer = ({articles} : NewsContainerProps) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <div className="article-container">
      <h2 className="article-container__title">What's going on today</h2>
      {articles && Array.isArray(articles) && articles.length > 0 ? (
        <Slider {...settings}>
          {articles.map((article) => (
            <News article={article} />
          ))}
        </Slider>
      ) : (
        <p>Loading articles...</p>
      )}
      </div>
  );
};

export default NewsContainer;
