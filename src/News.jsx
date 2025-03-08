import React,{useEffect,useState} from  'react'
import Newsitems from './Newsitems';
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{
  
const [articles, setarticals] = useState([]);
const [loading, setloading] = useState(true);
const [totalResults, settotalResults] = useState(0)
const [page, setpage] = useState(1)
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
document.title = capitalizeFirstLetter(props.category); // Use the method here

  const updateNews= async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=18015fcbdc5740ce8c6933f446cf8a70&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(10);
    
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setarticals(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  },[])
 
  // next , previous
  // const handelNextClick = async () => {
  //   setpage(page+1);
  //   updateNews();
  // }

  // const handelPreClick = async () => {
  //   setpage(page-1);
  //   updateNews();
  // };
  // enable darkmode

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=18015fcbdc5740ce8c6933f446cf8a70&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticals(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
    
  };

  
    // darkmode 
    const { mode, } = props;

    return (<>
      <div className={`container bg-${mode}`} style={{ color: mode === 'dark' ? 'white' :'black',}}>
      <h2 className='text-center' style={{margin: "35px 0px",marginTop:"90px"}}>
          Top News  - Top   {capitalizeFirstLetter(props.category)} Handlines
        </h2>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Loading />}>
          <div className="container">
          <div className="row my-5"  >
            {articles.map((element, index) => {
              const uniqueKey = `${element.url}-${index}`;
              return (
                <div className="col-md-4" key={uniqueKey}>
                  <Newsitems
                    mode={mode}
                    title={element.title ? element.title.slice(0, 50) : ""}
                    descrition={element.description ? element.description.slice(0, 50) : ""}
                    imgUrl={element.urlToImage}
                    newurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
    )
  }
  
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
export default News
