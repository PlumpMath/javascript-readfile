
var parseFile = function(data){
  document.getElementById('contents').innerHTML = contents;
};

var fileupload_handler = function(evt){
  var f = evt.target.files[0]; 
  var reader = new FileReader();
  reader.onload = function (e) { 
    var contents = e.target.result;
    parseFile(contents);
  };
  reader.readAsText(f, 'UTF-8');
};

document.getElementById('fileupload').addEventListener('change', fileupload_handler, false);
