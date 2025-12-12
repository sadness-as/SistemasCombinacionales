let btnMenu=document.querySelector('.btnMenu');
let logo=document.querySelector('.logo');
let list=document.querySelectorAll('.logo span');
let title=document.querySelector('.title span');
let inputs=document.querySelectorAll('.btnInput');
let sc=document.querySelectorAll('.sc');
let leds=document.querySelectorAll('.comparador .inputs span');
let colors=["led1","led2","led3","led4","led5","led6","led7","led8"];
/*console.log(leds);*/
/*console.log(outCircles)*/
let arr=[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]];
/*console.log(arr);*/
btnMenu.addEventListener('click',function(){
	logo.classList.toggle('active');
})
let index=0;
for(let i=0;i<list.length;i++){
	list[i].addEventListener('click',function(){
		title.innerHTML=list[i].textContent;
		index=i;
		for(let j=0;j<sc.length;j++){
				sc[j].classList.add('none');
		}
		sc[index].classList.remove('none');
		/*console.log(sc[index]);*/
	})
}
for(let i=0;i<inputs.length;i++){
	inputs[i].addEventListener('click',function(){
		inputs[i].classList.toggle('check');
		leds[inputs[i].id].classList.toggle(colors[inputs[i].id]);
		/*if(inputs[i].parentElement.children[3]){
			inputs[i].parentElement.children[3].src="files/ledred.png";
		}*/
		if(inputs[i].parentElement.children[0].textContent<1){
			inputs[i].parentElement.children[0].innerHTML=1;
		}
		else{
			inputs[i].parentElement.children[0].innerHTML=0;
		}
		/*console.log(inputs[i].parentElement.children[0].textContent);*/
		/*inputs[i].parentElement.children[0].innerHTML=this.id;
		console.log(this.id);*/
		solve();
	})
}
function solve(){
	if(index==0){
		let outCircles=document.querySelectorAll('.codificador .outCircle');
		let checks=document.querySelectorAll('.codificador .check');
		let outs=document.querySelectorAll('.codificador .outputs .text');
		if(checks.length){
			/*console.log(checks.length-1);
			console.log(checks[checks.length-1]);*/
			let ind=checks[checks.length-1].id;
			/*console.log(arr[ind]);*/
			for(let i=0;i<arr[ind].length;i++){
				outs[i].innerHTML=arr[ind][i];
				if(arr[ind][i]){
					outCircles[i].classList.add('check2');
				}
				else{
					outCircles[i].classList.remove('check2');
				}
			}
		}
		else{
			for(let i=0;i<outs.length;i++){
				outs[i].innerHTML=0;
				outCircles[i].classList.remove('check2');
			}
			/*console.log("not active");*/
		}
	}
	else if(index==1){
		let checks=document.querySelectorAll('.decodificador .check');
		let checks2=document.querySelectorAll('.decodificador .outputs .outCircle');
		let outs=document.querySelectorAll('.decodificador .outputs .text');
		/*console.log(checks2);*/
		if(checks.length){
			let binary=document.querySelectorAll('.decodificador .inputs .text');
			/*console.log(binary);*/
			let sum=0;
			for(let i=0,j=binary.length-1;i<binary.length,j>=0;i++,j--){
				let base;
				let expo=j;
				if(binary[i].textContent>0){
					base=2;
					sum+=Math.pow(base,expo);
				}
				/*console.log("base: "+base+" exp: "+expo+" sum:"+sum);*/
				/*console.log(binary[i].textContent);*/
				/*console.log(Math.pow(base,expo));*/
			}
			/*console.log(sum);
			console.log(outs);*/
			for(let i=0;i<checks2.length;i++){
				if(sum==i){
					checks2[i].classList.add('check2');
					checks2[i].parentElement.children[0].innerHTML=1;
				}
				else{
					checks2[i].classList.remove('check2');
					checks2[i].parentElement.children[0].innerHTML=0;
				}
			}
		}
		else{
			for(let i=0;i<checks2.length;i++){
				checks2[i].classList.remove('check2');
				checks2[i].parentElement.children[0].innerHTML=0;
			}
			checks2[0].classList.add('check2');
			checks2[0].parentElement.children[0].innerHTML=1;
		}
		/*console.log(checks);*/
	}
	else if(index==2){
		let binary=document.querySelectorAll('.selector .text');
		let angles=[40,31,20,8,-6,-18,-30,-39];
		let bar=document.querySelector('.barra');
		let btnsMux=document.querySelectorAll('.multiplexor .inputs .btnInput');
		let outMux=document.querySelector('.multiplexor .outputs .outCircle');
		let sum=0;
		for(let i=0,j=binary.length-1;i<binary.length,j>=0;i++,j--){
			let base;
			let expo=j;
			if(binary[i].textContent>0){
				base=2;
				sum+=Math.pow(base,expo);
			}
		}
		for(let i=0;i<btnsMux.length;i++){
			if(i==sum){
				if(btnsMux[i].parentElement.children[0].textContent>0){
					outMux.parentElement.children[0].innerHTML=1;
					outMux.classList.add('check2');
				}
				else{
					outMux.parentElement.children[0].innerHTML=0;
					outMux.classList.remove('check2');
				}
			}
		}
		bar.style.transform='rotate('+angles[sum]+'deg)';
		/*console.log(sum)*/
		/*console.log(bar.style);*/
	}
	else if(index==4){
		let checks=document.querySelectorAll('.comparador .inputs .text');
		let outsComp=document.querySelectorAll('.comparador .outputs .text');
		/*console.log(outsComp);*/
		/*console.log(checks);*/
		let sum1=0,sum2=0;
		for(let i=0,j=checks.length-1;i<checks.length,j>=0;i++,j--){
			let base=2;
			let expo=j-4;
			/*console.log(expo);*/
			if(i<4){
				/*console.log(checks[i].textContent);*/
				if(checks[i].textContent>0){
					sum1+=Math.pow(base,expo);
				}
			}
			else{
				expo=j;
				/*console.log(expo)*/
				if(checks[i].textContent>0){
					sum2+=Math.pow(base,expo);
				}
			}
			/*console.log(sum1+" "+sum2);*/
		}
		if(sum1>sum2){
			/*console.log("a>b");*/
			for(let i=0;i<outsComp.length;i++){
				if(i==0){
					outsComp[i].innerHTML=1;
					outsComp[i].parentElement.children[2].classList.add('check2');
				}
				else{
					outsComp[i].innerHTML=0;
					outsComp[i].parentElement.children[2].classList.remove('check2');
				}
			}
			/*outsComp[0].innerHTML=1;
			outsComp[1].innerHTML=0;
			outsComp[2].innerHTML=0;*/
		}
		else if(sum1<sum2){
			/*console.log("a<b");*/
			for(let i=0;i<outsComp.length;i++){
				if(i==2){
					outsComp[i].innerHTML=1;
					outsComp[i].parentElement.children[2].classList.add('check2');
				}
				else{
					outsComp[i].innerHTML=0;
					outsComp[i].parentElement.children[2].classList.remove('check2');
				}
			}
			/*outsComp[0].innerHTML=0;
			outsComp[1].innerHTML=0;
			outsComp[2].innerHTML=1;*/
		}
		else{
			/*console.log("a==b");*/
			for(let i=0;i<outsComp.length;i++){
				if(i==1){
					outsComp[i].innerHTML=1;
					outsComp[i].parentElement.children[2].classList.add('check2');
				}
				else{
					outsComp[i].innerHTML=0;
					outsComp[i].parentElement.children[2].classList.remove('check2');
				}
			}
			/*outsComp[0].innerHTML=0;
			outsComp[1].innerHTML=1;
			outsComp[2].innerHTML=0;*/
		}
	}
}