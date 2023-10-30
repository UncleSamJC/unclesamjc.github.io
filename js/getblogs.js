

$(document).ready(function() {
	$('.collection-wrap.w-dyn-items').empty();
	fetchBlogData();
});

function fetchBlogData() {
	$.ajax({
		url: 'http://localhost:20491/api/Blog/GetBlogs',
		method: 'POST', // Use the appropriate HTTP method (GET, POST, etc.)
		dataType: 'json', // Adjust this based on the response format from your backend
		success: function(res) {
			const data = JSON.parse(res.Data);
			// Once data is successfully fetched, create and append list items
			if (data && data.length > 0) {
				data.forEach(function(blogItem) {
					var listItem = createBlogListItem(blogItem);
					$('.collection-wrap.w-dyn-items').append(listItem);
				});
			}
		},
		error: function(error) {
			console.error('Error fetching blog data:', error);
		}
	});
}

function createBlogListItem(blogItem) {
	var listItem = $('<div>').addClass('blog-preview-wrap w-dyn-item');
	var title = $('<a>').addClass('business-article-heading').text(blogItem.title);
	var date = $('<div>').addClass('label cc-blog-date').text(blogItem.date);
	var content = $('<p>').addClass('paragraph-light').text(blogItem.content);

	listItem.append(title, date, content);

	return listItem;
}