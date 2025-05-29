import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Homepage() {
    return (
        <div>
        <main>
            <section id="principale" style={{ backgroundImage: "url('./images/main.jpg')" }}>
                <h2>ORGANISEZ VOTRE<br /><strong>VOYAGE SUR MESURE</strong></h2>
            </section>
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="row pb-3">
                    <div className="container-lg">
                        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                            <figure className="col">
                                <img src="./images/etape1.png" className="gallery-item" alt="Image 1"/>
                                <h4>PLANIFIER</h4>
                                <p>Confiez-nous vos rêves d'évasion : en famille ou entre amis, nous trouverons la formule qui comblera vos attentes.</p>
                            </figure>
                            <figure className="col">
                                <img src="./images/etape2.png" className="gallery-item" alt="Image 2"/>
                                <h4>ORGANISER</h4>
                                <p>Bénéficiez de l'expertise de nos spécialistes de chaque destination, ils vous accompagnent dans la réalisation de votre voyage.</p>
                            </figure>
                            <figure className="col">
                                <img src="./images/etape3.png"className="gallery-item" alt="Image 3"/>
                                <h4>VOYAGER</h4>
                                <p>Nous nous chargeons d'assurer votre sécurité et de veiller à votre pleine sérénité tout au long de votre voyage.</p>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
        </div>
    );
    }