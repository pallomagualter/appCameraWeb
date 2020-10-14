import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data)

        this.props.history.push('/');

        //console.log(this.state);
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] }); //como o input de imagem vem em array, basta definir que queremos a primeira posição do array
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }); 
        //aqui utilizamos cochetes já que estamos querendo alterar o valor da variável, ao percorrer ele vai alterar o valor para o "name" da variável que estará sendo alterada
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit} >
                <input type="file" onChange={this.handleImageChange} />

                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input 
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />
                
                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                
                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type="submit">
                    Enviar
                </button>
            </form>
        );
    }
}

export default New;