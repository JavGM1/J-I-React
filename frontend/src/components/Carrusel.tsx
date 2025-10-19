function Carrusel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-interval={5000}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/living.jpg" className="imgCarousel" alt="Living" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Bienvenidos a J&I Muebles</h5>
            <p>Descubre nuestra colección exclusiva de muebles para cada rincón de tu hogar.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/img/cocina.jpg" className="imgCarousel" alt="Cocina" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cocina</h5>
            <p>Diseños modernos y funcionales para tu cocina.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/img/baño.jpg" className="imgCarousel" alt="Baño" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Baño</h5>
            <p>Renueva tu baño con estilo y calidad.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrusel;
