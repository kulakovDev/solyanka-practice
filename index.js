const incrementBtn= document.getElementById('increment')
const decrementBtn= document.getElementById('decrement')
const resetBtn= document.getElementById('reset')
const counterEl= document.getElementById('counter')

const counterState={
    value:0,
    updateCounter(){
        counterEl.textContent=this.value;
        this.changeColor()
    },
    changeColor(){
        if(this.value===0){
            counterEl.style.color=`black`
        }
        else if(this.value>0){
            counterEl.style.color=`green`
        }
        else {
            counterEl.style.color=`darkred`
        }
    }
}

resetBtn.addEventListener('click',()=>{
    counterState.value=0
    counterState.updateCounter()
})

incrementBtn.addEventListener('click',()=>{
    counterState.value++
    counterState.updateCounter()
})
decrementBtn.addEventListener('click',()=>{
    counterState.value--
    counterState.updateCounter()
})

counterState.updateCounter()
