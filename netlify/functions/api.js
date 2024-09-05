import dotenv from "dotenv";

dotenv.config();

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Server is running!" }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
};
