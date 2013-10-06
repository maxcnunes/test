var gith = require('gith').create(9001);

gith({
    repo: 'maxcnunes/test'
  }).on('all', function(){
    console.log('test');
});
