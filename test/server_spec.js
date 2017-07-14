var request = require('supertest');
var expect = require('chai').expect;
var express = require('express');

var app = require('../server-config.js');

describe('get api', function() {

  it ('GET "/" should ', function(done) {

    request(app)
      .get('/')
      .expect(function(result){
        // console.log('RESULT', result.text)
        expect(result.text).to.equal('Hello!');
      })
    .end(done);
  });

});