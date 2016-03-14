import React from 'react';
import BlackboxItem from './blackbox_item'

export default class Header extends React.Component {
    constructor () {
        super();
        this.categories = [['В розлив', 'ontap'], ['В бутылках', 'bottles']];
        this.days = {0: 'Было', 1:'Сегодня', 2: 'Скоро'};
    }

    setPosition (elem, index, array) {
        let first = 0;
        let last = array.length - 1;
        let position = [];
        let url;

        if (index === first) position.push('start');
        if (index === last) position.push('end');

        try {
            url = this.props.model.props.route.handler + '/' + elem[1];
        } catch (e) {}

        return <BlackboxItem key={index} position={position} name={elem[0]} model={url}/>
    }

    render () {
        let categories = [];
        this.categories.forEach((elem, index, array) => {
                categories.push(this.setPosition(elem, index, array))
            }
        );

        return (
            <div class="beer-table-box__nav">
                <div class="beer-table-box__nav-bottles">
                    <div class="blackbox justify">
                        {categories}
                    </div>
                </div>

                <div class="beer-table-box__nav-days">
                    <div class="blackbox justify heading">
                        <BlackboxItem position={['start', 'end']} name={this.days} model={this.props.model}/>
                    </div>
                </div>
            </div>
        );
    }
}
