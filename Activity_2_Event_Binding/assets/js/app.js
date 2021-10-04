


var assignment = new Vue({
    el: '#assignment',
    data:{
        firstInput: '',
        secondInput: '',
    },
    
    methods:{
        submit(){
            alert('Form Submitted!');
        },
        firstOutput(event){
            this.firstInput = event.target.value;
        },
        secondOutput(event){
            this.secondInput = event.target.value;
        }
    }
})