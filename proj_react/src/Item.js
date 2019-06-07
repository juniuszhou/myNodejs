import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem() {
        console.log(this.props.index)
        // only way item can pass info to parent is via function call.
        this.props.delete(this.props.index)
    }
    render() {
        return (
            <li onClick={this.deleteItem}>
                {this.props.name}
            </li>
        )
    }
}

export default Item
