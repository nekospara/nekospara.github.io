function main(){mainActive||(mainActive=!0,$("#clickToPlay").css("opacity","0"),$("#main").css("opacity","1"),$("#widgetContainer").css("opacity","1"),$(".hitCount").css("opacity","1"),setTimeout((()=>{$("#clickToPlay").css("display","none")}),1050),document.getElementById("vid").play())}document.getElementById("vid").volume=.6,mainActive=!1,setTimeout((()=>{document.getElementById("vid").paused?$("#clickToPlay").css("opacity","1"):main()}),1e3),$("#clickToPlay").click((()=>{main()}));