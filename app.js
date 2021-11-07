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