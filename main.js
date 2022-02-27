function getEmbedableUrl(){
    let message = document.querySelector('.message');
    
    message.innerText = "";

    let embeddableUrl = document.querySelector('.embeddableUrl');

    let driveUrlElement = document.querySelector('#driveUrl');

    let driveUrl = driveUrlElement.value;
    
    console.log(driveUrl);
    
    if(driveUrl == undefined || !driveUrl.startsWith('https://drive.google.com/file/d/')){
      alert('bad url');
      
      return; 
    }
    
    driveUrl = driveUrl.replace('https://drive.google.com/file/d/',
                     'https://drive.google.com/uc?export=view&id=' );
    
    console.log(driveUrl);
    
    driveUrl = driveUrl.replace('/view?usp=sharing','');
    
    console.log(driveUrl);
    
    let googleDriveImage = document.querySelector('#googleDriveImage');
    
    // driveUrl.select();
    
    navigator.clipboard.writeText(driveUrl);
    
    
    console.log(googleDriveImage);
    
    googleDriveImage.src = driveUrl;

    embeddableUrl.innerText = driveUrl;
    
    message.innerText ="Link Copied To Clipboard";

    driveUrlElement.value = "";
    
  }

