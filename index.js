async function walkDog() {
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //const dogWalk = true;
            const dogWalk = false;

            if (dogWalk) {
                resolve('you walk the dog')
            }else{
                reject('you Didnt walk the dog')
            }
        },1500);
    } )
};
function cleanKitchen() {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        kitchenClean = true;
        if (kitchenClean) {
            resolve('you clean the kitchen');
        }else{
            reject('you didnt clean the kitchen')
        }
       
    }, 2500);
     
    })
};

function takeOut() {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut) {
                resolve('take out the trash');
            }else{
                reject('you didnt take out the trash')
            }
           
            
        },500);
    })

}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutResult = await takeOut();
    console.log(takeOutResult);

    console.log('you finished all the chores')
    } catch (error) {
        console.error(error)
    }
    
}
doChores()
