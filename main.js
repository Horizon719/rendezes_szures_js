import { 
    OBJLISTA,
    SZOVEGLISTA,
    SZAMLISTA
} from "./adat.js";
0
import { 
    rendezesSzoveg,
    rendezesSzam,
    veletlenSorrend,
     objRendKorSzerint,
     objRendAkarmiSzerint,
     szuresKorSzerint,
     szuresNevSzerint
} from "./adatkezeles.js";

$(function(){
    
    /* console.log(OBJLISTA);

    let jsonObj = JSON.stringify(OBJLISTA);
    console.log(jsonObj);
    console.log(OBJLISTA[1].csaladiAllapot); */

    rendezesSzoveg(SZOVEGLISTA);
    rendezesSzam(SZAMLISTA);
    veletlenSorrend(SZAMLISTA);
    objRendKorSzerint(OBJLISTA);
    objRendAkarmiSzerint(OBJLISTA, "kor");
    const SZURT = szuresKorSzerint(OBJLISTA, "<=50");
    console.log(SZURT);
    console.log(OBJLISTA);
})
