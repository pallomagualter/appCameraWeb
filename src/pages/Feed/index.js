import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';


class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Palloma Gualter</span>
                            <span className="place">Teresina</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/papa-1602183533610.jpg" alt="Self"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like"/>
                            <img src={comment} alt="comment"/>
                            <img src={send} alt="send"/>
                        </div>

                        <strong>777 curtidas</strong>

                        <p>
                            Aquela self!
                            <span>#Fotinha #Cool #Happy #Top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Palloma Gualter</span>
                            <span className="place">Teresina</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/foto1-1602253901027.jpg" alt="Self"/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like"/>
                            <img src={comment} alt="comment"/>
                            <img src={send} alt="send"/>
                        </div>

                        <strong>787 curtidas</strong>

                        <p>
                            Sombra e água de coco!
                            <span>#Praia #Sol #Happy #Top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;