import React, { Component } from 'react';

// Class based component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        // State
        this.state = { term: '...'};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                value is {this.state.term}
            </div>
        );
    }
};

export default SearchBar;