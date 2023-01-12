import React from 'react'

export default function PostListItem({
	tweet,
	onDelete,
	onToggleLike,
	onToggleBookmark,
	important,
	like,
}) {
	let bookmark = 'pli-icon btn-secondary btn-sm'
	if (important) {
		bookmark += ' bookmark'
	}

	let likeClasses = 'pli-icon fa fa-heart'
	if (!like) {
		likeClasses += ' transparent'
	}

	return (
		<li className='app-list-item border alert d-flex justify-content-between important'>
			<span onDoubleClick={onToggleLike} className='app-list-item-label w-100'>
				{tweet}
			</span>
			<div className='d-flex justify-content-center align-items-center'>
				<button className={bookmark} onClick={onToggleBookmark} type='button'>
					<i className='fa fa-star'></i>
				</button>
				<button
					className='pli-icon btn-secondary btn-sm'
					onClick={onDelete}
					type='button'
				>
					<i className='fa fa-trash'></i>
				</button>
				<i className={likeClasses}></i>
			</div>
		</li>
	)
}
