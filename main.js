function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ogplgid2t/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults( error,results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255 ) +1;
        random_number_g=Math.floor(Math.random()* 255 ) +1;
        random_number_b=Math.floor(Math.random()* 255 ) +1;

        document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML= 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + '%' ;
document.getElementById("result_label").style.color="rgb(" +random_number_r +","+ random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color="rgb(" +random_number_r +","+ random_number_g+","+random_number_b+")";


img=document.getElementById('dog');
img1=document.getElementById('cat');
img2=document.getElementById('dino');
img3=document.getElementById('ear');

if(results[0].label == "bark")
{
    img.src='dog.gif';
    img1.src='cat.jpg';
    img2.src='dino-img.webp';
    img3.src='hear-ear.jpg';

}else if(results[0].label == "meow"){

   
    img1.src='cat.gif';
    img.src='dog.jpg';
    img2.src='dino-img.webp';
    img3.src='hear-ear.jpg';
  
}

else if(results[0].label =="roar"){
   
    img.src='dog.jpg';
    img1.src='cat.jpg';
    img2.src='dino-gif.gif';
    img3.src='hear-ear.jpg';

}else
{
    img.src='dog.jpg';
    img1.src='cat.jpg';
    img2.src='dino-img.webp';
   
    img3.src='hear.gif';
 




    }
}
}


    
   
   
   




    
