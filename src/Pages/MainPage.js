import React from 'react'
import MainHeader from 'Components/MainHeader'
import SpaceCraftSelector from 'Components/SpacecraftSelector'
import SpacecraftTable from 'Components/SpacecraftTable'
import './MainPage.css'

const MainPage = () => {
    return (
        <section className='MainPage'>
            <MainHeader />
            <SpaceCraftSelector />
            <SpacecraftTable />
        </section>
    )
}

export default MainPage