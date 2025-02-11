// const assert = require("assert");
// const { Given, When, Then } = require("@cucumber/cucumber");

import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";

function isItFriday(today) {
	if (today === "Sexta-feira") {
		return "TGIF";
	} else {
		return "Não";
	}
}

Given("que hoje é {string}", function (givenDay) {
	this.today = givenDay;
});

When("pergunto se já é sexta-feira", function () {
	this.actualAnswer = isItFriday(this.today);
});

Then("deveria me dizer {string}", function (expectedAnswer) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});
