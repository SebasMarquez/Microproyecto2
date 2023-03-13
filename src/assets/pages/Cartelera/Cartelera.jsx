import React from "react"
import styles from "./Cartelera.module.css"
import { CARTELERA_URL } from "../../constants/urls"
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";
import { useState } from "react";
import { fetchMovies } from "../../utils/api";


  function Cartelera(){
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getMovies = async () => {
  setLoading(true);
  const { data } = await fetchMovies();
  setMovies(data.results);
  setLoading(false);
  };

  useEffect(() => {
    getMovies()
  },[])

    return(
      <div>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
            alt="Second slide"
          />
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://unobtainium13.files.wordpress.com/2014/09/fury-2014-movie-banner-poster.jpg"
            alt="Fith slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg"
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-qNMImfxdoB0/XCWyfawq51I/AAAAAAABBOs/A1u3kOmgspQmKzgF2RaiAw1uWKRE-_QVACEwYBhgL/s1600/DC%2BComics%25E2%2580%2599%2BAquaman%2BFinal%2BTheatrical%2BOne%2BSheet%2BMovie%2BPosters%2B%2526%2BBanners%2B%25283%2529.jpg"
            alt="Seventh slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>{movies && movies[0]?.origin_title}</h1>
      </div>
    )
}
export default Cartelera