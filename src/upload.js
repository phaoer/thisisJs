
(function(){
  "use strict";
  if(typeof $ !== "undefined" || typeof jQuery !== "undefined"){
    (function($) {
        $.fn.ajaxfileupload = function(options) {
            var settings = {
              data: {},
              url: "",
              start: function() { },
              complete: function(response) { },
              cancel: function() { },
              ve : true,     //是否验证文件类型
              fileType : ["gif","png","jpg","jpeg"],
              sb : null     //提交按钮
            };
    
            var uploadingFile = false;
    
            if ( options ) { 
              $.extend( settings, options );
            }
    
            return this.each(function() {
              var $element = $(this);
    
              if($element.data("ajaxUploader-setup") === true){
                return;
              };
    
              $element.change(function(){
                uploadingFile = false;
    
                if (settings.sb == null){
                  uploadFile();
                }
              });
    
              if (settings.sb == null){
                // do nothing
              } else{
                settings.sb.click(function(e){
                  // Prevent submit
                  e.preventDefault();
                  
                  if (!uploadingFile){
                    uploadFile();
                  }
                });
              }
    
              var uploadFile = function(){
                if($element.val() == "") {
                  return settings.cancel.apply($element, [settings.data]);
                }
    
                // make sure extension is valid
                var ext = $element.val().split(".").pop().toLowerCase();
                if(true === settings.ve && $.inArray(ext, settings.fileType) == -1){
                  // Pass back to the user
                  settings.complete.apply($element, [{status: "上传文件类型必须是" + settings.fileType.join(", ")}, settings.data]);
                } else { 
                  uploadingFile = true;
    
                  // Creates the form, extra inputs and iframe used to 
                  //  submit / upload the file
                  wrapElement($element);
    
                  // Call user-supplied (or default) start(), setting
                  //  it"s this context to the file DOM element
                  var ret = settings.start.apply($element, [settings.data]);
    
                  // let start have the option to cancel the upload
                  if(ret !== false){
                    $element.parent("form").submit(function(e) { 
                      e.stopPropagation(); 
                    }).submit();
                  } else {
                    uploadingFile = false;
                  }
                }
              };
    
              // Mark this element as setup
              $element.data("ajaxUploader-setup", true);
    
              /*
              // Internal handler that tries to parse the response 
              //  and clean up after ourselves. 
              */
              var handleResponse = function(loadedFrame, element) {
                var response, responseStr = $(loadedFrame).contents().text();
                try {
                  //response = $.parseJSON($.trim(responseStr));
                  response = JSON.parse(responseStr);
                } catch(e) {
                  response = responseStr;
                }
    
                // Tear-down the wrapper form
                element.siblings().remove();
                element.unwrap();
    
                uploadingFile = false;
    
                // Pass back to the user
                settings.complete.apply(element, [response, settings.data]);
              };
    
              /*
              // Wraps element in a <form> tag, and inserts hidden inputs for each
              //  key:value pair in settings.data so they can be sent along with
              //  the upload. Then, creates an iframe that the whole thing is 
              //  uploaded through. 
              */
              var wrapElement = function(element) {
                // Create an iframe to submit through, using a semi-unique ID
                var frameId = "ajaxUploader-iframe-" + Math.round(new Date().getTime() / 1000);
                $("body").after("<iframe width='0' height='0' style='display:none;' name='" + frameId + "' id='" + frameId + "'/>");
                $("#" + frameId).get(0).onload = function() {
                  handleResponse(this, element);
                };
    
                // Wrap it in a form
                element.wrap(function() {
                  return "<form action='" + settings.url + "' method='POST' enctype='multipart/form-data' target='" + frameId + "' />";
                })
                // Insert <input type="hidden">"s for each param
                .before(function() {
                  var key, html = "";
                  for(key in settings.data) {
                    var paramVal = settings.data[key];
                    if (typeof paramVal === "function") {
                      paramVal = paramVal();
                    }
                    html += "<input type='hidden' name='" + key + "' value='" + paramVal + "' />";
                  }
                  return html;
                });
              };
            });
          };
    })( jQuery );
  }
})();