const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://preview.redd.it/iogx5ag3imh61.png?width=3840&format=png&auto=webp&s=e243a2185122e343084e41841ca80fb2d6d1b693" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.redd.it/t0j888dskis21.jpg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/2c/8e/7c/2c8e7c856120a9e4687caad46bf6ec49.jpg" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}

export default Carousel;