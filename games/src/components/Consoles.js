import React from 'react';
import Header from './Header';
import '../styles/consoles.css';
import xbox from '../images/xbox.jpg';
import ps4 from '../images/ps4.png';


const Consoles = () => {
    return (
        <>
            <Header />
            <div className="Consoles mt-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Novo lançamendo da Microsoft</h3>
                    </div>
                    <div className="card-body">
                        <div className="imagem">
                            <img src={xbox}/>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quaerat eos cum perferendis blanditiis, rerum error doloribus quia. Necessitatibus cupiditate consectetur laudantium similique labore quaerat impedit quibusdam omnis iure at.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem distinctio nesciunt quibusdam, sint error fugit ipsa incidunt, dolor dolorum nisi assumenda ad saepe alias voluptate molestias! Quaerat, aliquid quod?
                        </p>
                    </div>
                </div>

                <div className="card mt-5">
                    <div className="card-header">
                        <h3>Novo lançamendo da Sony</h3>
                    </div>
                    <div className="card-body">
                        <div className="imagem">
                            <img src={ps4}/>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quaerat eos cum perferendis blanditiis, rerum error doloribus quia. Necessitatibus cupiditate consectetur laudantium similique labore quaerat impedit quibusdam omnis iure at.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem distinctio nesciunt quibusdam, sint error fugit ipsa incidunt, dolor dolorum nisi assumenda ad saepe alias voluptate molestias! Quaerat, aliquid quod?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Consoles;
 