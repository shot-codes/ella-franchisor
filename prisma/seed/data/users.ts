import { User } from "@prisma/client";

export default [
  {
    id: "clc54944v00008a7jfr0lhj0k",
    hashed_password: "",
    provider_id: "github:43202406",
    email: "contact@shot.codes",
    username: "N",
    avatar_url: "https://avatars.githubusercontent.com/u/43202406?v=4",
  },
  {
    id: "clc6swsws00008aeo4tqz01qx",
    hashed_password:
      "s2:Ba72xhGwMWcjJAx6:69142bcead85d63735e19fcf14c4a0a6e805f1710f8e7ed4bd3c810f436afee70832c70abd6db5e11e49d594be1c91c7b3f48460eead3612d96502a4b9929aa2",
    provider_id: "provider_id:test",
    email: "some@email.com",
    username: "test",
    avatar_url: "https://avatars.githubusercontent.com/u/27566670?v=4",
  },
] satisfies User[];
