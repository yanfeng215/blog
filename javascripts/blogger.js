﻿document.writeln("<script type=\"text/javascript\">");
document.writeln("var randarray = new Array();var l=0;var flag;");
document.writeln("var numofpost=6;function randomposts(json){");
document.writeln("var total = parseInt(json.feed.openSearch$totalResults.$t,10);");
document.writeln("for(i=0;i < numofpost;){flag=0;randarray.length=numofpost;l=Math.floor(Math.random()*total);for(j in randarray){if(l==randarray[j]){ flag=1;}}");
document.writeln("if(flag==0&&l!=0){randarray[i++]=l;}}document.write(\'<ul>\');");
document.writeln("for(n in randarray){ var p=randarray[n];var entry=json.feed.entry[p-1];");
document.writeln("for(k=0; k < entry.link.length; k++){if(entry.link[k].rel==\'alternate\'){var item = \"<li>\" + \"<a href=\" + entry.link[k].href + \">\" + entry.title.$t + \"</a> </li>\";");
document.writeln("document.write(item);}}");
document.writeln("}document.write(\'</ul>\');}");
document.writeln("</script>");
document.writeln("<script src=\"http://www.qryan.com/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1000&callback=randomposts\" type=\"text/javascript\"></script>");