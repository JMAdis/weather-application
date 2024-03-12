import "./News.scss"
import bbcNews from "../../assets/news_outlets/BBC_News_2022_(Alt).svg.png"
import independent from "../../assets/news_outlets/independent-logo.png"
import eveningStandard from "../../assets/news_outlets/THE-STANDARD-LOGO.png"
import skyNews from "../../assets/news_outlets/Sky-News-Logo.png"
import guardian from "../../assets/news_outlets/The_Guardian_2018.svg.png"
import theSun from "../../assets/news_outlets/The_Sun.svg.png"
import theTimes from "../../assets/news_outlets/times-black-logo.png"
import financialTimes from "../../assets/news_outlets/financial times.jpg"
import dailyMail from "../../assets/news_outlets/Daily-Mail-logo2.png"
import mirror from "../../assets/news_outlets/mirror-logo.png"
import forbes from "../../assets/news_outlets/Forbes_logo.svg.png"
import newsDefault from "../../assets/news_outlets/news-4308-1.svg"
import NewsType from "../../types/NewsType"


type NewsProps = {
  article: NewsType
};

const truncateHeadline = (headline : string, maxLength: number): string => {
  if (headline.length <= maxLength) {
    return headline;
  }
  return headline.slice(0, maxLength) + "...";
};

const formatDate = (dateString: string) : string => {
  const options = {day: "numeric", month: "numeric", year: "numeric"};
  const formattedDate = new Date(dateString).toLocaleString("en-GB");
  return formattedDate;
}


const sourceLogos: Record<string, string> = {
  "BBC": bbcNews,
  "BBC.com": bbcNews,
  "The Independent": independent,
  "Evening Standard": eveningStandard,
  "The Sun": theSun,
  "The Guardian": guardian,
  "The Times": theTimes,
  "Sky News": skyNews,
  "Financial Times": financialTimes,
  "Daily Mail": dailyMail,
  "The Mirror": mirror,
  "Forbes": forbes,
  "Other": newsDefault
};

const News = ({article} : NewsProps) => {
  const {title, publishedAt, url, author} = article;

 const sourceLogo = sourceLogos[author] || newsDefault;

  return (
    <div className='news-container'>
      <a href={url} target="_blank">
        <img src={sourceLogo} alt="BBC News Logo" className='news-container__image' />
      </a>
      <h3 className='news-container__heading news-container__text'>{truncateHeadline(title, 80)}</h3>
        <p className='news-container__text'>Date published: {formatDate(publishedAt)}</p>
    </div>
  )
}

export default News