
       
       let operations = [
            {nome: "Soma", foto: "img/add.png"},
            {nome: "Multiplicacao", foto: "img/multiply.png"},
            {nome: "Subtração", foto: "img/subtract.png"}
        ];

        let ul = document.querySelector('ul');
        ul.innerHTML = '';
        let x = 0;
        let y = 0;

        function pedirNumeros() {
            x = Number(prompt("Qual número deseja somar?"));
            y = Number(prompt("Qual o outro número que deseja somar?"));
        }

        function soma() {
            alert(x + y);
        }

        function subtrair() {
            alert(x - y);
        }

        function multiplicar() {
            alert(x * y);
        }

        function validar(i) {
            pedirNumeros()
            if (i == 0) {
                soma();
            }
            if (i == 1) {
                multiplicar();
            }
            if (i == 2) {
                subtrair();
            }
        }

        for (let i = 0; i < operations.length; i++) {
            const operationId = `operation_${i}`;
            ul.innerHTML += `<li>
                <div id="${operationId}" onclick="validar(${i})" class="operation">
                    <img src="${operations[i].foto}" alt="${operations[i].nome}">
                    <span>${operations[i].nome}</span>
                </div>
            </li>`;

            if (i === 0) {
                const somaButton = document.getElementById(operationId);
                somaButton.addEventListener('click', function () {
                    validar(i);
                });
            }
        }

