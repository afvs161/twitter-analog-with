import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import PostAddForm from '../PostAddForm/PostAddForm'
import PostFilter from '../PostFilter/PostFilter'
import PostList from '../PostList/PostList'
import SearchPanel from '../SearchPanel/SearchPanel'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ id: 3, tweet: 'somehow blblbl', important: false, like: false },
				{ id: 2, tweet: 'yahoo', important: false, like: false },
				{ id: 1, tweet: 'yahoo', important: false, like: false },
			],
			term: '',
			filter: 'all',
		}
		this.lastId = 4
	}

	handleDelete = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)

			const before = data.slice(0, index)
			const after = data.slice(index + 1)

			const newArr = [...before, ...after]

			return {
				data: newArr,
			}
		})
	}

	newTweet = nt => {
		const newTweet = {
			tweet: nt,
			important: false,
			like: false,
			id: this.lastId++,
		}
		this.setState(({ data }) => {
			const newArr = [newTweet, ...data]
			return {
				data: newArr,
			}
		})
	}

	onToggleLike = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)
			const oldItem = data[index]
			const newItem = { ...oldItem, like: !oldItem.like }

			const before = data.slice(0, index)
			const after = data.slice(index + 1)

			const newArr = [...before, newItem, ...after]

			return {
				data: newArr,
			}
		})
	}

	onToggleBookmark = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id)
			const oldItem = data[index]
			const newItem = { ...oldItem, important: !oldItem.important }

			const before = data.slice(0, index)
			const after = data.slice(index + 1)

			const newArr = [...before, newItem, ...after]

			return {
				data: newArr,
			}
		})
	}

	searchTweet = (tweets, term) => {
		if (term.length === 0) {
			return tweets
		}

		return tweets.filter(item => {
			return item.tweet.indexOf(term) > -1
		})
	}

	onSearchPost = term => {
		this.setState({ term })
	}

	postFilter = (tweets, filter) => {
		if (filter === 'like') {
			return tweets.filter(tweet => tweet.like)
		} else {
			return tweets
		}
	}

	onFilter = (filter) => {
		this.setState({filter})
	}

	render() {
		const { data, term, filter } = this.state
		const likes = data.filter(item => item.like).length
		const posts = data.length

		const seen = this.postFilter(this.searchTweet(data, term), filter)

		return (
			<div className='app'>
				<AppHeader posts={posts} likes={likes} />
				<div className='search-panel d-flex'>
					<SearchPanel onSearchPost={this.onSearchPost} />
					<PostFilter onFilter={this.onFilter} currentFilter={filter} />
				</div>
				<PostList
					posts={seen}
					onDelete={this.handleDelete}
					onToggleLike={this.onToggleLike}
					onToggleBookmark={this.onToggleBookmark}
				/>
				<PostAddForm adTweet={this.newTweet} />
			</div>
		)
	}
}
