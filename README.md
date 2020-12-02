# study_sequelize

노드에서 MySQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리인 시퀄라이즈를 학습하기 위한 프로젝트입니다.

예제 흐름

1. node 모듈 셋팅 (express, morgan, sequelize, sequelize-cli mysql2, -D nodemon)
2. Sequelize 생성 (module/index.js)
3. MySQL연결하기 - app.js 작성, config/config.json 작성
4. 모델 정의하기 - user, comment 모델 작성, models/index에서 연결시킨다.
5. 관계 정의하기 - 1. model각각에 static associate메서드에 관계를 넣습니다.
6. 프로그램 작성

- view 페이지 작성
- view 페이지에 필요한 기능 js 구현
- js구현시 서버에 데이터 요청 api 구현 - public 폴더
- 필요한 api를 서버에 구현한다 라우트 - routes 폴더, app.js
