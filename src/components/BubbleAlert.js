import React, { Component } from 'react'

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        padding: '2px 10px',
        borderRadius: '15px',
        color: '#fff',
        fontSize: '0.9rem',
        widht: '20px'
    }
}

export default class BubbleAlert extends Component {

    getNumber(n){
        if (!n) { return "" }
        return n > 9 ? '9+' : n
    }

    render() {
        const {value} = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}
