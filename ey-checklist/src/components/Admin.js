import React, { Component} from 'react'
import {db, fs} from '../fire'
import 'firebase/firestore'
import 'firebase';

const taskListRef = fs.collection('tasks').doc('cAWVYgfwT2lvMSkEfmx6')


class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskId : null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount(){
        // await firebase
        // .firestore()
        // .collection("tasks")
        // // .doc('cAWVYgfwT2lvMSkEfmx6')
        // .get()
        // .then((querySnapshot) => {  //Notice the arrow funtion which bind `this` automatically.
        //     // querySnapshot.forEach(function(x) {
        //     //    tasks.push(doc.data().details);
        //     // });
        //     const docSnapshots = querySnapshot.docs;
            
        //     for (var i in docSnapshots) {
        //         const doc = docSnapshots[i].data().details;
        //         console.log(doc)
        //         // doc.forEach(function(x){
        //         //     tasks.push(x)
        //         // })
        //         this.setState({doc});
        //     }
        //     console.log(this.state.doc)
        //        //set data in state here
        //  });
        const tasks = []
        const doc = await taskListRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }
        const dataxyz = doc.data().details
        for(const i in dataxyz ){
            console.log(dataxyz[i].Name)
            tasks.push({
                order : i,
                Name : dataxyz[i].Name,
                isChecked : true
            })
        }
        this.setState({tasks})
        console.log(this.state)
    }

    async onSubmit(e){
        e.preventDefault()
        console.log(this.state)
        var sequence = {}
        this.state.tasks.forEach((item) => {
            sequence = { ...sequence, [item.order] : item.isChecked }
        })
        console.log(sequence)
        const res = await fs.collection('sequences').add(sequence);
        console.log(res.id)
        this.setState({
            ...this.state,
            taskId : res.id
        })
    }

    onChange(e){
        console.log(e.target.id)
        var taskTemp = this.state.tasks
        var objIndex = taskTemp.findIndex((obj => obj.order == e.target.id));
        taskTemp[objIndex].isChecked = !(taskTemp[objIndex].isChecked)
        this.setState({
            tasks:taskTemp
        })
    }
    


    render(){
        const tasks = this.state.tasks
        const taskID = this.state.taskId
        console.log(tasks)
        return (
            <div>
                <div>

                </div>
                <form onSubmit={this.onSubmit}>
                    {tasks && tasks.length > 0 && tasks.map(item =>(
                        <div className="form-group form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox"  
                                checked={item.isChecked} 
                                id={item.order}
                                onChange={this.onChange}
                                key={item.order}
                            />
                            <label className="form-check-label">
                                {item.Name}
                            </label>
                        </div>
                   ))} 

                   <button type="submit" className="btn-primary btn">Submit</button>
                </form>
                
                <div>
                    { taskID && <h4>Here's the taskID for the specified tasks -- {taskID}</h4>}
                </div>
                
            </div>
        )
    }
}

export default Admin;