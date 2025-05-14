const sujetos = [
        "Un perro",
        "El vecino",
        "Un alienígena",
        "Una abuela",
        "Un pájaro gigante",
        "Un hámster",
        "Donald Trump",
        "Una avispa",
        "Un mapache",
        "Una tortuga sorprendentemente rápida",
        "Un Fiat Panda",
        "Una gaviota",
        "El hijo MDLR del vecino",
        "Un hombre disfrazado de Calamardo",
        "Mi pediatra",
        "El Papa",
        "Un influencer",
        "Un Criptobro",
        "Un cayetano",
        "Vladimir Putin"
    ];

    const acciones = [
        "se comió",
        "perdió",
        "rompió",
        "se llevó",
        "mojó",
        "defecó",
        "lanzó",
        "robó",
        "volatilizó",
        "echó a la chimenea",
        "destruyó",
        "atropelló",
        "disparó a"
    ];

    const objetos = [
        "mis deberes",
        "mi ordenador",
        "el trabajo que tenía hecho",
        "la contraseña",
        "el informe",
        "a Donald Trump",
        "a Vladimir Putin",
        "mi motivación",
        "mi cartera",
        "mi mochila",
        "mi casa",
        "mi coche",
        "mi DNI",
        "mi comida",
        "unos misiles",
        "a mi persona",
        "un dardo"
    ];

    const motivos = [
        "porque tenía hambre",
        "por accidente",
        "pensando que era suyo",
        "para molestarme",
        "porque estaba aburrido",
        "para iniciar una guerra",
        "para pagarse la FP",
        "para hacerse el chulo",
        "porque cerraba el alimerka",
        "por invertir en bitcoins",
        "para venderlo en wallapop",
        "porque se lo susurró un castor",
        "para demostrar que la tierra es plana",
        "para poder ingresar en una secta",
        "porque le dijeron 'No hay huevos'",
        "porque lo dijo un influencer"
    ];


    function generadorExcusa() {
        const s = sujetos[Math.floor(Math.random() * sujetos.length)];
        const a = acciones[Math.floor(Math.random() * acciones.length)];
        const o = objetos[Math.floor(Math.random() * objetos.length)];
        const m = motivos[Math.floor(Math.random() * motivos.length)];

        const excusa = `${s} ${a} ${o} ${m}.`;
        document.getElementById("excusa").textContent = excusa;
    }