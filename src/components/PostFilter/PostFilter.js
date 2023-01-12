import React from 'react'

export default class PostFilter extends React.Component {
	constructor(props) {
		super(props)
		this.buttons = [
			{ fKey: 'all', name: 'All' },
			{ fKey: 'like', name: 'Liked' },
		]
	}

	render() {
		const createButtons = this.buttons.map(({ fKey, name }) => {
			const currentActiveFilter = this.props.currentFilter === fKey
			const className = currentActiveFilter
				? 'btn-primary'
				: 'btn-outline-primary'
			return (
				<button
					key={fKey}
					className={`btn ${className}`}
					onClick={() => this.props.onFilter(fKey)}
				>
					{name}
				</button>
			)
		})
		return <div className='btn-group'>{createButtons}</div>
	}
}
