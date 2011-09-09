
/*
 * =====================================================================================
 *
 *       Filename:  wkl_ajax.js
 *
 *    Description:                                                                                                                                                               
 *
 *        Version:  1.0
 *        Created:  08/24/2011 10:14:20 PM
 *       Revision:  none
 *       Compiler:  
 *
 *         Author:  kangle.wang (mn), wangkangluo1@gmail.com
 *        Company:  APE-TECH
 *
 * =====================================================================================
 */


var _WKL_APE_JSON_ = new Array;

var _ape_json_ = {
	search: function(url, strs, callback)
	{
	    var fun_str = this.init(callback);
		this.fun_1 = fun_str;
        if(strs == "")
		{
	        this.hotsearch(url+"?random_str="+fun_str);
		}
		else
		{
			this.hotsearch(url+"?"+strs+"&random_str="+fun_str);
		}
	},
    init: function(fun_name)
	{  
        var random;
		while(1)
		{
		    random = Math.random().toString();
			if(typeof(_WKL_APE_JSON_[random]) == "undefined" )
			{			    			     
                _WKL_APE_JSON_[random] = fun_name;
				break;
			}
		}
		return random;
	},

    back: function(json)
	{ 

	    var random_str = (json.random_str).toString();
	    (_WKL_APE_JSON_[random_str])(json) ;
		


	},
   hotsearch: function(index)
   {
   if (window.XMLHttpRequest)
   {// code for IE7+, Firefox, Chrome, Opera, Safari
       xmlhttp=new XMLHttpRequest();
     //sortname = encodeURI(sortname);
   }
   else
   {// code for IE6, IE5
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
         //sortname = encodeURI(sortname);
   }
                        //q = encodeURI(type);
   gScriptObj = document.createElement("script");
   gScriptObj.setAttribute("type", "text/javascript");
   gScriptObj.setAttribute("charset", "utf-8");
           //if(index ==1)
        //{
   gScriptObj.setAttribute("src", index);
   headObj = document.getElementsByTagName("head").item(0);
   headObj.appendChild(gScriptObj);
   }
}
