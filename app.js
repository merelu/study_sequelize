const express = require("express");
const path = require("path");
const morgan = require("morgan");

const { sequelize } = require("./models");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");

sequelize
  //force:true면 서버 실행 시마다 테이블을 재생성합니다.
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
