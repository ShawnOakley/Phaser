var demo = {};
demo.state1 = function (){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.input.Keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);
    },
    update: function(){}
};

function changeState(e, state){
    console.log(e)
    GamepadEvent.state.start('state'+state);
}