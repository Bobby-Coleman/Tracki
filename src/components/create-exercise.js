import React, { Component } from 'react';

export default class CreateExercisesList extends Component {
    
    
    
    state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    onChangeDuration = (event) => {
        this.setState({
            duration: event.target.value
        })
    }

    onChangeDate = (date) => {
        this.setState({
            username: date.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }
    
      console.log(exercise)

      window.location = '/';
    }





    render() {
        return (
            <div>
                <p>CreateExercises List Component</p>
            </div>
        )
    }
}