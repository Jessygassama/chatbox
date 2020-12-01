import React , {Component} from 'react'

class Formulaire extends Component {
    state= {
        message:'',
        length:this.props.length
     
    }
    
    createMessage = () => {
        const {addMessage,pseudo,length} = this.props
        const message = {
            pseudo,
            message:this.state.message
        }
        addMessage(message)

        this.setState({message:'',length})
    }
    handleSubmit = event => {
        event.preventDefault()
       this.createMessage()
    }

    handleChange = event => {
       const message = event.target.value
       const length = this.props.length - message.length
       this.setState({message,length})
    }

    handleKeyUp = event =>{
        if(event.key === 'Enter'){
                
        }
    }

    render () {
        return (
            <div>
                <form  className='form'
                onSubmit={this.handleSubmit}
                >
                    <textarea
                    onKeyUp={this.handleKeyUp}
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    maxLength={this.props.length}
                    />
                    <div className='info'>

                      { this.state.length}
                    </div>
                    <button type='submit'>
                        Envoyez!
                    </button>

                    
                    
                </form>
               
            </div>
        )
    }
}

export default Formulaire