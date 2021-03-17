import React from 'react'
import { observer } from 'mobx-react-lite'
import store from 'Store'
import './SpacecraftTable.css'

const SpaceshipRow = props => {
    const {
        name,
        starship_class,
        manufacturer,
        model,
        length,
        crew,
        passengers,
        cost_in_credits: price
    } = props.ship

    return (
        <tr>
            <th data-label='Name'>{name}</th>
            <td data-label='Class'>{starship_class}</td>
            <td data-label='Model'>{model}</td>
            <td data-label='Manufacturer'>{manufacturer}</td>
            <td data-label='Length' data-type='number'>{length}</td>
            <td data-label='Crew' data-type='number'>{crew}</td>
            <td data-label='Passangers' data-type='number'>{passengers}</td>
            <td data-label='Price' data-type='number'>{price}</td>
        </tr>
    )
}

const SpacecraftTable = observer(props => {
    const data = props.store || store
    const ships = data.spaceships
        .filter(ship => data.selectedManufacturers.includes(ship.manufacturer))

    return (
        <section
            className='SpacecraftTable'
            aria-label='Spaceships'
            tabIndex='0'
        >
            <table className='attr-table'>
                <caption>Spaceships </caption>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Length</th>
                        <th>Crew</th>
                        <th>Passengers</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {ships.map(ship => <SpaceshipRow key={ship.name} ship={ship}/>)}
                </tbody>
            </table>
            {/* { ships.map(ship =>
                <div key={ship.manufacturer}>{ship.manufacturer}</div>
            )} */}
        </section>
    )
})

export default SpacecraftTable