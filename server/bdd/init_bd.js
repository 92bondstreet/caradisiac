
const command =`curl -XPUT "localhost:9200/_bulk" -H "Content-Type: application/json" --data-binary @models.json`;


const  exec  = require('child_process').exec;
exec(command);
