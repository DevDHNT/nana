/* =========== ANIMAÇÃO TYPED JS ============================= */
var typed = new Typed(".typing", {
    strings:[".","Lembrei que seu filme  preferido é castelo animado...","Agora, como unir as duas coisas?","Seu filme preferido + duas músicas que me fazem lembrar você?"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var typed2 = new Typed(".typing2", {
    strings: ["Prometo sempre manter essa chama acessa. ♥"],
    typeSpeed: 100,
    backSpeed: 60,
    onComplete: function() {
        document.querySelector('.typing2').classList.add('static-text');
    }
});
