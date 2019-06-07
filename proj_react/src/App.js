import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['learn react', 'learn english']
        }
    }

    // define method for button click.
    handleBtnClick() {
        // you must use react pre-defined method to update class data members.
        // then react can render again.
        this.setState({
            list: [...this.state.list, 'Hello']
        });
    }

    render() {
        return (
            <div>
                <div>
                    hello, I am junius {2 * 3}.
                </div>
                <div>
                    <input/>
                     {/*this need rebind to button's parent class's object.*/}
                     {/*then you can update state.list defined in App.*/}
                    <button onClick={this.handleBtnClick.bind(this)}> add</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
