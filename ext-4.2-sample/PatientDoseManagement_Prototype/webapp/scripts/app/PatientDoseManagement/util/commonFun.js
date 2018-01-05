Ext.define('PDM.util.commonFun', {});
var global = global || {};
global.util = global.util || {};

(function(){

	String.prototype.format = function(args) {
	    var result = this;
	    if (arguments.length > 0) {
	        if (arguments.length == 1 && typeof (args) == "object") {
	            for (var key in args) {
	                if(args[key] != undefined){
	                    var reg = new RegExp("({" + key + "})", "g");
	                    result = result.replace(reg, args[key]);
	                }
	            }
	        } else {
	            for (var i = 0; i < arguments.length; i++) {
	                if (arguments[i] != undefined) {
	                    var reg = new RegExp("({)" + i + "(})", "g");
	                    result = result.replace(reg, arguments[i]);
	                }
	            }
	        }
	    }
	    return result;
	};

	Date.prototype.Format = function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1,
	        "d+": this.getDate(),
	        "h+": this.getHours(),
	        "m+": this.getMinutes(),
	        "s+": this.getSeconds(),
	        "q+": Math.floor((this.getMonth() + 3) / 3),
	        "S": this.getMilliseconds()
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}

	global.util.DateFormatByExt = function (date, fmt) {
		try {
		    var _fmt = "";
		    var _date;
		    if(memoryDateFormat == 1) {
	            _fmt = 'Y M d';
			} else if(memoryDateFormat == 2) {
	            _fmt = 'Y-m-d';
		    }
	        if(fmt != null) {
	            _fmt = _fmt + " " + fmt;
	        }

	        if(Ext.isDate(date)) {
	            _date = date;
	        } else {
	            if(date == "") {
	                return "";
	            }
	            _date = DateFormatLocal(date);
	        }

	        return Ext.util.Format.date(_date, _fmt);
		} catch(e) {
			return "";
		}

	};

	global.util.DateFormatLocal = function(strDate) {
	    if(strDate.length <= 10) {
	         return new Date(strDate + " 00:00:00");
	    } else {
	        return new Date(strDate);
	    }
	}

	global.util.DateTOLoacl = function(d) {
	    try{
	        var _dateMilliseconds;
	        if(Ext.isDate(d)) {
	            _dateMilliseconds = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
	        } else {
	            var _date = new Date(d);
	            _dateMilliseconds = _date.getTime() + _date.getTimezoneOffset() * 60 * 1000;
	        }

	        return new Date(_dateMilliseconds);
	    }catch(e){
	        return "";
	    }
	}

	global.util.CountDayByLocal = function(day) {
	    if(Ext.isDate(day)) {
	        return (day.getTime() / (1000 * 60) - day.getTimezoneOffset())/(60 * 24);
	    } else {
	        return 0;
	    }
	}


	//array find function
	global.util.arrayFindString = function(arr, string) {
	    var str = arr.join("");
	    return str.indexOf(string);
	};

global.util.messageFormat = function(str, arg1, arg2, arg3, arg4) {
    var ret = str;
    if(Ext.isArray(arg1)) {
        if(arg1.length == 1) {
            ret = str.format(arg1[0]);
        } else if(arg1.length == 2) {
            ret = str.format(arg1[0], arg1[1]);
        } else if(arg1.length == 3) {
            ret = str.format(arg1[0], arg1[1], arg1[2]);
        } else if(arg1.length == 4) {
            ret = str.format(arg1[0], arg1[1], arg1[2], arg1[3]);
        }
        return ret;
    }

    if(arg4 != null) {
        ret = str.format(arg1, arg2, arg3, arg4);
    } else if(arg3 != null) {
        ret = str.format(arg1, arg2, arg3);
    } else if(arg2 != null) {
        ret = str.format(arg1, arg2);
    } else if(arg1 != null) {
        ret = str.format(arg1);
    } else {
        ret = str;
    }
    return ret;
};

global.util.convertSupFont = function(type)
{
    if(type == "SureIQ")
    {
        return stringSetting.request.protocol_type.SureIQ;
    }
    else if (type == "SureExposure")
    {
        return stringSetting.request.protocol_type.SureExposure;
    }
    else if (type == "ExamPlan")
    {
        return stringSetting.request.protocol_type.ExamPlan;
    }
    else if (type == "ContrastPreset")
    {
        return stringSetting.request.protocol_type.ContrastPreset;
    }
    else
    {
        return type;
    }
};

var getChromeScrollWidth = function ()
{
	var divWidth = 0;
	var divTemp = document.createElement('div');
	divTemp.style.position = 'absolute';
	divTemp.style.overflow = 'scroll';
	divTemp.style.width = '100px';
	document.body.appendChild(divTemp);
	divWidth = 100 - divTemp.scrollWidth;
	document.body.removeChild(divTemp);
	return divWidth;
};

function getWeekDate(date) {
    var weekArray = new Array();

    var indexInWeek = date.getDay();
    var weekBeginIndex = -indexInWeek;
    var weekEndIndex = 6 - indexInWeek;

    var beignDate = new Date(new Date(date) - 0 + weekBeginIndex * 86400000);

    var endDate = new Date(new Date(date) - 0 + weekEndIndex * 86400000);
    weekArray.push(new Date(beignDate.getFullYear(),beignDate.getMonth(),beignDate.getDate()));
    weekArray.push(new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate()));

    return weekArray;
}


function formatFloatNum(num){
        var rule = /^[0-9]+.[0-9]+$/;
        var ruleIgnore = /^[0-9]+.0$/;

        if(ruleIgnore.test(num)){
            return num;
        }

        if(rule.test(num)){
            var result = num.toFixed(2) - 0;
            if(ruleIgnore.test(result)){
                return parseInt(result);
            }
            return result;
        }

        return num;
    }

function DateAdd(date, days) {
    var result = new Date(date);
    result = result.valueOf();
    result = result + days * 24 * 60 * 60 * 1000;
    result = new Date(result);
    return result;
}

function AutoResizeImage(maxWidth, maxHeight, objImg){
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;

    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if(maxWidth == 0 && maxHeight == 0)
    {
        Ratio = 1;
    }
    else if(maxWidth == 0)
    {
        if(hRatio < 1) Ratio = hRatio;
    }
    else if(maxHeight == 0)
    {
        if(wRatio < 1) Ratio = wRatio;
    }
    else if(wRatio < 1 || hRatio < 1)
    {
        if(wRatio <= hRatio)
        {
            Ratio = wRatio;
        }
        else
        {
            Ratio = hRatio;
        }
    }
    if(Ratio < 1)
    {
        w = w * Ratio;
        h = h * Ratio;
    }
    objImg.height = h;
    objImg.width = w;
}

function getGridHeaderFontStyle(isFont){
	var font_style = '';
	if(isFont != null && isFont)
	{
        if(memoryLanguage == Language.JP)
        {
            font_style = 'Meiryo UI';
        }
        else
        {
            font_style = 'Segoe UI,Meiryo UI';
        }
	}
	else
	{
    	if(memoryLanguage == Language.JP)
    	{
    		font_style = ' font-family: Meiryo UI;';
    	}
    	else
    	{
    		font_style = ' font-family: Segoe UI,Meiryo UI;';
    	}
    }
	return font_style;
};

var getErrorTipMsg = function(errMsg){
    if(errMsg == null){
        return '';
    }
    var status = errMsg.status;
    status = status.substring(0,1).toUpperCase()+status.substring(1);
    var overView = errMsg.overview;
    var callAdmin = errMsg.calladmin;

    var msgHTMLArr = new Array();
    msgHTMLArr.push('<span class ="error-tip-header">');
    msgHTMLArr.push('<b>');
    msgHTMLArr.push(status);
    msgHTMLArr.push('</b>');
    if(overView != null && overView != ""){
        msgHTMLArr.push(' - ');
        msgHTMLArr.push(overView);
    }

    msgHTMLArr.push('</span>');
    msgHTMLArr.push('<br />');

    msgHTMLArr.push('<span class ="error-tip-content">');
    msgHTMLArr.push(errMsg.details);
    msgHTMLArr.push('</span>');

    msgHTMLArr.push('<br />');

    msgHTMLArr.push('<span class ="error-tip-header"><b>Solution</b></span>');
    msgHTMLArr.push('<br />');

    msgHTMLArr.push('<span class ="error-tip-content">');
    msgHTMLArr.push(errMsg.solution);
    if(callAdmin != null && callAdmin != ""){
        msgHTMLArr.push('<br />');
        msgHTMLArr.push('<br />');
        msgHTMLArr.push(callAdmin);
    }
    msgHTMLArr.push('</span>');

    return msgHTMLArr.join('');
};

var createMask = function (el)
{
    var sW = 100;
    var sH = 100;
    var elTemp;

    if(el)
    {
        elTemp = el;
        sW = el.dom.offsetWidth/2 - 20;
        sH = el.dom.offsetHeight/2 - 20;
    }
    else
    {
        sW = document.documentElement.scrollWidth/2 - 20;
        sH = document.documentElement.scrollHeight/2 - 20;
        elTemp = document.body;
    }

    var className = "x-mask-large-msg";
    var divMask = document.createElement('div');
    divMask.style.left = sW + 'px';
    divMask.style.top = sH + 'px';
    divMask.style.height = '40px';
    divMask.style.width = '40px';
    divMask.style.zIndex = 20000;
    divMask.className = className;

    var divMaskInner = document.createElement('div');
    divMaskInner.className = className + "-inner";
    divMaskInner.style.height = '40px';
    divMaskInner.style.width = '40px';
    divMask.appendChild(divMaskInner);

    var divMaskText = document.createElement('IMG');
    divMaskText.src = TabAlertMarkImage.srcBlank;
    divMaskText.className = className + "-text";
    divMaskText.style.height = '40px';
    divMaskText.style.width = '40px';
    divMaskInner.appendChild(divMaskText);

    elTemp.appendChild(divMask);
}

var clearMask = function (el)
{
    var elTemp;
    if(el)
    {
        elTemp = el;
    }
    else
    {
        elTemp = document.body;
    }

    var delDiv = elTemp.getElementsByClassName("x-mask-large-msg");
    for(var i = delDiv.length - 1;i >= 0 ;i--)
    {
        elTemp.removeChild(delDiv[i]);
    }
}

var getTermDate = function(term,currentDate){
        if(typeof(currentDate) == 'string'){
            currentDate = new Date(currentDate);
        }
        var start_date;
        var end_date;
        if(term == dateTermType.Day){
            start_date = end_date = currentDate;
        } else if(term == dateTermType.Week){
            var weekDates = getWeekDate(currentDate);
            start_date = weekDates[0];
            end_date = weekDates[1];
        } else if(term == dateTermType.Month){
            var year = currentDate.getFullYear();
            var month = currentDate.getMonth();
              start_date = new Date();
              start_date.setDate(1);
              start_date.setFullYear(year);
              start_date.setMonth(month);

            var end_temp_date = new Date();
            end_temp_date.setDate(1);
            end_temp_date.setFullYear(year);
            end_temp_date.setMonth(month+1);

            var end_date = new Date();
            end_date = new Date(end_temp_date - 86400000);

        } else if(term == dateTermType.Year){
            var year = currentDate.getFullYear();
            var start_date = new Date();
            start_date.setFullYear(year);
            start_date.setMonth(0);
            start_date.setDate(1);

            var end_date = new Date();
            end_date.setFullYear(year);
            end_date.setMonth(11);
            end_date.setDate(31);
        }

        return {start:start_date,end:end_date};
}

var createComboBox = function(_itemsArray, _selectedValue, clickFn, _config)
{
    var me = this;
    if(_itemsArray == null || clickFn == null){
        return;
    }

    var text_align = 'center';
    var combobox_width = 182;
    var item_width = 178;
    var item_height = 32;

    if(_config != null){
        if(_config.textAlign != null){
            text_align = _config.textAlign;
        }
        if(_config.comboboxWidth != null){
            combobox_width = _config.comboboxWidth;
        }
        if(_config.itemWidth != null){
            item_width = _config.itemWidth;
        }
        if(_config.itemHeight != null){
            item_height = _config.itemHeight;
        }
    }

    var groupList = Ext.create('DM.view.combox.DropdownListView', {
        width    : combobox_width,
        textAlign:text_align,
        colorModel        : 'skyblue',
        defaultValue:_selectedValue,
    });

    for(var i = 0; i < _itemsArray.length; i++)
    {
        var itemText = _itemsArray[i];
        var _item = Ext.create('DM.view.combox.ComboxMenuItemView', {
            width        : item_width,
            height        : item_height,
            textAlign    : text_align,
            colorModel    : 'skyblue',
            indexCombox 	: i,
            menuValue    : itemText,
            listeners    :
            {
                click:function(e)
                {
                    clickFn(this.indexCombox);
                    groupList.focus();
                }
            }
        });
        groupList.addItemObj(_item);
    }
    groupList.setSelectValue(_selectedValue);

    return groupList;
}

var updateComboBox = function(_combobox,_itemsArray,_selectedValue,clickFn,_config){
    var me = this;
    if(_itemsArray == null || clickFn == null){
        return;
    }

    var text_align = 'center';
    var combobox_width = 182;
    var item_width = 178;
    var item_height = 32;
    var tips_array = null;

    if(_config != null){
        if(_config.textAlign != null){
            text_align = _config.textAlign;
        }
        if(_config.comboboxWidth != null){
            combobox_width = _config.comboboxWidth;
        }
        if(_config.itemWidth != null){
            item_width = _config.itemWidth;
        }
        if(_config.itemHeight != null){
            item_height = _config.itemHeight;
        }
        if(_config.tipsArray != null){
            tips_array = _config.tipsArray;
        }
    }

    _combobox.getMenu().removeAllItems();
    for(var i = 0; i < _itemsArray.length; i++){
        var itemText = _itemsArray[i];
        var itemTips = '';
        if(tips_array != null && tips_array[i] != null){
            itemTips = tips_array[i];
        }
        var _item = Ext.create('DM.view.combox.ComboxMenuItemView', {
            width        : item_width,
            height        : item_height,
            textAlign    : text_align,
            indexCombox 	: i,
            menuValue    : itemText,
            tipVal        : itemTips,
            colorModel    : 'skyblue',
            listeners    :{
                click:function(e){
                    clickFn(this.indexCombox);
                    _combobox.focus();
                }
            }
        });
        _combobox.getMenu().add(_item);
    }
    _combobox.setSelectValue(_selectedValue);
}

var addIconInPanel = function(panel,iconCls){
    var iconPanel = Ext.create('Ext.panel.Panel',{
        cls            : 'panel-NoborderPadding-transparent',
        bodyCls       : iconCls,
        width        : 30,
        height        : 30,
    });

    var combined_panel = Ext.create('Ext.panel.Panel',{
        cls            : 'panel-NoborderPadding-transparent',
        bodyCls       : 'panel-NoborderPadding-transparent',
        layout: {
                 type:'hbox',
                 align:'middle',
                 pack:'end',
             },
        items        :[iconPanel,panel]
    });

    return combined_panel;
}

var inherit = function (proto) {
    if(proto == null) throw TypeError();

    if(Object.create) return Object.create(proto);

    var t = typeof proto;

    if(t!=='object' && t!=='function') throw TypeError();

    var F = function() {};

    F.prototype = proto;

    return new F();
}

var ToUnicode = function(str)
{
    return escape(str).replace(/%/g,"\\").toLowerCase();
}
var IsUnicode = function(str)
{
    return !(str == escape(str).replace(/%/g,"\\"));
}
var UnUnicode = function(str)
{
    return unescape(str.replace(/\\/g, "%"));
}
var StopPropagation = function(event)
{
    if(event.preventDefault)
    {
        event.preventDefault();
    }
    if(event.returnValue)
    {
        event.returnValue = false;
    }
    if(event.stopImmediatePropagation)
    {
        event.stopImmediatePropagation();
    }
    if(event.stopPropagation != null)
    {
        event.stopPropagation();
    }
}

var ToLocaleString = function(num)
{
    var str = "";
    if(null != num && typeof(num) == "number" && !isNaN(num))
    {
        str = num.toString();
    }
    else if(null != num && !isNaN(num))
    {
        str = num;
    }
    else
    {
        return num;
    }
    var aryStr = str.split(".");
    var aryNumFirst = new Array();
    var index = 0;
    var returnNum = "";
    for(var i = aryStr[0].length - 1;i >= 0;i--)
    {
        if(index == 3)
        {
            aryNumFirst.push(",");
            index = 0;
        }
        aryNumFirst.push(aryStr[0][i]);
        index++;
    }
    for(var i = aryNumFirst.length - 1;i >= 0;i--)
    {
        returnNum = returnNum + aryNumFirst[i];
    }

    if(aryStr.length > 1)
    {
        returnNum = returnNum + "." + aryStr[1];
    }
    return returnNum;
}

/**
 * Return the first value that is defined. Like MooTools' $.pick.
 */
var pickArguments = function() {
    var args = arguments,
        i,
        arg,
        length = args.length;
    for (i = 0; i < length; i++) {
        arg = args[i];
        if (typeof arg !== 'undefined' && arg !== null) {
            return arg;
        }
    }
}

/**
 * Fix JS round off float errors
 * @param {Number} num
 */
var getCorrectFloat = function(num) {
    return parseFloat(
        num.toPrecision(14)
    );
}

var stringToJson = function(str)
{
    return ('(' + str + ')');
}

var jsonToString = function(json)
{
    return JSON.parse(json);
}

var numericLiteralToString = function(nl)
{
    try
    {
        var aryNl = nl.toString().split("e");
        if(aryNl.length <= 1)
        {
            return nl;
        }

        var ret = "";
    	var eLen = Number(aryNl[1]);
    	var aryDot = aryNl[0].split(".");
    	if(eLen < 0)
    	{
    	    eLen *= -1;
            if(aryDot.length > 1)
            {
                if(aryDot[0].length >= eLen)
                {
                    ret = [aryNl[0]/Math.pow(10,eLen)]
                }
                else
                {
                    ret = ["0."];
                    for(var i = 0;i < (eLen - aryDot[1].length - 1);i++)
                    {
                        ret.push("0");
                    }
                    ret.push(aryDot[0]);
                    ret.push(aryDot[1]);
                }
            }
            else
            {
        	    ret = ["0."];
        	    for(var i = 0;i < eLen - 1;i++)
        	    {
        	        ret.push("0");
        	    }
        	    ret.push(aryNl[0]);
    	    }
    	}
    	else
    	{
    	    if(aryDot.length > 1)
    	    {
    	        if(aryDot[1].length >= eLen)
    	        {
    	            ret = [Math.pow(10, eLen) * aryNl[0]]
    	        }
    	        else
    	        {
    	            ret = [aryDot[0], aryDot[1]];
                    for(var i = 0;i < (eLen - aryDot[1].length);i++)
                    {
                        ret.push("0");
                    }
    	        }
    	    }
    	    else
    	    {
                ret = [aryNl[0]];
                for(var i = 0;i < eLen;i++)
                {
                    ret.push("0");
                }
    	    }
    	}
    	return ret.join('');
    }catch(e){
    	return nl;
    }
}
var getNumericLiteralLength = function(strNum)
{
    var len = 0;
    if(strNum.indexOf("e") != -1)
    {
        len = Number(strNum.split("e")[1]);
        if(len < 0)
        {
            len *= -1;
        }
    }
    return len;
}

function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
function GetRandomColor()
{
    var color = "rgb(";
    color += GetRandomNum(0, 255);
    color += ",";
    color += GetRandomNum(0, 255);
    color += ",";
    color += GetRandomNum(0, 255);
    color += ")";
    return color;
}

var getComboboxDisplay = function(displayArray, nameArray, key)
{
    if(displayArray == null || displayArray.length == 0)
    {
        return "";
    }
    for(var i = 0;i < nameArray.length;i++)
    {
        if(key == nameArray[i])
        {
            return displayArray[i];
        }
    }
    return displayArray[0];
};

global.util.countTimelineTimes = function(selectDay, start, end) {

    var dataStart = new Date(selectDay + " " + start);
    var dataEnd = new Date(selectDay + " " + end);

    var timesMin = (dataEnd.getTime() - dataStart.getTime())/1000/60;
    if(timesMin < 0) {
        timesMin = timesMin + 24 * 60;
    }
    return timesMin.toFixed(2);
};

global.util.deepClone = function (destination, source) {
    for(var p in source) {
        if(Ext.isArray(source[p])) {
            destination[p] = [];
            arguments.callee(destination[p], source[p]);
        } else if(typeof(source[p]) == "object") {
            destination[p] = {};
            arguments.callee(destination[p], source[p]);
        } else {
            destination[p]=source[p];
        }
    }
}





}());
