import React from 'react';
import Header from './Header'
import '../styles/noticias.css';


const Noticias = () => {
    return (
        <>
            <Header />
            <div className="Noticias">
                <div className="card mt-4">
                    <div className="card-header">
                        <h1>Ultimas Noticias</h1>
                    </div>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos voluptas aspernatur exercitationem maiores eum ratione dolores repellat dolorum. Cumque impedit ipsa animi molestiae autem eum repudiandae quasi veniam voluptate!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil optio id fugiat ducimus veritatis nostrum excepturi officia delectus suscipit. Dolorem placeat eveniet repudiandae blanditiis neque, aspernatur magni ipsa deserunt dignissimos?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error hic magnam sint qui omnis natus facere soluta, explicabo, corrupti, unde ad sunt rem voluptas. Enim, unde debitis! Labore, harum quo?
                    </div>
                </div>
            </div>
        </>
    )
};

export default Noticias;
 