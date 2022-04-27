'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  app.route('/api/translate')
 .post((req, res) => {   
  const translator = new Translator(req.body.text,req.body.locale);
  if(req.body.text=="")
   res.send({ error: 'No text to translate' })
  else if(!req.body.text||!req.body.locale)
   res.send({ error: 'Required field(s) missing' })
  else if(req.body.locale!='american-to-british'&&req.body.locale!='british-to-american')
   res.send({ error: 'Invalid value for locale field' })
  else if(req.body.text==translator.translate())
   res.send({text:req.body.text, translation:'Everything looks good to me!' })
  else
    res.send({text:req.body.text, translation:translator.translate()})
  });
};
