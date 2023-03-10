import { rest } from "msw";

const routes = {
  users: "/users",
  login: "/login",
};

const apiUrl = process.env.REACT_APP_URL_API!;

export const handlers = [
  rest.post(`${apiUrl}${routes.users}${routes.login}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "sda123-asd1!23.da?34" }))
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${routes.users}${routes.login}`, (req, rest, ctx) => {
    return rest(ctx.status(401));
  }),
];
