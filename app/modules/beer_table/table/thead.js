import React from 'react';

export default class Thead extends React.Component {
    render () {
        return (
            <tr class="beer-table__thead">
                <th class="icon">
                    <div class="beer-table__th"></div>
                </th>
                <th class="name">
                    <div class="beer-table__th"></div>
                </th>
                <th class="sort">
                    <div class="beer-table__th">Сорт</div>
                </th>
                <th class="chars">
                    <div class="beer-table__th">
                        <span>алк (%)</span>
                        <span>пл (%)</span>
                        <span>IBU</span>
                    </div>
                </th>
                <th class="brewery">
                    <div class="beer-table__th">Пивоварня</div>
                </th>
                <th class="price">
                    <div class="beer-table__th">
                        <span>0,3 мл</span>
                        <span>0,5 мл</span>
                    </div>
                </th>
            </tr>
        );
    }
}