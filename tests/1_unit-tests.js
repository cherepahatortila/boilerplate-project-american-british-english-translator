const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
suite('Unit Tests', () => {
test('favorite=favourite.', function(){
  const translator=new Translator('Mangoes are my favorite fruit','american-to-british');
 assert.equal(translator.translate(),'Mangoes are my <span class="highlight">favourite</span> fruit')
 });
test('yogurt=yoghurt', function(){
  const translator=new Translator('I ate yogurt for breakfast.','american-to-british');
  assert.equal(translator.translate(), 'I ate <span class="highlight">yoghurt</span> for breakfast.')
});
test("condo=flat", function(){
  const translator=new Translator('We had a party at my friend"s condo.','american-to-british');
  assert.equal(translator.translate(), 'We had a party at my friend"s <span class="highlight">flat</span>.')
});
test("trash can=bin", function(){
  const translator=new Translator('Can you toss this in the trashcan for me?','american-to-british');
  assert.equal(translator.translate(), 'Can you toss this in the <span class="highlight">bin</span> for me?')
});
test("parking lot=car park", function(){
  const translator=new Translator('The parking lot was full.','american-to-british');
  assert.equal(translator.translate(), 'The <span class="highlight">car park</span> was full.')
});
test("Rube Goldberg machine=Heath Robinson device", function(){
  const translator=new Translator('Like a high tech Rube Goldberg machine.','american-to-british');
  assert.equal(translator.translate(), 'Like a high tech <span class="highlight">Heath Robinson device</span>.')
});
test("play hooky=bunk off", function(){
  const translator=new Translator('To play hooky means to skip class or work.','american-to-british');
  assert.equal(translator.translate(), 'To <span class="highlight">bunk off</span> means to skip class or work.')});
test("Mr.=Mr", function(){
  const translator=new Translator('No Mr. Bond, I expect you to die.','american-to-british');
  assert.equal(translator.translate(), 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
});
test("Dr.=Dr", function(){
  const translator=new Translator('Dr. Grosh will see you now.','american-to-british');
  assert.equal(translator.translate(), '<span class="highlight">Dr</span> Grosh will see you now.')
});
test("12:15=12.15", function(){
  const translator=new Translator('Lunch is at 12:15 today.','american-to-british');
  assert.equal(translator.translate(), 'Lunch is at <span class="highlight">12.15</span> today.')
});
test("footie=soccer", function(){
  const translator=new Translator('We watched the footie match for a while.','british-to-american');
  assert.equal(translator.translate(), 'We watched the <span class="highlight">soccer</span> match for a while.')
});
test("paracetamol=tylenol", function(){
  const translator=new Translator('Paracetamol takes up to an hour to work.','british-to-american');
  assert.equal(translator.translate(), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
});
test("caramelise=caramelize", function(){
  const translator=new Translator('First, caramelise the onions.','british-to-american');
  assert.equal(translator.translate(), 'First, <span class="highlight">caramelize</span> the onions.')
});
test("bank holiday=public holiday,funfair=carnival", function(){
  const translator=new Translator('I spent the bank holiday at the funfair.','british-to-american');
  assert.equal(translator.translate(), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.')
});
test("bicky=cookie,chippy=fish-and-chip shop", function(){
  const translator=new Translator('I had a bicky then went to the chippy.','british-to-american');
  assert.equal(translator.translate(), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.')
});
test("bits and bobs=odds and ends, bum bag=fanny pack", function(){
  const translator=new Translator("I've just got bits and bobs in my bum bag.",'british-to-american');
  assert.equal(translator.translate(), `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`)
});
test("car boot=trunk", function(){
  const translator=new Translator("The car boot sale at Boxted Airfield was called off.",'british-to-american');
  assert.equal(translator.translate(), `The <span class="highlight">trunk</span> sale at Boxted Airfield was called off.`)
});
test("Mrs=Mrs.", function(){
  const translator=new Translator("Have you met Mrs Kalyani?",'british-to-american');
  assert.equal(translator.translate(), `Have you met <span class="highlight">Mrs.</span> Kalyani?`)
});
test("Prof=Prof.", function(){
  const translator=new Translator("Prof Joyner of King's College, London.",'british-to-american');
  assert.equal(translator.translate(), `<span class="highlight">Prof.</span> Joyner of King's College, London.`)
});
test("4.30=4:30.", function(){
  const translator=new Translator("Tea time is usually around 4 or 4.30.",'british-to-american');
  assert.equal(translator.translate(), `Tea time is usually around 4 or <span class="highlight">4:30</span>.`)
});
test("highlight 'favourite'", function(){
  const translator=new Translator("Mangoes are my favorite fruit.",'american-to-british');
  assert.equal(translator.translate(), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
});
test("highlight 'yoghurt'", function(){
  const translator=new Translator('I ate yogurt for breakfast.','american-to-british');
  assert.equal(translator.translate(), 'I ate <span class="highlight">yoghurt</span> for breakfast.')
});
test(" highlight 'soccer'", function(){
  const translator=new Translator('We watched the footie match for a while.','british-to-american');
  assert.equal(translator.translate(), 'We watched the <span class="highlight">soccer</span> match for a while.')
});
test("highlight 'tylenol'", function(){
  const translator=new Translator('Paracetamol takes up to an hour to work.','british-to-american');
  assert.equal(translator.translate(), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
});
});
