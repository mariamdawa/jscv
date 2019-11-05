var clock=document.createElement('p'),
	day=document.createElement('p'),
	clockDiv=document.createElement('div'),
	div=document.querySelector('div'),
	image=document.createElement('img'),
	imageDiv=document.createElement('div'),
	infoUl=document.createElement('infoUl'),
	infoDiv=document.createElement('div'),
	container=document.createElement('div'),
	expDiv=document.createElement('div'),
	expUl=document.createElement('ul'),
	hobbyDiv=document.createElement('div'),
	hobbyUl=document.createElement('ul'),
	contactDiv=document.createElement('div'),
	contact=document.createElement('form'),
	btn=document.createElement('button'),
	trigger;

//clock-------------------------

clock.style.textAlign="center";
day.style.textAlign="center";
clockDiv.style.border = "thick solid #000";
clockDiv.style.width="150px";
clockDiv.style.cssFloat="right";
clockDiv.classList.add('mx-5');
trigger= window.setInterval(function() {
				
			var time=new Date();
			clock.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
			day.innerHTML=time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear();
			clockDiv.appendChild(clock);	
			clockDiv.appendChild(day); 
			
			
					
			}
		 , 1000);



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhr.responseText),

        //portfolio pic----------------------

        	pic = response.image;
       	imageDiv.classList.add('m-5','w-auto','rounded-circle');
		image.setAttribute('src', pic);
		image.classList.add('rounded-circle','w-25','p-3','imageSize','mx-5');
		
		//info--------------------------

		for (let infos of response.info){
			var txt=document.createTextNode(infos),
				li=document.createElement('li');
				li.appendChild(txt);
				infoUl.appendChild(li);



		}


	//experiences---------------------

	var expTxt=document.createTextNode('Experiences: ');
	expDiv.appendChild(expTxt);
	for (let j of response.experiences){
		var expNode=document.createTextNode(j),
			list=document.createElement('li');
			list.appendChild(expNode);
			expUl.appendChild(list);
			expDiv.appendChild(expUl);

	}

	//hobbies------------------------

	var hobbyTxt=document.createTextNode('Hobbies: ');
	hobbyDiv.appendChild(hobbyTxt);
	for (let any of response.hobbies){
		var hobbies=document.createTextNode(any),
			hobbyList=document.createElement('li');
		hobbyList.appendChild(hobbies);
		hobbyUl.appendChild(hobbyList);
		hobbyDiv.appendChild(hobbyUl);

	}


         
 };}
xhr.open("GET", "json/data.json", true);
xhr.send();

//creating the form-----------------

contact.innerHTML='<form method="post" id="form" onsubmit="onSubmit()" name="message" method="post"><label for="name">Name: </label><input type="text"  name="name" required /><label for="email">Email: </label><input type="text" name="email" required /><label for="subject">Subject: </label><input type="text" name="subject" required /><label for="message">Message: </label><textarea name="message" required placeholder="Write something.." style="height:200px" ></textarea><input type="button" onclick="onSubmit()" value="Submit Form"/></form>';
//  btn = document.querySelector('button');
// console.log(btn);
var contactTxt=document.createTextNode('Contact Me:');
contactDiv.appendChild(contactTxt);
contactDiv.appendChild(contact);
btn.setAttribute('value','Submit');

// contactDiv.appendChild(btn);
// contactForm=document.forms['message'];
// if(btn){

// 	btn.addEventListener('click', function(){
// 		console.log('i');
		
// 	})
// }


function onSubmit(){
		// console.log('hello');
		
		document.querySelector('form').submit;
			var name= contact.name.value,
				email=contact.email.value,
				subject=contact.subject.value,
				message=contact.message.value;
			// console.log('hi');


			var data={
					name:name,
					email:email,
					subject:subject,
					message:message
				}

			var xhr2= new XMLHttpRequest();

			

			xhr2.onreadystatechange=function(){
				if (xhr2.readystate==4 && xhr2.status==200){
					var response=JSON.parse(xhr2.responseText);

					console.log('response',response);
				}
			}
			xhr2.open('POST', 'http://js.vacsera.com/api/final-project');
			xhr2.setRequestHeader('Content-type','application/json');
			xhr2.send(JSON.stringify(data));
			console.log('data',data);
		}
	
	


container.appendChild(clockDiv);
div.appendChild(container);
imageDiv.appendChild(image);
// infoDiv.classList.add('float_center','mt-3');
infoDiv.appendChild(infoUl);

div.appendChild(imageDiv);
// infoDiv.classList.add('p-5');
div.appendChild(infoDiv);
// tag= document.getElementsByTagName('div');
// for (let i of tag){
// 	i.classList.add('bg-transparent');
// }

div.appendChild(expDiv);
div.appendChild(hobbyDiv);

div.appendChild(contactDiv);
