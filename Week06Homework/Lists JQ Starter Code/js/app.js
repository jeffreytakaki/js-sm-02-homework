$(document).ready(function(){
	$.ajax({
		url: 'http://www.kameronzach.com/todo/api/',
		method: 'get',
		data: {
			'action':'displayList',
			'list_id':244,
			'token':'581e29d1b8181',
		},
		dataType: 'json',
		success: function(data) {
			console.log(data)

			$('#todo-title').html(data.title);

			$.each(data.items,function(index,value) {
				addItem(value.text,value.id, value.completed)
			})

		},
		error: function(error) {

		}
	})


	$('.toDo').on('click','a.showlightbox',function(){
		$('.showlightbox').fancybox();
	})

	$('#update-title').click(function(){
		changeTitle(event);
	})

	$('.toDo').on('click','.checkbox-status',function(){
		updateStatus(this);
	})



	function changeTitle(event) {
		var newtitle = $(event.currentTarget).siblings().val();

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {
				'action':'renameList',
				'title': newtitle,
				'list_id':244,
				'token':'581e29d1b8181',
			},
			dataType: 'json',
			success: function(data) {
				$('#todo-title').html(data.title);
				$('.fancybox-item.fancybox-close').trigger('click')
			},
			error: function(error) {
					$('.error-msg').html(error);
			}
		})

	}

	function updateStatus(event) {
		var status = ($(event).is(':checked')) ? true : false;
		var itemid = $(event).parent().data('item-id');

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {
				'action':'updateItemStatus',
				'item_id': itemid,
				'list_id':244,
				'completed': status,
				'token':'581e29d1b8181',
			},
			dataType: 'json',
			success: function(data) {
				console.log(data);
			},
			error: function(error) {
					$('.error-msg').html(error);
			}
		})
	}
	
	function addItem(text,id,completed){

		if( text == '' ){
			alert('Yo, we need an item...');
			return;
		}

		var listItemHTML = $('script#listHtml').html();
		var listItemTemplate = Handlebars.compile(listItemHTML);

		var itemData = { listItem: text, deleteText: 'Remove', item_id: id, checked: parseInt(completed)};
		var newHTML = listItemTemplate( itemData );

		$('ul#list').append( newHTML );

	}

	function removeItem(data) {
		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {
				'action':'deleteItem',
				'item_id': data,
				'list_id':244,
				'token':'581e29d1b8181',
			},
			dataType: 'json',
			success: function(data) {
				console.log(data)
	

			},
			error: function(error) {

			}
		})
	}

	$('#composer').submit(function(e){

		e.preventDefault();
		var input = $('input#new-thing');
		var inputValue = input.val();

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {
				'action':'newItem',
				'text': inputValue,
				'list_id':244,
				'token':'581e29d1b8181',
			},
			dataType: 'json',
			success: function(data) {
				console.log(data)
				addItem(inputValue,data.item_id)
			},
			error: function(error) {

			}
		})

	

	});

	$('#list').on('click', 'input[type=checkbox]', function(){

		if( $(this).parent().hasClass('done') ){
			$(this).parent().removeClass('done');
		}else{
			$(this).parent().addClass('done');
		}

	});

	$('#list').on('click', 'a', function(event){
		event.preventDefault();
		var listid = $(this).parent('li.original').data('item-id');

		// $(this).parent('li.original').slideUp(900, function(){
			// removeItem(listid)
			var self = this;	
			
		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {
				'action':'deleteItem',
				'item_id': listid,
				'list_id':244,
				'token':'581e29d1b8181',
			},
			dataType: 'json',
			success: function(data) {
				console.log(data)
				$(self).parent('li.original').remove();

			},
			error: function(error) {

			}
		})


			
		// })
	});

	$('input[type=checkbox]').click(function(){


		if( $(this).parent().hasClass('done') ){
			$(this).parent().removeClass('done');
		}else{
			$(this).parent().addClass('done');
		}


	});


	// $('.fa-pencil').click(addItem);
	

});





