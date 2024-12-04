import { Request, Response } from 'express';

const adverts = [
    {
        id: 1,
        title: "Advert 1",
        description: "Description 1"
    },
    {
        id: 2,
        title: "Advert 2",
        description: "Description 2"
    }
]

/**
 * Get all adverts 
 * @param req: Request
 * @param res: Response 
 */
async function getAllAdverts(req: Request, res: Response ) {
    res.json(adverts)
}

/**
 * Create a new advert
 * @param req: Request
 * @param res: Response 
 */
async function createAdvert(req: Request, res: Response ) {
    const newAdvert = req.body;
    adverts.push(newAdvert);
    console.log(req.body);
    res.status(201).json({message: "Advert created"})
}

/**
 * Get advert by id
 * @param req: Request
 * @param res: Response 
 */
async function getAdvertsById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const advert = adverts.find(advert => advert.id === parseInt(id));
    if (advert === undefined ) res.status(404).json({message: "Advert Not Found"});
    res.json(advert)
}

/**
 * Update advert's informations by id
 * @param req: Request
 * @param res: Response 
 */
async function updateAdvertById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const advertId = adverts.findIndex(advert => advert.id === parseInt(id));
    if (adverts[advertId] === undefined ) res.status(404).json({message: "Advert Not Found"});
    adverts[advertId] = { id: parseInt(id), ...req.body };
    res.sendStatus(200);
}

/**
 * Delete advert by id
 * @param req: Request
 * @param res: Response
 */
async function deleteAdvertById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const advertId = adverts.findIndex(advert => advert.id === parseInt(id));
    if (adverts[advertId] === undefined ) res.status(404).json({message: "Advert Not Found"});
    adverts.splice(advertId, 1);
    res.sendStatus(200);
}

export { getAllAdverts, createAdvert, getAdvertsById, updateAdvertById, deleteAdvertById }