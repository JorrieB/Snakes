var Start = {
    preload : function() {
        game.load.image('menu', './images/snakesTitle2.png');
    },

    create : function() {
        game.add.button(0, 0, 'menu', this.startGame, this);
    },

    startGame : function () {
        // Change the state to the actual game.
        game.state.start('Game');
        showInfo();
    }
};

function showInfo () {
  document.getElementById('infoBox').style.display = 'block';
}
