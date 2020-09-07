function Kamus(kata,katabaruindo,katabaruinggris,katahapus){

    var kamus = new Map ([
        ["Kuning", "Yellow"],
        ["Merah", "Red"],
        ["Biru", "Blue"],
        ["Hijau", "Green"],
        ["Ungu", "Purple"],
        ["Putih", "White"],
        ["Hitam", "Black"]
        ]
    )
    let sekarang = new Date();
    console.log("Hari ini "+sekarang);
    console.log(kamus);
    
    console.log("");
    console.log("");
    var indo = kata;
    var inggris = "Purple";
    var artiinggris = kamus.get(indo);
    var artiindo = kamus.has(inggris);
    console.log("Bahasa Inggris dari "+indo+" adalah "+artiinggris);
    
    kamus.set(katabaruindo,katabaruinggris);
    
    console.log("Setelah ditambah Kata Baru "+katabaruindo);
    console.log(kamus);
    
    kamus.delete(katahapus);
    console.log("Setelah kata "+katahapus+" dihapus");
    
    console.log(kamus);
    
    }
    
    
    Kamus("Biru", "Merah", "Red", "Hitam");