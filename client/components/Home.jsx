import React from 'react'

import * as apiRoutes from '../../server/apiRoutes'
import ListSeason from './ListSeason'
import Loading from './Loading'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = { seasons: [] }
    }

    UNSAFE_componentWillMount() {
        apiRoutes.getSeasons((seasons) => {
            this.setState({ seasons })
        })
    }

    listSeasons(seasons) {
        return seasons.map(({ season }) => {
            return <ListSeason year={season} key={season}/>
        })
    }

    render() {
        const { seasons } = this.state

        return (
            <div className="row">
                <div className="twelve columns home">
                    <h3 data-test="heading-seasons">Seasons</h3>
                    <ul className="seasons">
                    {
                        seasons.length > 0
                            ? this.listSeasons(seasons)
                            : <Loading />
                    }
                    </ul>

                    <h3 data-test="heading-circuits">Circuits</h3>
                    <div className="circuits">
                        <a href="/#/circuits">See all the circuits</a>
                    </div>
                </div>
            </div>
        )
    }
}
