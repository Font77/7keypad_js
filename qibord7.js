_16bitsMkcVal = 65408;//0x8080 ;
_state16Keys = 65535;//0xffff;
_prevPressedIndex = 20;
_stagesEventPassed = 0 ;
_vhichSevenKey = 0;
_prevId=20;
caretInfo = 0;
function handleButtonPressed(argIndex) { processKeyDaunCommon(argIndex); }
function processKeyDaunCommon(buttonIndex)
{
  var _bitCheckerSetter = 1<<buttonIndex;
 _16bitsMkcVal ^= _bitCheckerSetter ;
 _state16Keys |= _bitCheckerSetter ; _state16Keys ^= _bitCheckerSetter ;
  _drawLCD(_16bitsMkcVal);
}
$(function(){
  $('#ta1').focus(function(event) { event.preventDefault();});
  $(".seg").mousedown(function(){return false;});
  $(".seg").click(function(){
  var i = this.id.substr(3);
  if(i==_prevId) {
    handle7KCValue(_16bitsMkcVal);
    _prevId = 20;  
    _16bitsMkcVal = 65408;//0x8080 ;
    _state16Keys = 65535;//0xffff;
    _drawLCD(_16bitsMkcVal);  
  }
  else { _prevId = i;handleButtonPressed(i); }
  });

});
