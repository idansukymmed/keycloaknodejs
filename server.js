const express = require("express");
const cookieParser = require("cookie-parser");
const KcAdminClient = require("keycloak-admin").default;

const app = express();

require("dotenv").config();

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);
app.use(cookieParser());

const kcAdminClient = new KcAdminClient({
  baseUrl: "http://localhost:8080/auth",
  realmName: "master",
});

let execute = async function () {
  await kcAdminClient.auth({
    username: "kymmed",
    password: "Asdfasdf123",
    grantType: "password",
    clientId: "nodejs-admin-client",
    totp: "123456", // optional Time-based One-time Password if OTP is required in authentication flow
  });

  const users = await kcAdminClient.users.find();

  console.log(users, "<<<users");
};

execute();

const port = process.env.PORT || 3018;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
