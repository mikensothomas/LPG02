const database = require('./bd');
const Filme = require('./Cinema/tableFilme');
const Categoria = require('./crudCategoria');

function Movie (nome, banner, categoria) {
    this.nome = nome;
    this.banner = banner;
    this.categoria = categoria;
}

Movie.prototype.insert = async function () {

    await database.sync();
    
    const selectCategoria = await Categoria.select(this.categoria);

    let id;

    if (selectCategoria !== null) {
        id = selectCategoria.categoriaId;    
    } else {
        const categ = new Categoria(this.categoria);
        await categ.insert();
        categoriaSelect = await Categoria.select(this.categoria);
        id = categoriaSelect.categoriaId;
    }

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = Filme.create({
            filmeNome: this.nome,
            filmeBanner: this.banner,
            idCategoria: id
        });
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
}

Movie.select = async function () {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Filme.findAll();
        console.log('SELECT AQUI: ' + resultadoCreate);
        console.log(resultadoCreate.every(filme => filme instanceof Filme));
        return resultadoCreate;
    } catch (error) {
        console.log(error);
    }
}

Movie.selectByFilme = async function (filme) {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoSelect = await Filme.findOne({
            where: {
                filmeNome: filme
            }
        });
        console.log('RESULTADO SELECT: ' + resultadoSelect.filmeId);
        return resultadoSelect;
    } catch (error) {
        console.log(error);
    }
}

module.exports = Movie;