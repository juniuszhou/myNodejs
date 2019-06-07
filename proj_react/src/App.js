import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['learn react', 'learn english'],
            inputValue: ''
        }
    }

    // define method for button click.
    handleBtnClick() {
        // you must use react pre-defined method to update class data members.
        // then react can render again.
        console.log(this.state.inputValue)
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });

    }

    handleInputChange(e) {

        this.setState({
            inputValue: e.target.value
        })
    }

    handleOnItemClick(index) {
        const newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <div>
                <div>
                    hello, I am junius {2 * 3}.
                </div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    {/*this need rebind to button's parent class's object.*/}
                    {/*then you can update state.list defined in App.*/}
                    <button onClick={this.handleBtnClick.bind(this)}> add</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleOnItemClick.bind(this, index)}>{item}</li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
