
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import countYearsSince from 'damienlabbecountyearssince';
import axios from 'axios';

import './style.css';

const Content = () => {
    const [ tab, setTab ] = useState('formation');
    const [ img, setImg ] = useState('');

    useEffect(() => { 
        axios.get('https://aws.random.cat/meow')
            .then((response) => {
                setImg(response.data.file);
            });
    }, []);

    const generateClickHandler = (newTab) => () => {
        setTab(newTab);
    }
    return (
        <main>
            <header>
                {img !== '' && <img src={img} alt="Mon CV en ligne" />}
                <h1>CV de Damien LABBE</h1>
            </header>

            <section>
                <h2>Je suis développeur depuis {countYearsSince(2020)} ans</h2>
                <div>
                    <button onClick={generateClickHandler('formation')}>Formations</button>
                    <button onClick={generateClickHandler('experience')}>Expériences</button>
                    <button onClick={generateClickHandler('autre')}>Autre</button>
                </div>
                {tab === 'formation' && ( 
                    <article>
                        <h3>Formations</h3>
                        <ul>
                            <li>J'ai un BAC S spé physique-chimie</li>
                            <li>J'ai suivi une formation developpeur web fullstack JS spécialisation REACT chez O'clock</li>
                            <li>Je passe actuellement le titre professionel developpeur web</li>
                        </ul>
                    </article>
                )}
               
                {tab === 'experience' && ( 
                    <article>
                        <h3>Expériences</h3>
                        <ul>
                            <li>Je suis en formation chez Oclock depuis {countYearsSince(2019)} ans</li>
                            <li>J'étais gérant d'une société pendant 8 ans</li>
                            <li>Et l'année avant ma formation, j'étais en intérim</li>
                        </ul>
                    </article>
                )}
                {tab === 'autre' && ( 
                    <article>
                        <h3>Autre</h3>
                        <ul>
                            <li>J'ai le permis B</li>
                            <li>J'aime bien geeker</li>
                            <li>J'aime bien bouquiner</li>
                        </ul>
                    </article>
                )}
            </section>
        </main>
    );
};
ReactDom.render(<Content />, document.getElementById('root'));