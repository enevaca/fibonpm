const expect = require('chai').expect
const fibonpm = require('..').default

describe('#fibonpm', function () {
	it('Serie fibonacci, la suma de los dos anteriores es el siguiente, empezando en 0 1 1', function () {
		const r = fibonpm(10)
		expect(r).to.equal(34)
	})
})