Feature("ajayTest1");

Scenario("test something", async I => {
  I.amOnPage("https://www.cm.ehealthinsurance.com/medicare");
  I.waitForVisible("#TOPS-319>div>button>svg", 5);

  let output = await I.grabNumberOfVisibleElements('//*[@id="TOPS-319"]/div');

  if (output) {
    I.click("#TOPS-319>div>button>svg");
    I.wait(5);
  }

  output = await I.grabNumberOfVisibleElements('//*[@id="TOPS-319"]/div');
  console.log(`Must Not be Visible ${output}`);
});
