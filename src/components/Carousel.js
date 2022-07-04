import tajmahal  from '../Picture/tajmahal.jpg';
import golden  from '../Picture/golden temple.jpg';
import gate from '../Picture/india gate.jpg';

function Carousel(){
    return (
        <div>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tajmahal} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Taj Mahal</h5>
              <p>The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”),
                 who died in childbirth in 1631, having been the emperor's inseparable companion since their marriage in 1612.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={golden} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Golden Temple</h5>
              <p>The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism.The Golden temple is famous for its full golden dome,
                 it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={gate} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>India Gate</h5>
              <p>The iconic India Gate, an arch gate made using sandstone, is a war memorial situated in the Rajpath area, Delhi. It was built to commemorate the Undivided British Army (also known as British India Army)
                 soldiers who laid down their lives during the First World War and the Third Anglo-Afghan War of 1919.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button></div>

        </div>
    );
}
export default Carousel;