class Animacao {
    constructor(context) {
        this.context = context;
        this.sprites = [];
        this.ligado = false;
    }
    
    novoSprite(sprite) {
        this.sprites.push(sprite);
    }
    
    ligar() {
        this.ligado = true;
        this.proximoFrame();
    }
    
    desligar() {
        this.ligado = false;
    }
    
    proximoFrame() {
        if (!this.ligado) return;
        this.limparTela();

        for (var i in this.sprites)
            this.sprites[i].atualizar();

        for (var i in this.sprites)
            this.sprites[i].desenhar();

        var animacao = this;

        requestAnimationFrame(function () {
            animacao.proximoFrame();
        });
    }
    
    limparTela() {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
