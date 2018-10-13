import starWars from './index';
import { expect } from 'chai';

describe('starwars chars', function () {
  it('should work', function () {
    expect(true).to.be.true;
  });

  describe('all', function () {
    it('should be an array of strings', function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        })
      }
    });
    it('should include skywalker', function() {
      expect(starWars.all).to.include('Luke Skywalker');
    })
  });

  describe('random', function(){
    it('should return rnadom item from starwars all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    })
    it('should return an array of random items if passed a number', function() {
      var randomItem = starWars.random(3);
      expect (randomItem).to.have.length(3);
      randomItem.forEach(function(item) {
      expect(starWars.all).to.include(item);

      })


    })
  })
});