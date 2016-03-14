import React from 'react';
import Thead from './thead';
import Row from './row';
import * as _ from 'underscore';

export default class Table extends React.Component {
    constructor () {
        super();
        this.state = {
            data: [{
                image: '',
                    name: '',
                sort: '',
                beer: {
                    name: '',
                    url: ''
                },
                chars: {
                    alc: '',
                    pl: '',
                    ubi: ''
                },
                brewery: {
                    name: '',
                    url: ''
                },
                price: {
                    half: '',
                    third: ''
                }
            }]
        };

        this.url = 'http://pivnoyetiket.ru/pivo/data.json';
    }

    componentWillReceiveProps () {
        this.updateData(location.hash);
    }

    componentDidMount () {
        this.updateData(location.hash);
    }

    updateData (url) {
        const first = url.match(/^#\/[a-z]*/)[0].slice(2);
        const last = url.match(/[a-z]*\?/)[0].slice(0, -1);
        const href = this.url + '?available=' + first + '&type=' + last;

        $.get(href, result => {
            this.setState({data: result});
        });
    }

    render () {
        let row = [];
        this.state.data.forEach((elem, index) => {
            row.push(<Row model={elem} key={index} />);
        });

        return (
            <table class="beer-table">
                <tbody>
                    <Thead />
                    {row}
                </tbody>
            </table>
        );
    }
}
