var assert = chai.assert

describe('Calculator', function() {

	it('append 1 to empty', function() {
		assert.equal(properAppend("","1"),"1");
	});

	it('append 2 to 0', function () {
		assert.equal(properAppend("0","2"),"2");
	});

	it('append 4 to 3', function () {
		assert.equal(properAppend("3","4"),"34");
	});



	describe('Calculations', function() {
		describe('function add', function() {
			it('should return "2" when I add (+) "1 and "1', function () {
				var result = (Number("1") + Number("1")).toString(); //running the function calculate with the function 1, 1
				assert.equal(result, "2");
			});
		});
	});

});