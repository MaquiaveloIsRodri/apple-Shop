
function precios(id) {
    switch (id) {
        case 1:
            return {
                precio: 670 * 100,
            }
            break;
        case 2:
            return {
                precio: 320* 100}
            break;
        case 3:
            return {
                precio: 1600* 100}
            break;
        case 4:
            return {
                precio: 1000* 100}
            break;
        case 5:
            return {
                precio: 167* 100}
            break;
        case 6:
            return {
                precio: 500* 100}
            break;
        default:
            return {
                precio: 0
            }
        }

}

export default precios;