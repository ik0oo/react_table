import React from 'react';
import Header from './header/header';
import Table from './table/table';

export default class Beer extends React.Component {

    render () {
        return (
            <div class="beer-table-box">
                <Header model={this.props.children}/>

                {this.props.children}
            </div>
        );
    }
}
