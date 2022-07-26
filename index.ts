import express from "express";
import helmet from "helmet";
import { connect } from "./db/db";
import players from "./routes/players";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());

app.get("/", async (req, res, next): Promise<void> => {
  res.send("Hello World!");
});

app.use("/players", players);

connect().then((response) => {
  if (response) {
    console.log("connected to database");
  }
});

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
});
