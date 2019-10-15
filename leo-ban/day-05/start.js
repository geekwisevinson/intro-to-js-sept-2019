function start() {
    const name = prompt('What is your name?');
    const nameDiv = document.querySelector('#player-name');
    nameDiv.innerHTML = 'NAME: ' + name;
    player.name = name;
    console.log('player', player);
    loadPage(0);
}

start();