import { useEffect, useState } from 'react'
import './App.scss'
import Welcome from './components/Welcome/Welcome'
import NewsContainer from './containers/NewsContainer/NewsContainer'
import SocialPlanContainer from './containers/SocialPlanContainer/SocialPlanContainer'
import WeatherContainer from './containers/WeatherContainer/WeatherContainer'
import NewsType from './types/NewsType'

function App() {
  const [articles, setArticles] = useState<NewsType[]>();

  const fetchArticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=64f4197889a0484bab23c387b0102514`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
    <Welcome />
    <WeatherContainer />
    <NewsContainer articles={articles} />
    <SocialPlanContainer />
    </>
  )
}

export default App
