Linked List JQuery Plugin
=========================
C'est un plugin JQuery qui permis de lier deux listes HTML (select) ainsi filtrer la sous liste si la liste principale change. Par exemple, la liste des pays avec la liste des villes.

Exemple d'utilisation
--------------------
<html>
<head>
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
</head>
<body>
	<select id="pays">
		<option value="1">Maorc</option>
		<option value="2">France</option>
		<option value="3">Italie</option>
	</select>
	<select id="villes">
		<option parent="1" value="1">Casablanca</option>
		<option parent="2" value="2">Paris</option>
		<option parent="1" value="3">Rabat</option>
		<option parent="1" value="4">Fes</option>
		<option parent="3" value="5">Roma</option>
	</select>
	<script type="text/javascript" src="linkedlist.jquery.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#pays").linkedlist('villes');
		});
	</script>
</body>
</html>

**NB : ** il faut ajouter l'attribut *parent* au niveau de la balise *<option>* en précisant l'id de l'élément parent.
Par exemple, toutes les villes du Maroc aurons comme *parent* la valeur *1*.