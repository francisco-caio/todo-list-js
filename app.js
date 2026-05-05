class tarefas {
    constructor() {
        this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        this.mostrar();
    }

    adicionar() {
        const input = document.getElementById('inputTarefa');
        const tarefa = input.value.trim();

        if (!texto) return;

        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        };

        this.tarefas = [...this.tarefas, novaTarefa];
        this.salvar();
        this.mostrar();
        input.value = '';
    }
    toggle(id) {
        this.tarefas = this.tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t);
        this.salvar();
        this.mostrar();
    }
    remover(id) {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
        this.salvar();
        this.mostrar();
    }
    salvar() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
   mostrar() {
    const lista = document.getElementById('lista');
    lista.innerHTML = this.tarefas.map(t => `
        <li class="${t.concluida ? 'concluida' : ''}">
            <span onclick="app.toggle(${t.id})" style="cursor:pointer">
                ${t.concluida ? '✅' : '⬜'} ${t.texto}
            </span>
            <button onclick="app.remover(${t.id})">🗑️</button>
        </li>
    `).join('');
    }
}


class AppTarefas {
    constructor() {
        this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        this.renderizar();
    }
    
    adicionar() {
        const input = document.getElementById('inputTarefa');
        const texto = input.value.trim();
        
        if (!texto) return;
        
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        };
        
        this.tarefas = [...this.tarefas, novaTarefa];
        this.salvar();
        this.renderizar();
        input.value = '';
    }
    
    toggle(id) {
        this.tarefas = this.tarefas.map(t => 
            t.id === id ? { ...t, concluida: !t.concluida } : t
        );
        this.salvar();
        this.renderizar();
    }
    
    remover(id) {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
        this.salvar();
        this.renderizar();
    }
    
    salvar() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
    
    renderizar() {
        const lista = document.getElementById('lista');
        lista.innerHTML = this.tarefas.map(t => `
            <li class="${t.concluida ? 'concluida' : ''}">
                <span onclick="app.toggle(${t.id})" style="cursor:pointer">
                    ${t.concluida ? '✅' : '⬜'} ${t.texto}
                </span>
                <button onclick="app.remover(${t.id})">🗑️</button>
            </li>
        `).join('');
    }
}

const app = new AppTarefas();