function Datos(props) {


    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">orden de tu pokemon</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">experiencia</th>
                    <th scope="col">identificador</th>
                    <th scope="col">altura</th>





                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{props.pokemonD.order}</th>
                    <td>{props.pokemonD.name}</td>
                    <td>{props.pokemonD.base_experience}</td>
                    <td>{props.pokemonD.id}</td>
                    <td>{props.pokemonD.height}</td>
                </tr>
            </tbody>
        </table>

    )
}
export default Datos;