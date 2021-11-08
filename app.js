const app = Vue.createApp({
    data() {
        return {
            waga_kg: null,
            dawka_mg_na_kg: null,
            stezenie_mg_na_ml: null,
            cena_wysylka: 0,
            dni_terapi: 84,
            cena_fiolka: null,
            pojemnosc_fiolka: 5,
        }
    },
    mounted() {
        if (localStorage.waga_kg) {
            this.waga_kg = parseFloat(localStorage.waga_kg)
        }
        if (localStorage.dawka_mg_na_kg) {
            this.dawka_mg_na_kg = parseFloat(localStorage.dawka_mg_na_kg)
        }
        if (localStorage.stezenie_mg_na_ml) {
            this.stezenie_mg_na_ml = parseFloat(localStorage.stezenie_mg_na_ml)
        }
        if (localStorage.cena_wysylka) {
            this.cena_wysylka = parseFloat(localStorage.cena_wysylka)
        }
        if (localStorage.dni_terapi) {
            this.dni_terapi = parseFloat(localStorage.dni_terapi)
        }
        if (localStorage.cena_fiolka) {
            this.cena_fiolka = parseFloat(localStorage.cena_fiolka)
        }
        if (localStorage.pojemnosc_fiolka) {
            this.pojemnosc_fiolka = parseFloat(localStorage.pojemnosc_fiolka)
        }
    },
    watch: {
        waga_kg(newwaga_kg) {
            localStorage.waga_kg = newwaga_kg
        },
        dawka_mg_na_kg(newdawka_mg_na_kg) {
            localStorage.dawka_mg_na_kg = newdawka_mg_na_kg
        },
        stezenie_mg_na_ml(newstezenie_mg_na_ml) {
            localStorage.stezenie_mg_na_ml = newstezenie_mg_na_ml
        },
        cena_wysylka(newcena_wysylka) {
            localStorage.cena_wysylka = newcena_wysylka
        },
        dni_terapi(newdni_terapi) {
            localStorage.dni_terapi = newdni_terapi
        },
        cena_fiolka(newcena_fiolka) {
            localStorage.cena_fiolka = newcena_fiolka
        },
        pojemnosc_fiolka(newpojemnosc_fiolka) {
            localStorage.pojemnosc_fiolka = newpojemnosc_fiolka
        }
    },
    computed: {
        ilosc() {
            return (this.waga_kg * this.dawka_mg_na_kg) / this.stezenie_mg_na_ml;
        },
        koszt() {
            let price = Math.ceil((this.ilosc * this.dni_terapi) / this.pojemnosc_fiolka) * this.cena_fiolka;
            if (price)
                return price + this.cena_wysylka
        }
    }
})