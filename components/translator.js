'use strict';

const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
 constructor(text,locale) 
  {this.locale = locale,
  this.text=text}
 translate(){ 
   var textToArray=this.text;
  /\.$/.test(textToArray)?     textToArray=textToArray.replace(/\.$/," ."):textToArray;
  textToArray=textToArray.split(' ');
  if(this.locale=='american-to-british'){

textToArray.map((x,i)=>
{if(americanOnly[x.toLowerCase()]){
var result=americanOnly[x.toLowerCase()];
  if(/^[A-Z]/.test(x)){    result=result.charAt(0).toUpperCase()+result.slice(1);
  }
  textToArray[i]=`<span class="highlight">${result}</span>`}});
    
//словосполучення 2-слів
textToArray.map((x,i)=>{
var nextWord=textToArray[i+1];
var multiwords= (textToArray[i]+' '+nextWord).toLowerCase();
if(americanOnly[multiwords]){
var result=americanOnly[multiwords];
  if(/^[A-Z]/.test(x)){    result=result.charAt(0).toUpperCase()+result.slice(1);
  }
  textToArray[i]=`<span class="highlight">${result}</span>`;
textToArray.splice(i+1,1)}});

//словосполучення 3-слів
textToArray.map((x,i)=>{
var nextWord=textToArray[i+1];
var multiwords= (textToArray[i]+' '+nextWord+" "+textToArray[i+2]).toLowerCase();
if(americanOnly[multiwords]){
var result=americanOnly[multiwords];
  if(/^[A-Z]/.test(x)){    result=result.charAt(0).toUpperCase()+result.slice(1);
  }
  textToArray[i]=`<span class="highlight">${result}</span>`;
textToArray.splice(i+1,2)}});
    
textToArray.map((x,i)=>{
if(americanToBritishSpelling[x.toLowerCase()]){
var result=americanToBritishSpelling[x.toLowerCase()];
  if(/^[A-Z]/.test(x)){   result=result.charAt(0).toUpperCase()+result.slice(1);
  }
textToArray[i]=`<span class="highlight">${result}</span>`;
}});

textToArray.map((x,i)=>{if(americanToBritishTitles[x.toLowerCase()])textToArray[i]=`<span class="highlight">${americanToBritishTitles[x.toLowerCase()].charAt(0).toUpperCase()+americanToBritishTitles[x.toLowerCase()].slice(1)}</span>`
 });
    
//"10.30" in British English and "10:30" in American 
if(/[0-9]{1,2}:[0-9]{2}/.test(textToArray.join(' '))){
var arrayOfMatches=textToArray.join(' ').match(/[0-9]{1,2}:[0-9]{2}/g);
var replacedMatches= arrayOfMatches.map(x=>x.replace(':','.'));
textToArray.map((x,i)=>{
if(arrayOfMatches.find((k)=>k==x))
  textToArray[i]=`<span class="highlight">${replacedMatches[arrayOfMatches.findIndex(k=>k==x)]}</span>`
});
} 
    
textToArray=textToArray.join(' '); 
/\.$/.test(textToArray)?     textToArray=textToArray.replace(" .","."):textToArray;
  }else{
    
textToArray.map((x,i)=>{if(britishOnly[x.toLowerCase()]){
 var result=britishOnly[x.toLowerCase()];
  if(/^[A-Z]/.test(x)){ result=result.charAt(0).toUpperCase()+result.slice(1);
  } 
textToArray[i]=`<span class="highlight">${result}</span>`}});

textToArray.map((x,i)=>{
var britishValuesArray=Object.values(americanToBritishSpelling);
if(britishValuesArray.find(y=>y==x.toLowerCase())){
var index=
britishValuesArray.findIndex(y=>y==x.toLowerCase());
var result=Object.keys(americanToBritishSpelling)[index];
  if(/^[A-Z]/.test(x)){   result=result.charAt(0).toUpperCase()+result.slice(1);
  }
textToArray[i]=`<span class="highlight">${result}</span>`;
}});

textToArray.map((x,i)=>{
var britishValuesArray=Object.values(americanToBritishTitles);
if(britishValuesArray.find(y=>y==x.toLowerCase())){
var index=
britishValuesArray.findIndex(y=>y==x.toLowerCase());
var result=Object.keys(americanToBritishTitles)[index];
result=result.charAt(0).toUpperCase()+result.slice(1);
textToArray[i]=`<span class="highlight">${result}</span>`;
}});
    
//словосполучення
textToArray.map((x,i)=>{
var nextWord=textToArray[i+1];
var multiwords= (textToArray[i]+' '+nextWord).toLowerCase();
if(britishOnly[multiwords]){
var result=britishOnly[multiwords];
if(/^[A-Z]/.test(x)){    result=result.charAt(0).toUpperCase()+result.slice(1);
  }
  textToArray[i]=`<span class="highlight">${result}</span>`;
textToArray.splice(i+1,1)}});

//словосполучення 3-слів
textToArray.map((x,i)=>{
var nextWord=textToArray[i+1];
var multiwords= (textToArray[i]+' '+nextWord+" "+textToArray[i+2]).toLowerCase();
if(britishOnly[multiwords]){
var result=britishOnly[multiwords];
  if(/^[A-Z]/.test(x)){    result=result.charAt(0).toUpperCase()+result.slice(1);
  }
  textToArray[i]=`<span class="highlight">${result}</span>`;
textToArray.splice(i+1,2)}});
    
//"10.30" in British English and "10:30" in American
if(/[0-9]{1,2}.[0-9]{2}/.test(textToArray.join(' '))){
var arrayOfMatches=textToArray.join(' ').match(/[0-9]{1,2}.[0-9]{2}/g);
var replacedMatches= arrayOfMatches.map(x=>x.replace('.',':'));
textToArray.map((x,i)=>{
if(arrayOfMatches.find((k)=>k==x))
  textToArray[i]=`<span class="highlight">${replacedMatches[arrayOfMatches.findIndex(k=>k==x)]}</span>`
});
} 
    
 textToArray=textToArray.join(' '); 
/\.$/.test(textToArray)?     textToArray=textToArray.replace(" .","."):textToArray;
}

return textToArray;
 }
}

module.exports = Translator;
