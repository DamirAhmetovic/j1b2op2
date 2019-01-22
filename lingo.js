var words = [
	"appel",	"aldus",	"afwas",	"aftel",	"aarde",	"armen",	"actie",	"apart", 
	"adres",	"avond",	"aders",	"alarm",	"boten",	"balen",	"beter",	"bomen",
	"boren",	"boven",	"boxen",	"brood",	"broek",	"brand",	"breed",	"benen",
	"beeld",	"brief",	"beten",	"basis",	"blauw",	"beren",	"buren",	"banen",
	"bloed",	"broer",	"blond",	"boter",	"beleg",	"breng",	"baken",	"beker",
	"blind",	"bezig",	"baden",	"bedel",	"bazen",	"bazin",	"baren",	"beden",
	"beken",	"bezem",	"baard",	"bidet",	"breuk",	"conus",	"cello",	"creme",
	"cloud",	"cacao",	"cadet",	"cavia",
	"ceder",	"combi",	"china",	"clown",	"draai",	"deden",	"dalen",	"derde",
	"delen",	"dwaas",	"daden",	"dader",	"dames",	"diner",	"datum",	"dozen",
	"dreun",	"duits",	"dagen",	"deren",	"dwerg",	"dwaal",	"dwing",	"druil",
	"droog",	"draad",	"dweil",	"drank",	"duren",	"dwars",	"drugs",	"daten",
	"daler",	"doorn",	"disco",	"degen",	"droom",	"dient",	"drone",	"dadel",
	"duwen",	"druif",	"deken",	"deler",	"elven",	"eigen",	"enger",	"engel",
	"elder",	"enkel",	"effen",	"email",	"egaal",	"fiets",	"friet",	"files",
	"forel",	"films",	"feest",	"fruit",	"falen",	"flora",	"fauna",	"feeen",
	"freak",	"forum",	"fusie",	"geven",	"gaven",	"groen",	"graai",	"getal",
	"grens",	"grond",	"groef",	"graal",	"gewei",	"games",	"grote",	"groet",
	"garen",	"gebak",	"graag",	"genre",	"glans",	"geluk",	"geeuw",	"horen",
	"heren",	"halen",	"hagel",	"haren",	"helen",	"harde",	"hemel",	"hoofd",
	"huren",	"hamer",	"haken",	"heden",	"hotel",	"hobby",	"heler",	"hoger",
	"ieder",	"index",	"immer",	"icoon",	"inlog",	"inzet",	"innig",	"jovel",
	"jaren",	"jicht",	"jabot",	"jacht",	"jaden",	"jagen",	"jager",	"japon",
	"jarig",	"jawel",	"jeans",	"jemig",	"jeugd",	"joint",	"jonas",	"joule",
	"koken",	"kreet",	"koker",	"kerst",	"kegel",	"koude",	"kader",
	"krent",	"kamer",	"kaars",	"kaart",	"kraan",	"krant",	"keren",	"kruid",
	"kerel",	"kubus",	"kraal",	"kleur",	"kroon",	"klein",	"korst",	"klopt",
	"kabel",	"kunst",	"kopje",	"krans",	"klimt",	"kater",	"klink",	"kudde",
	"kruis",	"lopen",	"laten",	"lepel",	"links",	"laden",	"leven",	"lezen",
	"lucht",	"lenen",	"laser",	"lente",	"licht",	"lader",	"leder",	"lunch",
	"lijst",	"leger",	"leden",	"legen",	"lagen",	"lezer",	"lever",	"lingo",
	"loper",	"luier",	"lager",	"leeuw",	"maand",	"malen",	"maken",	"media",
	"meter",	"motor",	"maten",	"markt",	"mazen",	"molen",	"meest",	"meren",
	"model",	"meden",	"maden",	"macht",	"meeuw",	"mager",	"magen",	"maren",
	"manen",	"noord", 	"nigga",	"nieuw",	"negen",	"namen",	"neven",	"nodig",	
	"naden",
	"neder",	"nemen",	"onder",	"optel",	"ovaal",	"ovale",	"onwel",	"optie",
	"orden",	"oppas",	"ouder",	"ophef",	"oases",	"palen",	"plein",	"pegel",
	"paars",	"prijs",	"piano",	"pixel",	"paden",	"pasta",	"pizza",	"poten",
	"paard",	"puber",	"pauze",	"preek",	"polis",	"pater",	"proef",	"panda",
	"penis",	"prins",	"pluto",	"polen",	"plint",	"quota",	"quant",	"quark",
	"queue",	"quilt",	"quote",	"robot",	"reken",	"raden",	"regen",	"radio",
	"rente",	"regio",	"rugby",	"reden",	"roken",	"ruzie",	"ruist",	"regel",
	"racen",	"races",	"riool",	"ramen",	"radar",	"roman",	"rokje",	"razen",
	"roede",	"staan",	"staal",	"speel",	"steeg",	"stoel",
	"stook",	"steek",	"schep",	"spijs",	"stoep",	"shirt",	"samen",	"sites",
	"sport",	"spalk",	"sjaal",	"storm",	"staat",	"steun",	"strak",	"serie",
	"shows",	"schat",	"snoep",	"sfeer",	"smeer",	"speer",	"scene",	"speld",
	"smeed",	"smaak",	"super",	"stand",	"steer",	"smelt",	"sedan",	"skier",
	"sluis",	"sneer",	"steel",	"truck",	"terug",	"typen",	"talen",	"taboe",
	"tegel",	"taart",	"tafel",	"trouw",	"teken",	"teren",	"taken",	"treur",
	"tenen",	"titel",	"thuis",	"tiara",	"teder",	"toets",	"tabak",	"trein",
	"tarwe",	"telen",	"teler",	"uiten",	"uilig",	"uitje",	"uiver",	"ultra",
	"uniek",	"uppie",	"uraan",	"uiers",	"velen",	"vloer",	"video",	"varen",
	"vegen",	"veren",	"vader",	"vaten",	"vuren",	"vrouw",	"vlees",	"vogel",
	"vroeg",	"vezel",	"veins",	"vorst",	"veder",	"vanaf",	"vieze",	"veger",
	"villa",	"veler",	"vrede",	"vries",	"woord",	"wagen",	"wonen",	"waren",
	"warme",	"weten",	"water",	"weren",	"wazig",	"wegen",	"weven",
	"wezen",	"weken",	"wraak",	"wilde",	"wreed",	"wrede",	"wenst",	"woest",
	"xenon",	"yacht",	"yucca",	"zwaar",	"zware",	"zesde",	"zagen",	"zalig",
	"zomer",	"zeden",	"zwart",	"zeven",	"zicht",	"zadel",	"zweet",	"zenuw",
				"zweer",	"zweef",	"zaden",	"zaken",	"zeker",	"zever",	"zeeen"];




var UserInput = '';
var arrayNM2 = '';
var woordRij = 0
button1.onclick = WoordRij1;

var container = document.getElementById('container');

for (a=1; a <= 5; a++) {
      for (i=1; i <= 5; i++) {
            var button = document.createElement('div');
            button.setAttribute('class', 'letter');
            button.setAttribute('id', 'l' + i + 'r' + a);
            container.appendChild (button); 
      }
}
var randomWord = words[Math.floor(Math.random() * words.length)];
var arrayNM1 = randomWord.split("");


function WoordRij1() {
    var correcteLetters = 0;
    UserInput = document.getElementById("myText2").value; 
    var arrayNM2 = UserInput.toLowerCase().split("");
    var lingoWordCopy = randomWord.split("");
    if (arrayNM2.length !== 5){
        alert("Het woord moet 5 letters zijn")
    } 
    else{
        woordRij = woordRij + 1
        document.getElementById("l1r" + woordRij).style.background= "white";
        for(a=0; a <= 4; a++){
            document.getElementById("l"+ (a+1) +"r" + woordRij).innerHTML = (arrayNM2[a]);
            if(arrayNM1[a] == arrayNM2[a]){
                document.getElementById("l"+ (a+1) +"r" + woordRij).style.background= "green";
                lingoWordCopy[a] = null;
                correcteLetters +=1;
            }
        if(correcteLetters == 5){
            Gewonnen();
        }
        }
        for (var i = 0; i <= 4; i++) {
            var  pos = lingoWordCopy.indexOf(arrayNM2[i]);
            if(pos > -1){
                console.log(i+"=geel");
                document.getElementById("l"+ (i+1) +"r" + woordRij).style.background= "yellow";
                lingoWordCopy[pos] = null;
            }
        }
    }
    if(woordRij == 5){
        Gewonnen();
    }
    else{
    }

}
function Gewonnen() {
	alert("tie tie tie die")
    document.getElementById("lingoWord").innerHTML = randomWord
    document.getElementById("button1").disabled = true;

}

console.log(randomWord)

for (a=1; a <= 5; a++) {
    document.getElementById("l1r"+ a).innerHTML = (arrayNM1[0]);
    document.getElementById("l1r"+ a).style.background= "green";
}









