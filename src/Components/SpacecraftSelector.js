import React from 'react'
import { observer } from 'mobx-react-lite'

import store from 'Store'
import './SpaceCraftSelector.css'

const SpacecraftOption = props => {
    const { manufacturer } = props

    return (
        <option
            value={manufacturer}
        >
            {manufacturer}
        </option>
    )
}

const SpaceCraftSelector = observer(props => {
    const { manufacturers, selectManufacturers } = props.store || store

    if (!manufacturers.length)
        return <section>...loading</section>

    return (
        <form className='SpaceCraftSelector'>
            <label>
                <span>Manufacturers</span>
                <select
                    className='SpaceCraftManufacturer'
                    autoFocus
                    name='manufacturer'
                    multiple
                    onChange={selectManufacturers}
                    size='6'
                    value={store.selectedManufacturers}
                >
                    { manufacturers.map(manufacturer => 
                        <SpacecraftOption
                            key={manufacturer}
                            manufacturer={manufacturer}
                        />
                    )}
                </select>
            </label>
            <small>You can use Ctrl to select multiple manufacturers.</small>
        </form>
    )
})

export default SpaceCraftSelector