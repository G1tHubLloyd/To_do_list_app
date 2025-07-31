$(document).ready(function () {
  // Autofocus input field on page load
  $('#item-input').focus();

  // Add new item function
  function addItem() {
    const newItem = $('#item-input').val().trim();
    if (newItem) {
      const deleteButton = $('<button class="delete-button"></button>');
      deleteButton.append(document.createTextNode('X')); // Using native text node

      const itemText = $('<span class="item-text"></span>').text(newItem);

      const listItem = $('<li class="todo-item"></li>');
      listItem.append(itemText).append(deleteButton);

      $('#todo-list').append(listItem);
      $('#item-input').val('').focus();
    }
  }

  // Add item on button click
  $('#add-button').on('click', addItem);

  // Add item on Enter keypress
  $('#item-input').on('keypress', function (e) {
    if (e.which === 13) addItem(); // Enter key
  });

  // Toggle completed class on double-click
  $('#todo-list').on('dblclick', '.item-text', function () {
    $(this).toggleClass('completed');
  });

  // Delete item with fade effect
  $('#todo-list').on('click', '.delete-button', function () {
    $(this).closest('li').fadeOut(300, function () {
      $(this).remove();
    });
  });

  // Make list sortable
  $('#todo-list').sortable();
});
