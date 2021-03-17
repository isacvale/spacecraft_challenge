import React from 'react'
import MainHeader from 'Components/MainHeader'
import SpaceCraftSelector from 'Components/SpacecraftSelector'
import './MainPage.css'

const MainPage = () => {
    return (
        <section className='MainPage'>
            <MainHeader />
            <SpaceCraftSelector />
            <div>tabela</div>
        </section>
    )
}

export default MainPage