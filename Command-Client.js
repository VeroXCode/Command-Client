//Das Ganze gibt es auf GitHub//

var GUI;

var p;

wait = 0;

fly = 0;

hack = 1;

var lastx;
var lasty;
var lastz;

repeat = 0;
rd = 0;
ss = 20;

air = 0;
airtime = 0;
deep = 0;
deepten = null;

 function chatHook(str){

if(hack==1){

preventDefault();

if(str==".list"){
clientMessage(" §2Activated §7Mods");
if(fly==1);
clientMessage(" §7Fly");
}

}

if(str==".help"){
clientMessage(" §7Fly | fly");
}

if(str=="fly"){
if(fly==0){
fly = 1;
clientMessage(" §7Fly §2activated");
Player.setCanFly(true);
 }else{
fly = 0;
clientMessage(" §7Fly §4deactivated");
Player.setCanFly(false);
      }
    
    }
    
}
