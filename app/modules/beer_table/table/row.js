import React from 'react';

export default class Row extends React.Component {
    render () {
        const model = this.props.model;
        return (
            <tr class="beer-table__tbody">
                <td class="icon">
                    <div class="beer-table__td">
                        <img src={model.image}></img>
                    </div>
                </td>
                <td class="name">
                    <div class="beer-table__td">
                        <div class="beer-table-start">
                            <a href={model.beer.url}>{model.beer.name}</a>
                            <div class="beer-table-start__arrow"></div>
                            <div class="beer-table-start__line"></div>
                        </div>
                    </div>
                </td>
                <td class="sort">
                    <span class="beer-table__td">{model.sort}</span>
                </td>
                <td class="chars">
                    <div class="beer-table__td">
                        <div class="characteristics">
                            <div class="characteristics__item"><span>{model.chars.alc}</span>
                            </div>
                            <div class="characteristics__item"><span>{model.chars.pl}</span>
                            </div>
                            <div class="characteristics__item"><span>{model.chars.ubi}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="brewery">
                    <a href={model.brewery.url} class="beer-table__td">{model.brewery.name}</a>
                </td>
                <td class="price">
                    <div class="beer-table__td">
                        <div class="beer-table-end">
                            <div class="beer-table-end__arrow"></div>
                            <div class="beer-table-end__line"></div>
                            <div class="beer-table-end__item">{model.price.third}</div>
                            <div class="beer-table-end__item">{model.price.half}</div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}