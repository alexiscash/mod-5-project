import React from 'react';
import Calendar from 'react-calendar'

export default class Calender extends React.Component {
    state = {
        date: new Date()
    }

    // onChange = date => this.setState({date})
    onChange = date => {
        this.setState({date}, () => {
            this.props.filterByDate(this.state.date.getDate());
        })
        
    }
    
    render() {
        // console.log(this.state.date);
        return (
            <div style={{paddingLeft: '10em', paddingBottom: '2em', paddingTop: '2em'}}>
                <Calendar onChange={this.onChange } value={this.state.date} />
            </div>
        )
    }
}