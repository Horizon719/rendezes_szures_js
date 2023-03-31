
export function rendezesSzoveg(list){
    console.log(list.sort());
}

export function rendezesSzam(list){
    console.log(list.sort(function(a, b){
        return a - b;
    }));
}

export function veletlenSorrend(list){
    console.log(list.sort(function(a, b){
        return (Math.floor(Math.random()*2-1)) - b;
    }));
}

export function objRendKorSzerint(list){
    list.sort(function(a, b){
        return a.kor - b.kor;
    });
}

export function objRendAkarmiSzerint(list, kulcs){
    list.sort(function(a, b){ 
        let e = 1;
        if (a[kulcs] < b[kulcs]) {
            e = -1
        }
        return e;
    });
}


export function szuresKorSzerint(list, felt ){
    const SZURTLISTA = list.filter(function (obj){
        return eval(obj.kor+felt);
    })
    return SZURTLISTA;
}

export function szuresNevSzerint(list, felt, kulcs){
    const SZURTLISTA = list.filter(function (obj){
        
        return obj[kulcs];
    })
    return SZURTLISTA;
}