import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

import MatchesBlock from '../../ui/matches_block';
import Slide from 'react-reveal/Slide'

class Blocks extends Component {

    state = {
        matches:[]
    }

// Metode e cila na jep vetem 6 ndeshjet e fundit i dergon te firebaselooper sikur properties pastaj e kthen me te dhenat e perpunuara
// ne variablen matches gjitheashtu duke perdor metoden reversearray i merr 6 ndeshjet e fundit
    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: reverseArray(matches)
            });
        })
    }


    showMatches = (matches) => (
        matches ?
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :null
    )


    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;