import React from 'react';
import Item from './Item'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['learn react', 'learn english'],
            inputValue: ''
        }

        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
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

    deleteItem(index) {
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
                    {/*get name parameter from parent component*/}
                    hello, I am {this.props.name} {2 * 3}.
                </div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    {/*this need rebind to button's parent class's object.*/}
                    {/*then you can update state.list defined in App.*/}
                    <button onClick={this.handleBtnClick}> add</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        // pass delete method to child item component, then item can communicate with paraent component via
                        // call method.
                        return <Item key={index} name={item} index={index} delete={this.deleteItem}/>
                            // return <li key={index} onClick={this.handleOnItemClick.bind(this, index)}>{item}</li>
                        }
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
