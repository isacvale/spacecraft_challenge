import {
    action,
    computed,
    observable
} from 'mobx'

import {
    alphabeticalSort
} from 'Utils'

window.g = {}

const store = observable({
    spaceships: [],
    manufacturers: [],
    selectedManufacturers: [],

    fetchData: async function (nextPage = '') {
        const address = nextPage || 'https://swapi.dev/api/starships'
        const response = await fetch(address)
        if (!response.ok)
            throw new Error('An error ocurred when fetching data.')
        const data = await response.json()

        this.spaceships = [ ...this.spaceships, ...data.results ]

        if (data.next)
            this.fetchData(data.next)
        else
            this.listManufacturers()
    },
    listManufacturers: function () {
        this.manufacturers = this.spaceships
            .reduce((list, ship) => {
                const { manufacturer } = ship

                return list.includes(manufacturer)
                    ? [...list]
                    : [...list, manufacturer]
            }, [])
            .sort(alphabeticalSort)
    },
    selectManufacturers: function (selected) {
        this.selectedManufacturers = [...selected.target.selectedOptions]
            .map(option => option.value)
    }
}, {
    loadOptions: action.bound,
    listManufacturers: action.bound,
    selectManufacturers: action.bound
})

window.g = {
    store
}

export default store