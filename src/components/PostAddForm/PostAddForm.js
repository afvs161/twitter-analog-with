import React from 'react'

export default class PostAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tt: ''
		}
	}

	TweetValue = (e) => {
		this.setState({ tt: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.tt == null || this.state.tt == '') {
			console.log("can't tweet empty string")
		} else {
			this.props.adTweet(this.state.tt)
			this.setState({tt: ''})
			e.target.reset()
		}
	}

	render() {
		return (
			<form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
				<input
					type='text'
					placeholder="what's new in your mind"
					className='form-control new-post-label'
					onChange={this.TweetValue}
					value={this.state.tt}
				/>
				<button type='submit' className='btn btn-outline-secondary'>
					Tweet
				</button>
			</form>
		)
	}
}
