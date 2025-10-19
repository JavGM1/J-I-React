import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel className="custom-carousel" interval={5000}>
      <Carousel.Item>
        <img
          className="imgCarousel d-block w-100"
          src="/img/living.jpg"
          alt="Living"
        />
        <Carousel.Caption className="d-none d-md-block">
          <h5>Bienvenidos a J&I Muebles</h5>
          <p>Descubre nuestra colección exclusiva de muebles para cada rincón de tu hogar.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="imgCarousel d-block w-100"
          src="/img/cocina.jpg"
          alt="Cocina"
        />
        <Carousel.Caption className="d-none d-md-block">
          <h5>Cocina</h5>
          <p>Diseños modernos y funcionales para tu cocina.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="imgCarousel d-block w-100"
          src="/img/baño.jpg"
          alt="Baño"
        />
        <Carousel.Caption className="d-none d-md-block">
          <h5>Baño</h5>
          <p>Renueva tu baño con estilo y calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
