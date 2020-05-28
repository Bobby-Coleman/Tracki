import React, { Component } from 'react';

export default class CreateExercisesList extends Component {
    
    
    
    state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    onChangeDuration(event) {
        this.setState({
            duration: event.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            username: date.target.value
        })
    }





    render() {
        return (
            <div>
                <p>CreateExercises List Component</p>
            </div>
        )
    }
}