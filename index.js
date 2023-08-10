// ocultar formulários
document.addEventListener('DOMContentLoaded', function () {
    // Obtém os elementos dos botões de formulário, o botão de voltar e os contêineres de formulário
    const formButtons = document.querySelectorAll('.form-button-car, .form-button-imo, .form-button-out');
    const backButton = document.getElementById("back-button");
    const formContainers = document.querySelectorAll('.form-container');

    // Oculta todos os contêineres de formulário inicialmente
    formContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Adiciona um ouvinte de evento de clique para cada botão de formulário
    formButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Oculta todos os outros botões de formulário
            formButtons.forEach(otherButton => {
                otherButton.style.display = 'none';
            });

            // Exibe o botão de voltar
            backButton.style.display = 'block';

            // Oculta todos os contêineres de formulário
            formContainers.forEach(container => {
                container.style.display = 'none';
            });

            // Exibe o contêiner de formulário correspondente ao botão clicado
            formContainers[index].style.display = 'block';
        });
    });

    // Adiciona um ouvinte de evento de clique para o botão de voltar
    backButton.addEventListener("click", () => {
        // Exibe todos os botões de formulário novamente
        formButtons.forEach(button => {
            button.style.display = 'block';
        });

        // Oculta o botão de voltar
        backButton.style.display = 'none';

        // Oculta todos os contêineres de formulário
        formContainers.forEach(container => {
            container.style.display = 'none';
        });
    });

    // Oculta o botão de voltar quando a página é carregada pela primeira vez
    backButton.style.display = 'none';
});


// form1
function setupFileUpload1() {
    const inputFile = document.getElementById("arquivo");
    const fileInfo = document.getElementById("file-info");
    const form = document.getElementById("upload-form1")
    const resetButton = document.querySelector(".reset");
    const sendButton = document.getElementById("send-button");

    let selectedFiles = [];

    // evento que armazena um objeto na listagem de arquivos enviados.
    inputFile.addEventListener("change", function () {
        const files = Array.from(inputFile.files);

        if (files.length > 0) {
            files.forEach(file => {
                selectedFiles.push(file);
            });

            updateFileInfo();
        } else {
            fileInfo.innerHTML = "";
        }
    });

    // função de exibição para listar os arquivos enviados.
    function updateFileInfo() {
        if (selectedFiles.length > 0) {
            fileInfo.innerHTML = "<strong>Arquivos selecionados:</strong><br>";

            selectedFiles.forEach((file, index) => {
                const fileName = file.name.slice(0, 25);
                const fileExtension = file.name.split('.').pop(); // Pega a extensão do arquivo
                fileInfo.innerHTML += `<div><span title="${file.name}">${fileName}.${fileExtension}</span>
                                       <button class="delete-button" data-index="${index}">Excluir</button></div>`;
            });

            addDeleteListeners();
        } else {
            fileInfo.innerHTML = "";
        }
    }

    // função do botão de limpar toda pagina
    function addDeleteListeners() {
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                selectedFiles.splice(index, 1);
                updateFileInfo();
            });
        });

        resetButton.addEventListener("click", function () {
            selectedFiles = [];
            inputFile.value = "";
            updateFileInfo();
        });
    }

    // função de botão de enviar e checar os inputs
    sendButton.addEventListener("click", function () {
        const requiredInputs = form.querySelectorAll("[required]");
        let allInputsFilled = true;

        requiredInputs.forEach(input => {
            if (!input.value) {
                allInputsFilled = false;
            }
        });

        if (allInputsFilled) {
            if (selectedFiles.length > 0) {
                alert(`Formulário enviado com sucesso, "Boa sorte em sua venda!"`);
                form.submit(); // Enviar o formulário (você pode ajustar isso conforme necessário)
            } else {
                alert(`Formulário enviado com sucesso, porem não foi enviada nenhuma foto, "Boa sorte em sua venda!".`);
            }
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
}
setupFileUpload1();

// form 2
function setupFileUpload2() {
    const inputFile2 = document.getElementById("arquivo");
    const fileInfo = document.getElementById("file-info2");
    const form = document.getElementById("upload-form2")
    const resetButton = document.querySelector("reset-button2");
    const sendButton = document.getElementById("send-button2");

    let selectedFiles = [];

    // evento que armazena um objeto na listagem de arquivos enviados.
    inputFile2.addEventListener("change", function () {
        const files2 = Array.from(inputFile2.files);

        if (files2.length > 0) {
            files2.forEach(file => {
                selectedFiles.push(file);
            });

            updateFileInfo();
        } else {
            fileInfo.innerHTML = "";
        }
    });

    // função de exibição para listar os arquivos enviados.
    function updateFileInfo() {
        if (selectedFiles.length > 0) {
            fileInfo.innerHTML = "<strong>Arquivos selecionados:</strong><br>";

            selectedFiles.forEach((file, index) => {
                const fileName = file.name.slice(0, 25);
                const fileExtension = file.name.split('.').pop(); // Pega a extensão do arquivo
                fileInfo.innerHTML += `<div><span title="${file.name}">${fileName}.${fileExtension}</span>
                                       <button class="delete-button2" data-index="${index}">Excluir</button></div>`;
            });

            addDeleteListeners();
        } else {
            fileInfo.innerHTML = "";
        }
    }

    // função do botão de limpar toda pagina
    function addDeleteListeners() {
        const deleteButtons = document.querySelectorAll(".delete-button2");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                selectedFiles.splice(index, 1);
                updateFileInfo();
            });
        });

        resetButton.addEventListener("click", function () {
            selectedFiles = [];
            inputFile.value = "";
            updateFileInfo();
        });
    }
    // função de botão de enviar e checar os inputs
    sendButton.addEventListener("click", function () {
        const requiredInputs = form.querySelectorAll("[required]");
        let allInputsFilled = true;

        requiredInputs.forEach(input => {
            if (!input.value) {
                allInputsFilled = false;
            }
        });

        if (allInputsFilled) {
            if (selectedFiles.length > 0) {
                alert(`Formulário enviado com sucesso, "Boa sorte em sua venda!"`);
                form.submit(); // Enviar o formulário (você pode ajustar isso conforme necessário)
            } else {
                alert(`Formulário enviado com sucesso, porem não foi enviada nenhuma foto, "Boa sorte em sua venda!".`);
            }
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
}
setupFileUpload2();

// form3
function setupFileUpload2() {
    const inputFile3 = document.getElementById("arquivo");
    const fileInfo = document.getElementById("file-info3");
    const form = document.getElementById("upload-form3")
    const resetButton = document.querySelector("reset-button3");
    const sendButton = document.getElementById("send-button3");

    let selectedFiles = [];

    // evento que armazena um objeto na listagem de arquivos enviados.
    inputFile3.addEventListener("change", function () {
        const files2 = Array.from(inputFile3.files);

        if (files2.length > 0) {
            files2.forEach(file => {
                selectedFiles.push(file);
            });

            updateFileInfo();
        } else {
            fileInfo.innerHTML = "";
        }
    });

    // função de exibição para listar os arquivos enviados.
    function updateFileInfo() {
        if (selectedFiles.length > 0) {
            fileInfo.innerHTML = "<strong>Arquivos selecionados:</strong><br>";

            selectedFiles.forEach((file, index) => {
                const fileName = file.name.slice(0, 25);
                const fileExtension = file.name.split('.').pop(); // Pega a extensão do arquivo
                fileInfo.innerHTML += `<div><span title="${file.name}">${fileName}.${fileExtension}</span>
                                       <button class="delete-button2" data-index="${index}">Excluir</button></div>`;
            });

            addDeleteListeners();
        } else {
            fileInfo.innerHTML = "";
        }
    }

    // função do botão de limpar toda pagina
    function addDeleteListeners() {
        const deleteButtons = document.querySelectorAll(".delete-button2");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                selectedFiles.splice(index, 1);
                updateFileInfo();
            });
        });

        resetButton.addEventListener("click", function () {
            selectedFiles = [];
            inputFile.value = "";
            updateFileInfo();
        });
    }

    // função de botão de enviar e checar os inputs
    sendButton.addEventListener("click", function () {
        const requiredInputs = form.querySelectorAll("[required]");
        let allInputsFilled = true;

        requiredInputs.forEach(input => {
            if (!input.value) {
                allInputsFilled = false;
            }
        });

        if (allInputsFilled) {
            if (selectedFiles.length > 0) {
                alert(`Formulário enviado com sucesso, "Boa sorte em sua venda!"`);
                form.submit(); // Enviar o formulário (você pode ajustar isso conforme necessário)
            } else {
                alert(`Formulário enviado com sucesso, porem não foi enviada nenhuma foto, "Boa sorte em sua venda!".`);
            }
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
}
setupFileUpload3();
