import {CarritoDao} from '../daos/index.js';

export const postCarrito = async (req, res)=>{
    const e = await CarritoDao.newCart()
    res.json(e)
}

export const verCarrito = async (req, res) => {
    const id = req.params.id
    const e = await CarritoDao.getById(id)
    if(!e){return res.status(404).json({error: "Carrito no encontrado"})}
    res.json(e)
}
export const deleteCarrito = async (req, res) => {
    const id = req.params.id
    const e = await CarritoDao.getById(id)
    if(!e){return res.status(404).json({error: "Carrito no encontrado"})}
    await CarritoDao.deleteById(id)
    res.json(await CarritoDao.getAll())
}
export const listarCarritos =  async (req, res) => {
    const verCarritos = await CarritoDao.getAll()
    res.json(verCarritos)
}
