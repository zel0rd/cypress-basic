# CYPRESS 연습하기

![](cypress.gif)

## CYPRESS 사용법

npm install cypress를 통해 설치
node_modules/.bin/cypress open 을 통해 실행
cypress/integration 안에 테스트 파일을 넣고 수행하면 됨.
integration안에 파일명 형식은 [name].spec.js 이렇게 작성하면 됨

```javascript
describe("ui-counter", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:8081/");
  });

  it("+ 버튼 클릭시 1 증가한다.", () => {
    // btn-inc 클래스를 가진 요소를 클릭
    cy.get(".plus-button").click();

    // value 클래스를 가진 요소의 텍스트가 11
    cy.get(".count-display").should("have.value", "11");
  });

  it("+ 버튼을 10번 클릭해도 최대값을 12를 넘을 수 없다..", () => {
    // btn-inc 클래스를 가진 요소를 클릭
    for (let i = 0; i < 10; i++) {
      cy.get(".plus-button").click();
    }

    // value 클래스를 가진 요소의 텍스트가 12
    cy.get(".count-display").should("have.value", "12");
  });

  it("- 버튼 클릭시 1 감소한다.", () => {
    // btn-inc 클래스를 가진 요소를 클릭
    cy.get(".minus-button").click();

    // value 클래스를 가진 요소의 텍스트가 9
    cy.get(".count-display").should("have.value", "9");
  });

  it("- 버튼을 10번 클릭해도 최소값 8보다 작을 수 없다..", () => {
    // btn-dec 클래스를 가진 요소를 클릭
    for (let i = 0; i < 10; i++) {
      cy.get(".minus-button").click();
    }

    // value 클래스를 가진 요소의 텍스트가 12
    cy.get(".count-display").should("have.value", "8");
  });
});
```

cy.visit / cy.get 등등을 이용하여 원하는 기능을 수행하고 .should안에 기대값을 넣어 원하는 대로 수행이 되는지 확인하면 된다.


-------------

<br/>
<br/>

<p align="middle" >
  <img width="100px;" src="src/images/counter_icon.png"/>
</p>
<h2 align="middle">UI Counter</h2>
<p align="middle">Cypress를 익혀보기 위한 초간단 미션</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!
<p align="middle">
  <img width="300" src="src/images/ui_counter.png">
</p>

counter라는 간단한 미션을 통해서 Cypress라는 E2E 도구에 익숙해져보세요. 아래의 간단한 기능을 구현하면 쉽게 Cypress도구를 사용해보실 수 있습니다.

- [ ] 생성시 버튼과 초기값(10)을 렌더링 한다.
- [ ] + 버튼을 클릭 시 count가 1증가한다.
- [ ] - 버튼을 클릭 시 count가 1감소한다.
- [ ] + 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)
- [ ] - 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)

# 🌡️ 실습: Cypress 설치 및 사용
 
```light
yarn install or npm install
cypress open
```

## 결과 확인
![Screen Shot 2018-11-23 at 6.48.56 PM \(1\).png](https://nextstep-storage.s3.ap-northeast-2.amazonaws.com/37e4a2bdb4564fd996fd8c1235057d59)

## 실행 화면
![Screen Shot 2018-11-23 at 6.49.52 PM \(1\).png](https://nextstep-storage.s3.ap-northeast-2.amazonaws.com/751848b6474941669abf18146b2e6a33)

## 액션 로그
![Screen Shot 2018-11-23 at 6.50.33 PM \(1\).png](https://nextstep-storage.s3.ap-northeast-2.amazonaws.com/07b4dac1582c4e6a9f2a908b25a8e8e2)


## 👏 Contributing
만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요. 

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/imakerjun/cypress-basic/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/imakerjun/cypress-basic/blob/master/LICENSE) licensed.
