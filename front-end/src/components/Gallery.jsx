import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gallery() {  
    return (
        <main>
            <section className="carousel-container">
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/slide1.jpeg" className="d-block w-100" alt="img1" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide2.jpeg" className="d-block w-100" alt="img2" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide3.jpeg" className="d-block w-100" alt="img3" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide4.jpeg" className="d-block w-100" alt="img4" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide5.jpeg" className="d-block w-100" alt="img5" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Précédent</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Suivant</span>
                    </button>
                </div>
            </section>
            <section className="gallery min-vh-100 py-5">
                <div className="container-lg">
                    <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                        {[
                            { src: 'images/img1.jpg', alt: 'Image 1', caption: 'Exploration' },
                            { src: 'images/img2.jpg', alt: 'Image 2', caption: 'Découverte' },
                            { src: 'images/img3.jpg', alt: 'Image 3', caption: 'Paysage' },
                            { src: 'images/img2.jpg', alt: 'Image 2', caption: 'Découverte' },
                            { src: 'images/img3.jpg', alt: 'Image 3', caption: 'Paysage' },
                            { src: 'images/img1.jpg', alt: 'Image 1', caption: 'Exploration' },
                            { src: 'images/img3.jpg', alt: 'Image 3', caption: 'Paysage' },
                            { src: 'images/img2.jpg', alt: 'Image 2', caption: 'Découverte' },
                            { src: 'images/img1.jpg', alt: 'Image 1', caption: 'Exploration' },
                            { src: 'images/img2.jpg', alt: 'Image 2', caption: 'Découverte' },
                            { src: 'images/img3.jpg', alt: 'Image 3', caption: 'Paysage' },
                            { src: 'images/img1.jpg', alt: 'Image 1', caption: 'Exploration' },
                        ].map((img, index) => (
                        <figure key={index} className="col">
                            <img src={img.src} className="gallery-item" alt={img.alt} />
                            <figcaption>{img.caption}</figcaption>
                        </figure>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}