const supertest = require("supertest");
const should = require("should");
const chai = require('chai');
const expect = chai.expect;
const server = supertest.agent("http://34.68.190.190");

describe("Location Service",function(){
    it("check existing location",function(done){
      // check for a existing test satellite location
      // check if it returns 200 & data
      server
      .get('/location-service/200.0/200.0')
      .set('auth', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTAyNTI0NzYsInByaXZpbGVnZXMiOlsiQVNTSUdOX0hFUk8iXSwiaWF0IjoxNjEwMjQ4ODc2fQ.UcmnhXw33OJo9YJMeQx9jPVlw3KfajZHJfeWPFKTci5PXFzCMyRG4dBNJND59YHKzBoSsYaPm3r5YkXKINfHpd8twJQwHMVuPWlGRhGRRpQnwRFtV8xbg7kwjDLX0hcr6ROUw2m5Wg9WUpgVsKlKg1CQ8mVNrroa_1c6hoXvmWn0oDBQkTJMiWFAxaOu_weX7xgS9ovpS_WB6fW-lHdYPWMOam-r3Fq5kYop7rjEJesC_rS78u1YgWmXKZOY4usqK2nZLUd84UJ5jyoiXJY1QSMgpsSNY620jVWoyc8mXxrtAsbHrVsp0ET5eilpEpU0aaV5voVXyS1Xrypgp7ReVA')
      .expect(200)
      .end(function(err,res){
        expect(res.status).to.equal(200); 
        expect(res.body.data).to.be.an('array'); 
        expect(res.body.data.length).to.equal(1); 

        done();
      });
    });

    // check for a fresh location
    it("check fresh location",function(done){
      // check for a existing test satellite location
      // check if it returns 200 & data
      server
      .get('/location-service/0.0/0.0')
      .set('auth', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTAyNTI0NzYsInByaXZpbGVnZXMiOlsiQVNTSUdOX0hFUk8iXSwiaWF0IjoxNjEwMjQ4ODc2fQ.UcmnhXw33OJo9YJMeQx9jPVlw3KfajZHJfeWPFKTci5PXFzCMyRG4dBNJND59YHKzBoSsYaPm3r5YkXKINfHpd8twJQwHMVuPWlGRhGRRpQnwRFtV8xbg7kwjDLX0hcr6ROUw2m5Wg9WUpgVsKlKg1CQ8mVNrroa_1c6hoXvmWn0oDBQkTJMiWFAxaOu_weX7xgS9ovpS_WB6fW-lHdYPWMOam-r3Fq5kYop7rjEJesC_rS78u1YgWmXKZOY4usqK2nZLUd84UJ5jyoiXJY1QSMgpsSNY620jVWoyc8mXxrtAsbHrVsp0ET5eilpEpU0aaV5voVXyS1Xrypgp7ReVA')
      .expect(200)
      .end(function(err,res){
        expect(res.status).to.equal(200); 
        expect(res.body.data).to.be.an('array'); 
        expect(res.body.data.length).to.equal(0); 

        done();
      });
    });
  });