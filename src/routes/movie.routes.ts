import { Router } from "express";
import { CreateMovieControler } from "../modules/movies/useCases/createMovie/createMovieControler"; 
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateControler";
import { UpdateMovieControler } from "../modules/movies/useCases/updateMovie/UpdateMovieControler";
import { DeleteMovieController } from "../modules/movies/useCases/deletemovie/DeleteMovieController";


const createMovieControler = new CreateMovieControler();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()
const updateMovieControler = new UpdateMovieControler()
const deleteMovieControler = new DeleteMovieController()

const movieRoutes = Router();

movieRoutes.post("/", createMovieControler.handle);
movieRoutes.patch("/:id", updateMovieControler.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle);
movieRoutes.delete("/release/:id", deleteMovieControler.handle);
movieRoutes.post("/rent", createMovieRentController.handle);


export { movieRoutes };
