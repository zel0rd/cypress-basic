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
