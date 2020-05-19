import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
        bulletInChamber: this.props.bulletInChamber,
    }

    roulette() {
        this.setState({
            spinningTheChamber: true,
        })
        let timeout = setTimeout(() => {
            let number = Math.ceil(Math.random() * 8)
            this.setState({
                spinningTheChamber: false,
                chamber: number,
            })
        }, 2000)
    }



    render() {
        let text;
        if(this.state.spinningTheChamber === true){
            text = "spinning the chamber and pulling the trigger! ..."
        }else if(this.state.chamber === this.state.bulletInChamber){
            text = "BANG!!!!"
        }else{text = "You're safe!"}

        console.log(this.state);

        return (
            <div>
                <p>{text}</p>
                <button className="trigger" onClick={() => this.roulette()}>Pull The trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;