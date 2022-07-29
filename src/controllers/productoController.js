import {ProductoDao} from '../daos/index.js'

export const getProductos = async (req, res) => {
    const verProductos = await ProductoDao.getAll()
    res.json(verProductos)
}

export const postProductos = async (req, res) => {
    const {title, description, code, price, thumbnail, stock} = req.body 
    const e = await ProductoDao.newProduct(title, description, code, price, thumbnail, stock)
    res.json(e)
}

export const getProductoId = async (req, res) => {
    const id = req.params.id
    const e = await ProductoDao.getById(id)
    if(!e){return res.status(404).json({error: "Producto no encontrado"})}
    res.json(e)
}

export const putProduct = async (req, res) => {
    const {title, description, code, price, thumbnail, stock} = req.body
    const id = req.params.id
    const e = await ProductoDao.getById(id)
    if(!e){return res.status(404).json({error: "Producto no encontrado"})}
    const eModified = await ProductoDao.update(id,title, description, code, price, thumbnail, stock)
    res.json(eModified)
    
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    if(!id){return res.json({ error: "El parámetro no es un número o el id no existe" })}
    await ProductoDao.deleteById(id)
    res.json(await ProductoDao.getAll())
}
