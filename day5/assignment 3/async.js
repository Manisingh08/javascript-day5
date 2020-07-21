console.log("async");


const photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },1000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();