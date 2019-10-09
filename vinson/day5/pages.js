console.log("pages loaded");
const pages = [];

pages.push(

    {
        page: 0,
        text: 'You\'re lost in the forrest!',
        answers: [
            { text: 'Go left into the dark', page: 1},
            {
                text: 'Go right over the scary bridge', page: 2
            }
        ],
        onLoad: function () {
            console.log('this is the beginning');
        }
    }

);

pages.push(
    {
        page: 1,
        text: 'You choose to go into the dark. You find a ring',
        onLoad: function () {
            player.inventory.push('ring');
            console.log('added ring to inventory', player);
        }
    }
);

pages.push(
    {
        page: 2,
        text: 'The bridge was old and collapsed with you on it!',
        onLoad: function () {
            player.health -= 10;
            console.log('you took fall damage', player);
        }
    }
);

console.log('pages', pages);

function loadPage(page) {
    const view = document.querySelector('.view');
    view.innerHTML = '';
    pages.forEach(function (item) {

        if (item.page === page) {

            createElement('h2', item.text, view);

            if (item.answers) {
                item.answers.forEach(
                    function (answer) {
                    const button = createElement('button', answer.text, view);
                    button.addEventListener('click', function () {
                        loadPage(answer.page);
                    })
                })
            }
        }
    });
}
loadPage(0);
