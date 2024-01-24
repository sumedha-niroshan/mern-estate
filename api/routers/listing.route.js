import express from 'express';
import {createListing} from "../controllers/listing.controller.js"

const listingRouter = express.Router();

listingRouter.post('/create', createListing)







export default listingRouter;