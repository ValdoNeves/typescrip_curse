import { body } from "express-validator";

const lengthMin:number = 2
const ratingMax: number = 10
const ratingMin: number = 0

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O titulo é obrigatório")
      .isLength({min: lengthMin})
      .withMessage(`O titulo precisa ter no minimo ${lengthMin} caracteres`),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um número")
      .custom((value:number)=> {
        if(value < ratingMin || value > ratingMax){
          throw new Error(`A nota precisa ser entre ${ratingMin} e ${ratingMax}`)
        }
        return true
      }),
    body('description')
      .isString()
      .withMessage("A descrição é obrigatória."),
    body('director')
      .isString()
      .withMessage('O nome do diretor é obrigatório.'),
    body("poster")
      .isURL()
      .withMessage("A imagem precisa vir por uma URL.")
  ]
}