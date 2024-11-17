import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    fetch('http://api.spaceflightnewsapi.net/v4/articles', { mode: 'no-cors'})
      .then(response => {
        console.log(response)
        response.json()
      })
      .then(data => setArticles(data.results))
      .catch(error => console.error("Error fetching articles."))
  }, []) 

  return (
    <>
      <h1>Latest Space News</h1>
      { articles ? (
        <ul>
          { articles.map (article => (
            <li key={article.id}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Fetching news articles...</p>
      )}
      
    </>
  )
}

export default App
