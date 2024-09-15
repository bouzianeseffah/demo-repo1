
function func1(callback){
    setTimeout(() =>{console.log('task1');
                       callback()}, 3000)
}
function func2(){
    console.log('1')
    console.log('2')
    console.log('3')

}
func1(func2)
