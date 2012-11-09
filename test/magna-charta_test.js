/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.magnaCharta', {
    setup: function() {
      // get a plugin instance
      this.$singleTable = $("#qunit-fixture").children("#single");
      this.singleMC = $.magnaCharta(this.$singleTable);

      // now do the same for a table with more rows of data
      this.$multiTable = $("#qunit-fixture").children("#multiple");
      this.multiMC = $.magnaCharta(this.$multiTable);
    }
  });


  test('adds a class to all rows it affects', function() {
    // check the thead tr doesnt have the class
    ok(!this.$singleTable.find("thead tr").hasClass("mc-row"), 'doesnt add class to thead rows');
    // check the tbody tr do
    equal(this.$singleTable.find(".mc-row").length, 3);
    equal(this.$multiTable.find(".mc-row").length, 3);
  });

  test('adds a class to all table cells that become bars', function() {
    equal(this.$singleTable.find(".mc-bar-cell").length, 3);
    equal(this.$multiTable.find(".mc-bar-cell").length, 6);
  });


  test('add classes to all cells that are given a width', function() {
    equal(this.$singleTable.find(".mc-bar-cell").length, 3);
  });

  test('calulateMaxWidth returns object with right max value in', function() {
    deepEqual(this.singleMC.calculateMaxWidth(), {
      max: parseFloat(5, 10),
      single: parseFloat(100/5)
    });
  });

  test('applying the calculated widths correctly', function() {
    this.singleMC.applyWidths();
    equal(this.$singleTable.find("tbody td").get(1).style.width, "100%");
    equal(this.$singleTable.find("tbody td").get(3).style.width, "80%");
    equal(this.$singleTable.find("tbody td").get(5).style.width, "60%");
  });

  test('utils.isFloat', function() {
    ok(this.singleMC.utils.isFloat(4.56), "4.56 is a float");
    ok(this.singleMC.utils.isFloat(7), "7 is a float");
    ok(!this.singleMC.utils.isFloat("hello"), "hello is not a float");
    ok(!this.singleMC.utils.isFloat("hello1344"), "hello1344 is not a float");
  });

  test('utils.returnMax', function() {
    equal(this.singleMC.utils.returnMax([5,6,7,1]), 7);
    equal(this.singleMC.utils.returnMax([1,2,1,6]), 6);
    equal(this.singleMC.utils.returnMax([2,2,1,3]), 3);
    equal(this.singleMC.utils.returnMax([5,4,3]), 5);
  });

  test('utils.stripValue', function() {
    equal(this.singleMC.utils.stripValue("1.23m"), "1.23");
    equal(this.singleMC.utils.stripValue("£1.23m"), "1.23");
    equal(this.singleMC.utils.stripValue("0.56%"), "0.56");
  });


}(jQuery));
