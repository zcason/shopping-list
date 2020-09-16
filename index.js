function main() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        let listItem = $('.js-shopping-list-entry').val();

        let template = `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;

        $(".shopping-list").append(template)
    });


    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        let listItem = $(this).closest('li')
        listItem.remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        const title = $(this).closest('li').find('.shopping-item')
        title.toggleClass('shopping-item__checked');
    });

}

$(main)
