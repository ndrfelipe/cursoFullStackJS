exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar form</button>
        </form>
    `);
}