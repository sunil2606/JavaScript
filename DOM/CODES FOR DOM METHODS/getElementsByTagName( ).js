<script type="text/javascript">  
function counth2(){  
var totalh2=document.getElementsByTagName("h2");  
alert("total h2 tags are: "+totalh2.length);  
}  
function counth3(){  
var totalh3=document.getElementsByTagName("h3");  
alert("total h3 tags are: "+totalh3.length);  
}  
</script>  
<h2>This is h2 tag</h2>  
<h2>This is h2 tag</h2>  
<h3>This is h3 tag</h3>  
<h3>This is h3 tag</h3>  
<h3>This is h3 tag</h3>  
<button onclick="counth2()">count h2</button>  
<button onclick="counth3()">count h3</button>  