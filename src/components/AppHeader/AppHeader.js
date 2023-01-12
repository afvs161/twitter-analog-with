const AppHeader = ({posts, likes}) => {
	return (
		<div className='app-header d-flex '>
			<h1>Vosid</h1>
			<h2>{posts} post, {likes}</h2>
		</div>
	)
}

export default AppHeader
