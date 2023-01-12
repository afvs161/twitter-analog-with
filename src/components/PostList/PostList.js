import PostListItem from '../PostListItem/PostListItem'

const PostList = ({ posts, onDelete, onToggleLike, onToggleBookmark }) => {
	let element = posts.map(post => {
		const { id, ...postPost } = post
		return (
			<div key={id}>
				<PostListItem
					{...postPost}
					onDelete={() => onDelete(id)}
					onToggleLike={() => onToggleLike(id)}
					onToggleBookmark={() => onToggleBookmark(id)}
				/>
			</div>
		)
	})

	return <ul className='app-list list-group'>{element}</ul>
}

export default PostList
