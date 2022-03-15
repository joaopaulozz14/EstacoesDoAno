let i = 0;
function estacao(){
    i = i + 1;
    let img = window.document.querySelector('#imagem');
    if(i == 1){
        img.src = 'img/img-verao.jpg';
        header.style.background = "yellow";
        section1.style.background = "rgba(255, 255, 0, 0.637)";
        document.getElementById('estacao').innerHTML = "Verão";
        document.getElementById('poema').innerHTML = "Se te comparo a um dia de verão És por certo mais belo e mais ameno O vento espalha as folhas pelo chão. E o tempo do verão é bem pequeno. Às vezes brilha o Sol em demasia Outras vezes desmaia com frieza; O que é belo declina num só dia, na terna mutação da natureza. Mas em ti o verão será eterno, E a beleza que tens não perderás; Nem chegarás da morte ao triste inverno: Nestas linhas com o tempo crescerás. E enquanto nesta terra houver um ser, Meus versos vivos te farão viver";
        poema.style.textAlign = "justify";
        document.getElementById("autor").innerHTML = "Autor: William Shakespeare";
        footer.style.background = "yellow"
    }else if(i == 2){
        img.src = 'img/img-outono.jpg';
        header.style.background = "#D33402";
        section1.style.background = "#DC3E04bb";
        document.getElementById('estacao').innerHTML = "Outono";
        poema.style.textAlign = "justify";
        document.getElementById('poema').innerHTML = 'Me deixem ficar aqui apenas sozinha no meu quarto a contemplar as folhas secas do outono que se amontoam pelo chão levadas e trazidas pelo vento... Deixem-me ouvir o som das nuvens e admirar suas formas negras... Deixem-me suspirar pela vida que reflete no meu ser assim, penso nas horas que não posso mais perder e nas que eu perdi...';
        document.getElementById("autor").innerHTML = "Autor: Suzanne Leal";
        footer.style.background = "#D33402";
        
    }else if(i == 3){
        img.src = 'img/img-primavera.jpg';
        header.style.background = "rgb(154, 226, 45)";
        section1.style.background = "rgba(152, 247, 11, 0.616)";
        document.getElementById('estacao').innerHTML = "Primavera";
        poema.style.textAlign = "justify";
        document.getElementById('poema').innerHTML = "Quando vier a Primavera, Se eu já estiver morto, As flores florirão da mesma maneira E as árvores não serão menos verdes que na Primavera passada. A realidade não precisa de mim. Sinto uma alegria enorme Ao pensar que a minha morte não tem importância nenhuma. Se soubesse que amanhã morria E a Primavera era depois de amanhã, Morreria contente, porque ela era depois de amanhã. Se esse é o seu tempo, quando havia ela de vir senão no seu tempo? Gosto que tudo seja real e que tudo esteja certo; E gosto porque assim seria, mesmo que eu não gostasse. Por isso, se morrer agora, morro contente, Porque tudo é real e tudo está certo.";
        document.getElementById('autor').innerHTML = "Autor: Fernando Pessoa";
        footer.style.background = "rgb(154, 226, 45)";

    }else if(i == 4){
        img.src = 'img/img-inverno.jpg';
        header.style.background = "#ECC9DA";
        section1.style.background = "#ecc9da2c"
        document.getElementById('poema').innerHTML = "Este é o inverno Um frio de leve vem pra ficar. A brisa suave faz a árvore balançar. O vento sopra assobiando. O céu escuro vai ficando. As nuvens passam de mansinho. A chuva chega devagarinho. As pessoas correm abrindo guarda-chuvas. Vi um homem de casaco e uma mulher de luvas. É esse o inverno sorrateiro. Vem chegando e nem avisa primeiro.";
        document.getElementById('estacao').innerHTML = "Inverno";
        document.getElementById('autor').innerHTML = "Autor: Clarice Pacheco";
        footer.style.background = "#ECC9DA";
        i = 0;
    }
}


