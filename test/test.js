'use strict';

var
	createRng = require('portable-rng'),
	uuid = require('../index.js'),
	RE_VALID_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('UUID', function() {
	describe('uuid()', function() {
		it('should generate a valid uuid', function() {
			uuid().should.match(RE_VALID_UUID);
		});
	});
	describe('uuid.setRng()', function() {
		it('should generate reproducible uuids', function() {
			uuid.setRng(createRng(123));
			uuid().should.equal('7174a748-cc39-4b0e-b675-616095cdea1f');
			uuid().should.equal('ac4e6c24-b3d3-4394-ba65-9418011c98bc');
		});
	});
});
