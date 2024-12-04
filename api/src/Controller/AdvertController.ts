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
 * Get advert by id
 * @param req: Request
 * @param res: Response 
 */
async function getAdvertsById(req: Request, res: Response ) {
    const id = req.params.id;
    const advert = adverts.find(advert => advert.id === parseInt(id));
    if (advert === undefined ) res.status(404).json({message: "Not Found"});
    res.json(advert)
}

export { getAllAdverts, getAdvertsById }