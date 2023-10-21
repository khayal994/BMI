function myFunction(){
    
    let kilo = prompt("KIlonuzu Girin ")
    let boy = prompt("Boyunuzu Girin")
    let yas = prompt("Yasinizi Girin")
    let BMI = (kilo / (boy * boy))*10000; 
    let netice;
    
    if (BMI < 18) {
        netice = "Siz Ceki Azligindan Eziyyet cekirsiniz";
    }
    else if (BMI > 18 && BMI < 20) {
        netice = "Sizin Cekiniz Azdir LAkin saglamliq ucun Zererli Deyil"
    }
    else if (BMI > 20 && BMI < 26) {
        netice = "SIzin cekiniz normaldir. Tebrikler"
    }
    else if (BMI > 26 && BMI < 28) {
        netice = "SIzin Artiq Cekiniz Var"
    }
    else if (BMI > 28 && BMI < 31) {
        netice = "Siz, 1cu dereceli artiq cekiden eziyyet cekirsiniz"
    }
    else if (BMI > 31 && BMI < 36) {
        netice = "Siz, 2cu dereceli artiq cekiden eziyyet cekirsiniz"
    }
    else if (BMI > 36 && BMI < 41) {
        netice = "Siz, 3cu dereceli artiq cekiden eziyyet cekirsiniz"
    }
    else if (BMI > 41) {
        netice = "Siz, 4cu dereceli artiq cekiden eziyyet cekirsiniz"
    }
    else {
        netice = "Sizin Basinizda problem var"
    }
    document.getElementById("bura").innerHTML = netice;
    document.getElementById("h11").innerHTML = boy
    document.getElementById("yas").innerHTML = yas
    document.getElementById("kilo").innerHTML = kilo
    }
    
    