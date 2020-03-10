
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
                            <li>Je passe actuellement le titre professionel developpeur web</li>
                            <li>Formation Developpeur Web Fullstack JS Spécialisation REACT chez O'clock 2019</li>
                            <li>BAC S spé physique-chimie 2005</li>
                            
                        </ul>
                    </article>
                )}
               
                {tab === 'experience' && ( 
                    <article>
                        <h3>Expériences</h3>
                        <ul>
                            <li>Formation chez Oclock depuis {countYearsSince(2019)} ans</li>
                            <li>Intérim chez air interim à lyon de juillet 2018 à juillet 2019</li>
                            <li>Gérant d'une société de novembre 2011 à décembre 2018</li>
                        </ul>
                    </article>
                )}
                {tab === 'autre' && ( 
                    <article>
                        <h3>Autre</h3>
                        <ul>
                            <li>Permis B</li>
                            <li>Geeker</li>
                            <li>Bouquiner</li>
                        </ul>
                    </article>
                )}
            </section>
        </main>
    );
};
ReactDom.render(<Content />, document.getElementById('root'));