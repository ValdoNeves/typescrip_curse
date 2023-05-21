import { Request, Response } from "express";

//model
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {

  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    res.status(201).json(movie)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
    res.status(500).send({error: "Por Favor, tente novamente mais tarde!"})

  }
}

export async function findMovieById(req: Request, res: Response) {

  try {

    const id = req.params.id
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Filme não encontrado!" })
    }

    return res.status(200).json(movie);

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
    res.status(500).send({error: "Por Favor, tente novamente mais tarde!"})
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {

    const movies = await MovieModel.find();
    return res.status(200).json(movies)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
    res.status(500).send({error: "Por Favor, tente novamente mais tarde!"})
  }
}

export async function removeMovies(req: Request, res: Response) {
  try {


  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
    res.status(500).send({error: "Por Favor, tente novamente mais tarde!"})
  }
}