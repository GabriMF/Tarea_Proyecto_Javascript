const sujetos = [
        "Mi perro",
        "El vecino",
        "Un alienígena",
        "Mi abuela",
        "Un pájaro gigante"
    ];

    const acciones = [
        "se comió",
        "perdió",
        "rompió",
        "se llevó",
        "mojó"
    ];

    const objetos = [
        "mis deberes",
        "mi ordenador",
        "el trabajo que tenía hecho",
        "la contraseña",
        "el informe final"
    ];

    const motivos = [
        "porque tenía hambre",
        "por accidente",
        "pensando que era suyo",
        "para molestarme",
        "porque estaba aburrido"
    ];


    function generadorExcusa() {
        const s = sujetos[Math.floor(Math.random() * sujetos.length)];
        const a = acciones[Math.floor(Math.random() * acciones.length)];
        const o = objetos[Math.floor(Math.random() * objetos.length)];
        const m = motivos[Math.floor(Math.random() * motivos.length)];

        const excusa = `${s} ${a} ${o} ${m}.`;
        document.getElementById("excusa").textContent = excusa;
    }