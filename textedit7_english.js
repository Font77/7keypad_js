_flag123Aa = 0;
function fillCharEng(arg7KCValue) {
  engchar = ''; tempUTFLCode = 0; is7KCFilled = false;
  var lbyte = arg7KCValue & 0xFF ;
  //var hbyte = (arg7KCValue & 0xFF00) >> 8 ;
  engchar = getEnglishCode(lbyte);
  if(engchar)
  {
    is7KCFilled = 1;isPrevSpaceMatraVovel = 1;
    if(
      (  (_flag123Aa & 2) && (0xF700 == (arg7KCValue & 0xf700))  )
          ||
      (
            !(
                (_flag123Aa & 2)
                || (0xF700 == (arg7KCValue & 0xff00))
             )
      )
    )  
    {
      engchar = engchar.toLowerCase();
    }
    $("#ta1").setCaretPos(caretInfo+1);        
    $("#ta1").insertAtCaretPos(engchar);
    caretInfo = $("#ta1").getSelection().end;
    ////$("#ta1").blur();
    is7KCFilled = true;
    stages7KCEventPassed = 128;
    return engchar;
  }
}
function fillDecimal(arg7KCValue) {//alert('fillDecimal with arg7KCValue = ' + arg7KCValue);
    tempUTFLCode = 0;
    is7KCFilled = false;
    switch (arg7KCValue)
    {
            case 0xFE80:case 0xFC80:tempUTFLCode = '4' ;break;
            case 0x7F80:case 0x7D80:tempUTFLCode = '6' ;break;
            case 0xFF9C:case 0xFD9C:tempUTFLCode = '.' ;break;
            case 0xFF00:case 0xFD00:tempUTFLCode = '0' ;break;
            case 0xFFC0:case 0xFDC0:tempUTFLCode = '1' ;break;
            case 0xFF81:case 0xFD81:tempUTFLCode = '2' ;break;
            case 0xFF82:case 0xFD82:tempUTFLCode = '3' ;break;
            case 0xFFA0:case 0xFDA0:tempUTFLCode = '5' ;break;
            case 0xFF84:case 0xFD84:tempUTFLCode = '9' ;break;
            case 0xFF88:case 0xFD88:tempUTFLCode = '8' ;break;
            case 0xFF90:case 0xFD90:tempUTFLCode = '7' ; break;
    }
    previousByteCompleted = arg7KCValue;
    if( tempUTFLCode.length != 0 )
    {
      is7KCFilled = true;isPrevSpaceMatraVovel = 1;
      //$("#ta1").sendkeys(tempUTFLCode);
      $("#ta1").setCaretPos(caretInfo+1);        
      $("#ta1").insertAtCaretPos(tempUTFLCode);
      caretInfo = $("#ta1").getSelection().end;
      ////$("#ta1").blur();
      stages7KCEventPassed = 128;
    }
    return is7KCFilled;
}
function fillSymbols(arg7KCValue) {
  tempUTFLCode = '';
  is7KCFilled = false;
  var lbyte = arg7KCValue & 0xFF ;
  var hbyte = (arg7KCValue & 0xFF00) >> 8 ;
  tempUTFLCode = getSymbolCode(lbyte);
  if(0 == tempUTFLCode.length)
  {
    if (192 == lbyte && 4 != hbyte)
    {
      tempUTFLCode = getSymbolCode(hbyte);
    }    
  }
  if( 0 != tempUTFLCode.length)
  {
    is7KCFilled = 1;isPrevSpaceMatraVovel = 1;
    $("#ta1").setCaretPos(caretInfo+1);        
    $("#ta1").insertAtCaretPos(tempUTFLCode);
    caretInfo = $("#ta1").getSelection().end;
    ////$("#ta1").blur();
    stages7KCEventPassed = 128;
  }
}
function nav(arg7KCValue)
{
  tempUTFLCode = '';//alert('nav(arg7KCValue) and tempUTFLCode '+arg7KCValue+', '+tempUTFLCode);
  is7KCFilled = false ;
  switch(arg7KCValue)
  {
    case 0xDF80:tempUTFLCode = '{backspace}' ;  break; //backspace
    case 0xFB80:tempUTFLCode = '{del}' ;  break; //delete
    case 0xFD80:tempUTFLCode = '{rightarrow}' ;  break; //right
    case 0xBF80:tempUTFLCode = '{leftarrow}' ;  break; //left
    case 0x7F00:tempUTFLCode = '{selectall}' ;  break; //selectAll
  }
  if( tempUTFLCode.length != 0 )
  {
    is7KCFilled = 1;isPrevSpaceMatraVovel = 1;
  //$("ta1").caretToEnd();
    //$("#ta1").setCaretPos(caretInfo+1);        
    $("#ta1").sendkeys(tempUTFLCode);
    caretInfo = $("#ta1").getSelection().end;
    ////$("#ta1").blur();
    stages7KCEventPassed = 128;
  }  
  return is7KCFilled;
}

function fillCharLang(arg7KCValue)
{
  is7KCFilled = false;
  tempUTFLCode = 0;
  var lbyte = arg7KCValue & 0x00FF ;
  tempUTFLCode = getU8IndicCode(lbyte);

  if(tempUTFLCode)
  {   
    $("#ta1").setCaretPos(caretInfo+1);        
    $("#ta1").insertAtCaretPos(String.fromCharCode(tempUTFLCode));
    caretInfo = $("#ta1").getSelection().end;    
    is7KCFilled = 1;
    //$("#ta1").blur();
    stages7KCEventPassed = 128;
  }
  //previousByteCompleted = arg;
}

function fillU8Symbols(arg7KCValue) {
  tempUTFLCode = '';
  is7KCFilled = false;
  var lbyte = arg7KCValue & 0xFF ;
  var hbyte = (arg7KCValue & 0xFF00) >> 8 ;
  tempUTFLCode = getU8SymbolCode(lbyte);
  if(!tempUTFLCode)
  {
    if (192 == lbyte && 4 != hbyte)
    {
      tempUTFLCode = getU8SymbolCode(hbyte);
    }    
  }
  if(tempUTFLCode)
  {
    is7KCFilled = 1;isPrevSpaceMatraVovel = 1;
    $("#ta1").setCaretPos(caretInfo+1);        
    $("#ta1").insertAtCaretPos(String.fromCharCode(tempUTFLCode));
    caretInfo = $("#ta1").getSelection().end;
    //$("#ta1").blur();
    stages7KCEventPassed = 128;
  }
}

function getEnglishCode(code7)
{
  var _tempCode = '';
  switch (code7)
  {
    case 129: case 144: _tempCode = 'A'; break;//A,a
    case 192: _tempCode = 'I'; break;//I
    case 136: case 188: _tempCode ='U'; break;//U,u
    case 130: case 134: _tempCode ='E'; break;//e,E
    case 160: _tempCode = 'O'; break;//O
    case 10: _tempCode = 'N' ; break;//NN
    case 143: case 193: _tempCode = 'K'; break;//K,Kh
    case 65: _tempCode = 'X'; break;//X
    //case 65: _tempCode = 88; break;//X
    case 164: case 36: _tempCode = 'G'; break;//G,Gh
    case 224: case 96: _tempCode = 'C'; break;//Ch,Chh
    case 48: _tempCode = 'Z'; break;//Z,Jh
    case 176: _tempCode = 'J'; break;//J,Jh
    case 132: case 4: case 142: case 14: case 145: case 17: _tempCode = 'T'; break;//T
    case 152: case 24: case 5: case 133: _tempCode = 'D'; break;//d,dh,D,Dh
    case 138: case 157: _tempCode = 'N'; break;//N,NN,n
    case 131: _tempCode = 'P'; break;//P
    case 135: _tempCode = 'F'; break;//F
    case 140: case 12: _tempCode = 'B'; break;//B,Bh
    case 161: _tempCode = 'M'; break;//M
    case 200: _tempCode = 'Y'; break;//Y
    case 146: case 18: case 159: _tempCode = 'R'; break;//R,RR,r
    case 162: case 174: _tempCode = 'L'; break;//L
    case 168: _tempCode = 'V'; break;//V
    case 40: _tempCode = 'W'; break;//W
    case 196: case 68: _tempCode = 'S'; break;//S,Sh
    case 137: _tempCode = 'H'; break;//H
  }
  return _tempCode;
}  
function getSymbolCode(code7)
{
  var _tempCode = '';
  switch (code7)
  {
    case 0:    _tempCode = ' ' ; break;//Space
    case 2:    _tempCode = '\n' ; break;//Newline
    case 215:  _tempCode = '\t' ; break;//tab
    case 1:    _tempCode = '&' ; break;//&  
    case 16:  _tempCode = '@' ; break;//@  
    case 9:    _tempCode = '#' ; break;//#
    case 28:  _tempCode = '$' ; break;//$
    case 223:  _tempCode = '-' ; break;//hyphen
    case 156:  _tempCode = '.' ; break;//ABRR/FULSTOP
    case 147:  _tempCode = '?' ; break;//QUESTION MARK
    case 199:  _tempCode = '~' ; break;//TILDE
    case 166:  _tempCode = '[' ; break;//[
    case 38:  _tempCode = '(' ; break;//(
    case 6:    _tempCode = '{{}' ; break;//(
    case 240:  _tempCode = ']' ; break;//]
    case 112:  _tempCode = ')' ; break;//)
    case 80:  _tempCode = '}' ; break;//}
    case 254:  _tempCode = '_' ; break;//_
    case 222:  _tempCode = '=' ; break;//=
    case 127:  _tempCode = ':' ; break;//:
    case 235:  _tempCode = '"' ; break;//"
    case 124:  _tempCode = ';' ; break;//;
    case 252:  _tempCode = ',' ; break;//,
    case 220:  _tempCode = '>' ; break;//>
    case 158:  _tempCode = '<' ; break;//<
    case 227:  _tempCode = '^' ; break;//^
    case 180:  _tempCode = '~' ; break;//~
    case 243:  _tempCode = '`' ; break;//`
    case 231:  _tempCode = '\'' ; break;//'
    case 27:  _tempCode = '%' ; break;//%
    //case 205:  _tempCode = 0x5C ; break;
    case 155:  _tempCode = '/' ; break;////
    case 3:    _tempCode = '+' ; break;//+
    case 33:  _tempCode = '*' ; break;//*
    case 169:  _tempCode = '|' ; break;//|
    case 126:  _tempCode = '!' ; break;//\!  
  }
  //alert('getSymbolCode(code7) and _tempCode are: '+code7+', '+_tempCode);
  return _tempCode;
}

function getU8SymbolCode(code7)
{//alert('getU8SymbolCode with code7 is : '+code7);
  var _tempCode = 0;
  switch (code7)
  {
    case 95:  _tempCode = 247 ; break;//Mathematic divide symbol
    case 214:  _tempCode = 0x2261 ; break;//== symbol
    case 226:  _tempCode = 0x2229 ; break;//&& symbol
    case 72:  _tempCode = 0x221A ; break;//&& symbol
    case 86:  _tempCode = 0x2260 ; break;//\!= symbol
    case 198:  _tempCode = 0x2264 ; break;//less than or equal to symbol
    case 210:  _tempCode = 0x2265 ; break;//greater than or equal to symbol
    case 188:  _tempCode = 0x2228 ; break;//down v symbol
    case 61:  _tempCode = 0x2191 ; break;//upper arrow
    case 15:  _tempCode = 0x2192 ; break;//right arrow
    case 60:  _tempCode = 0x2193 ; break;//Down arrow
    case 92:  _tempCode = 0x21D2 ; break;//Down arrow
    case 89:  _tempCode = 0x2190 ; break;//Left arrow
    case 107:  _tempCode = 0x2193 ; break;//Down arrow
    case 148:  _tempCode = 0x25B3 ; break;//Triangle
    case 195:  _tempCode = 0x2218 ; break;//AngleDegree
    case 67:  _tempCode = 0x221E ; break;//Infinity  
  }
  //alert('getU8SymbolCode with code7 and _tempCode are : '+code7+', '+ _tempCode);
  return _tempCode;
}

function getU8IndicCode(code7)
{ //alert('getU8IndicCode(code7) '+code7);
  var _tempCode = 0;
  switch (code7)
  {
    case 129:_tempCode = 5;break;//VOWELS BELOW
    case 144:_tempCode = isPrevSpaceMatraVovel ? 6:0x3E;break;//a
    case 64:_tempCode = isPrevSpaceMatraVovel ? 8:0x40;break;//I
    case 192:_tempCode = isPrevSpaceMatraVovel ? 7:0x3F;break;//I
    case 188: case 136:_tempCode = isPrevSpaceMatraVovel ? 9:0x42;break;//u,U
    case 130:case 134:_tempCode = isPrevSpaceMatraVovel ? 0x10:0x47;break;//e,E
    case 160:_tempCode = isPrevSpaceMatraVovel ? 0x13:0x4B;break;//O
    case 32:_tempCode = isPrevSpaceMatraVovel ? 0x14:0x4C;break;//O
  }
  if(_tempCode) {isPrevSpaceMatraVovel = true;}

  if(6==_curLang && (!_tempCode))
  {
    switch (code7)
    {
      case 65: case 164: case 36: _tempCode = 0x15;break;//q,K
      case 96:_tempCode = 0x1A;break;//C,Ch
      case 48:_tempCode = 0x1C;break;//Jh
      case 4: case 14: case 152: case 24:_tempCode = 0x1F;break;//dh
      case 17: case 133: case 5:_tempCode = 0x24;break;//DDh
      case 135: case 140: case 12:_tempCode = 0x2A;break;//bh
    }
    if(_tempCode) {isPrevSpaceMatraVovel = false;}
  }
  if(!_tempCode)
  {//alert('getU8IndicCode(code7) '+code7);
    switch (code7)
    {
      case 193: case 143: _tempCode = 0x15;break;//q,K
      case 65:_tempCode = 0x16;break;//Kh
      case 164:_tempCode = 0x17;break;//G
      case 36:_tempCode = 0x18 ;break;//Gh
      case 10:_tempCode = 2 ; break;//NN
      case 224: case 158:_tempCode = 0x1A;break;//C,c
      case 96:_tempCode = 0x1B;break;//Ch
      case 176:_tempCode = 0x1C;break;//J
      case 48:_tempCode = 0x1D;break;//Jh
      case 132: case 142: _tempCode = 0x1F;break;//6(t),t
      case 4: case 14: _tempCode = 0x20;break;//6(th),th
      case 152:_tempCode = 0x21;break;//d
      case 24:_tempCode = 0x22;break;//dh
      case 145:_tempCode = 0x24;break;//TT
      case 17:_tempCode = 0x25;break;//TTh
      case 133:_tempCode = 0x26;break;//DD
      case 5:_tempCode = 0x27;break;//DDh
      case 138: case 157: _tempCode = 0x28;break;//N,n
      case 131:_tempCode = 0x2A;break;//P
      case 135:_tempCode = 0x2B;break;//F
      case 140:_tempCode = 0x2C;break;//b
      case 12:_tempCode = 0x2D;break;//bh
      case 161:_tempCode = 0x2E;break;//M
      case 200:_tempCode = 0x2F;break;//Y
      case 146: case 159: _tempCode = 0x30;break;//R,r
      case 18:_tempCode = 0x5C;break;//RR
      case 162: case 174: _tempCode = 0x32;break;//Lbent,L
      case 168: case 40: _tempCode = 0x35;break;//V,W
      case 196:_tempCode = 0x38;break;//S
      case 68:_tempCode = 0x36;break;//Sh
      case 137:_tempCode = 0x39;break;//H
    }
    if(_tempCode) {isPrevSpaceMatraVovel = false;}
  }
  if(_tempCode)
  {
    _tempCode += (0x900+(_curLang-1) * (128));
  }
  return _tempCode;  
}
