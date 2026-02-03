import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../Components/NewsCard'

const Catagory = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const [category, setCategoryNews] = useState([])

  useEffect(() => {
    if (!Array.isArray(data)) return

    if (id === '0') {
      setCategoryNews(data)
    }
    else if (id === '1') {
      const DataNews = data.filter(
        news => news.others?.is_today_pick === true
      )
      setCategoryNews(DataNews)
    }
    else {
      const DataNews = data.filter(
        news => news.category_id == id
      )
      setCategoryNews(DataNews)
    }
  }, [id, data])

  return (
    <div>
      <h2 className = 'font-bold mb-5'>Category - <span className='text-secondary'>{category.length}</span> found news</h2>

    <div className='grid grid-cols-1 gap-5'>
        {
        category.map(news => <NewsCard 
          news={news}
          key={news.id} ></NewsCard>)
      }
    </div>
    </div>
  )
}

export default Catagory
