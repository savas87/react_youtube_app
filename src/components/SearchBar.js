import React, {Component} from 'react'

class SearchBar extends Component {
    //init state
    state = {term: 'Suche Video'};
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    deleteInputField = event => {
        if(this.state.term !== ''){
            this.setState({
                term: ''
            })
        }
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            onClick={this.deleteInputField}
                             />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;