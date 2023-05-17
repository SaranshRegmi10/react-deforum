import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import LoadingBar from 'react-top-loading-bar'
// import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  
  const capitalizeFirstLetter=(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  document.title = `DE FORUM-${capitalizeFirstLetter(props.category)}`;
  
  
  //API FETCH


  const updatenews =async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=be79946665fc4be1bc49995cbd4041f4&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let read_data = await data.json();
    console.log(read_data);
    setArticle(read_data.articles);
    setTotalResults(read_data.totalResults);
    setLoading(false);
  }
  useEffect(() => {
   updatenews();
  }, [])
   

 const handlePrevbtm = async () => {
    console.log("Previous");
    setPage(page-1);
    updatenews();
  }

 const handleNextbtm = async () => {
    console.log("Next");
    setPage(page+1);
    updatenews();
  }


    return (
      <div>
        <div className='container my-3'>
          <h1 className='text-center' style={{ marginTop: '90px' }}>Todays Headlines </h1>
          <div className='text-center'>
            {loading && <Spinner />}
          </div>
          <div className='text-center'>
          </div>
          <div className='row'>
            {!loading && article.map((element) => {
              return <div className='col-md-3 my-2' key={element.url}>
                <Newsitem title={element.title} imageUrl={element.urlToImage} description={element.description} newsurl={element.url} source={element.source.name} author={element.author} date={element.publishedAt}/>
              </div>
            })}
          </div>
          {/* Prev-Next */}
          <div className='container d-flex justify-content-around'>
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevbtm}>&larr; Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults / 20)} type="button" className="btn btn-dark" onClick={handleNextbtm}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )


  }
  // THis is default value assign
  News.defaultProps = {
    pageSize: 4,
    country: 'gb',
    category: 'business'
  }

  // This is the types of props
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}
export default News;