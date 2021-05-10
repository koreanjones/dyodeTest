import React from 'react';
import Mobile from './components/Mobile/Mobile';
import Desktop from './components/Desktop/Desktop'
import "./styleguide.css"
import "./globals.css"

export default class App extends React.Component {
    render() {
    return (
        <div>
        <Mobile 
            height = '2636px'
            width = '375px'
            left = '3047px'
            top = '-205px'
            border-radius = '0px'
            />
        
        </div>
    )
    }
}
