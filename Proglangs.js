// JavaScript Document

<script>

function notEmpty(){

var e = document.getElementById ("field");
var strUser = e.options[e.selectedIndex].value;
document.getElementById('aggregator_name').innerHTML = strUser;

}
notEmpty()
    
    document.getElementById("field").onchange = notEmpty;
</script>

	
<script>
function myFunction()
{
alert ("under konstruksjon")
}
</script>

