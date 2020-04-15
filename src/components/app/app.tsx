import React from 'react'
// import { firestore } from 'firebase'

export default class App extends React.Component {

    render() {
        // var arr = [];
        // firestore().doc('room').get().then((querySnapshot) => { arr.push(querySnapshot.data()) });

        return (
            <div>
                <h1>RPG Dice</h1>
                {/* {arr.length} */}
            </div >
        );
    }
}