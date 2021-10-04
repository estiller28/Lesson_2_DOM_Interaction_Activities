
var app = new Vue({
    el: '#app',
    data: {
        fullName: 'Daniel Estiller',
        myAge: 21,
        images: 'https://wallpaperaccess.com/full/151853.jpg'
    },
    methods:{
        myAgeIn5years(num){
            return this.myAge + num;
        },
        favoriteNumber(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
})