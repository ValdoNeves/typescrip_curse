import morgan, {StreamOptions} from "morgan";
import config  from "config";
import Logger from "../../config/logger";

// print da requisições
const stream:StreamOptions = {
  write: (message) => Logger.http(message),
}

//caso não queria printas as requisições
const skip = () => {
  const env = config.get<string>("env") || "development"
  return env !== "development"
}

const morganMiddleware = morgan(
  ":method url::url status::status length::res[content-length] - time_request::response-time ms", //forma alguns dados a serem exibidos
  {stream, skip} // só exibe as mensagem em desenvolvimento
)

export default morganMiddleware;