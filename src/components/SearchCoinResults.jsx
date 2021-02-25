import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import Popup from '../components/controls/Popup'
import AddPortfolioForm from './AddPortfolioForm'


const SearchCoinResults = ({ coinSearch }) => {

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }


    const { addCoinWatchlist, watchlist, addCoinPortfolio, portfolio } = useContext(GlobalContext)

    const [buttonPopup, setButtonPopup] = useState(false)

    let storedWatchlist = watchlist.find((id) => id.symbol === coinSearch.coin.symbol)

    const coinDisableWatchlist = storedWatchlist ? true : false

    return (
        <>
            <Link to={`/coins/${coinSearch.coin.id}`} onClick={refreshPage}>
                <span>{coinSearch.coin.symbol.toUpperCase() + ' - '}</span>
                <span>{coinSearch.coin.name}</span>
            </Link>
            <span>
                <button onClick={() => addCoinWatchlist(coinSearch.coin)} disabled={coinDisableWatchlist}>+W</button>
                <button onClick={() => addCoinPortfolio(coinSearch.coin)} >+P</button>

                <span>
                    <button onClick={() => setButtonPopup(true)}>open</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddPortfolioForm coinSearch={coinSearch} />
                    </Popup>
                </span>
            </span>
        </>
    )
}


export default SearchCoinResults

