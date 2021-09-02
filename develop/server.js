const express = require ('express');
const sequelize = require ('./config/connection');
const path = require ('path');
const routes = require ('./controllers/route-loader');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"public")));
app.use(routes);
sequelize.sync().then(() => {
  console.log('Sequelize connected to MySQL Database!');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
