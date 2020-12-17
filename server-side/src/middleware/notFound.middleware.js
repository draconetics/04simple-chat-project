export const notFoundHandler = (
  request,
  response
) => {

  const message = "Resource not found";

  return response.status(404).send({status:404,message});
};