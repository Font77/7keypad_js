var is7KCFilled = false;
var _curLang = 0;
var _flag123Aa;
var isPrevSpaceMatraVovel = true;
function handle7KCValue(arg7KCValue) {
  is7KCFilled = false;
  var only1bitcheck = ( ( arg7KCValue & 0x81FF ) ^ 0x8180) ;
  var hbyte = (arg7KCValue & 0xFF00) >> 8;
  var lbyte = (arg7KCValue & 0x00FF);
  if(_flag123Aa & 1)
  {
    if(0x7E == (hbyte & 0x7E))
    {
      if(0 == (only1bitcheck & ( only1bitcheck - 1)))
      {fillDecimal(arg7KCValue);}
    }
  }
  else
  {
    if( (0 == (hbyte & 2)) && (0x80 != lbyte))
    {
      if(0 == (only1bitcheck & ( only1bitcheck - 1)))
      {fillDecimal(arg7KCValue);}    
    }
  }  
  
  if(!is7KCFilled) {
    nav(arg7KCValue);
  }
  
  if(
      (!is7KCFilled)
      && (
            0xF700 == (arg7KCValue & 0xF700)
            //|| 0x0080 == (arg7KCValue & 0x00BF) //composing character from left key is complex
      )
  )
  {
      if(
        (!_curLang)
        //|| (0xC000 == (arg7KCValue & 0xFF00))
      )
        { fillCharEng(arg7KCValue); }
  }
  
  
  
  if(
      !(is7KCFilled)
      &&(
            (0xFF00 == (arg7KCValue & 0xFF00))
            || (0x00C0 == (arg7KCValue & 0x00FF))
        )
    )
    {
      fillSymbols(arg7KCValue);
    }
  if(
      !(is7KCFilled)
      &&(
      (0xFF00 == (arg7KCValue & 0xFF00))
      || (0x00C0 == (arg7KCValue & 0x00FF))
      )
    )
    {
      fillU8Symbols(arg7KCValue);
    }
  //alert('fillCharLang(arg7KCValue) :'+arg7KCValue+', '+is7KCFilled+', '+_curLang);  
  if(
      !(is7KCFilled)
      &&(
            ( 0xFF00 == (arg7KCValue & 0xFF00) )
            //|| (0x00C0 == (arg7KCValue & 0x00FF))
      )
      && (_curLang)
    )
    {//alert('fillCharLang(arg7KCValue)');
      fillCharLang(arg7KCValue);
      //alert('fillCharLang(arg7KCValue) :'+arg7KCValue);
    }  
    
}
