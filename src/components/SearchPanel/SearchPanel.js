import React from 'react'

export default class SearchPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
	}

	onSearchPost = e => {
		const term = e.target.value
		this.setState({ term })
		this.props.onSearchPost(term)
	}

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='search by posts'
				onChange={this.onSearchPost}
			/>
		)
	}
}
