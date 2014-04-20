/* !LinkedList JQuery plugin V0.1.0 | Auteur : Jalal AAFER
You mast have an attribut <<parent>> in the << option >> tag with id of parent elements
Ex: 
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
		$("#pays").linkedlist('villes');
	</script>
*/
(function($)
{
	$.fn.linkedlist=function(idList2)
	{
		return this.each(function(){
			//alimenter la liste des élements enfants
			var child = $("#"+idList2);
			child.attr('disabled',true);

			var options =[];

			$.each(child.children(),function(){
				var item= {text: $(this).text(), value: $(this).val(), parent: $(this).attr('parent')};
				options.push(item);
			});
			$(this).change(function() {
				child.attr('disabled',false);
				var parent = $(this);

				var idParent = parent.val();
				var idChild = child.val();
				// Vider la liste des enfants
				child.empty();
				// Filtrer les élements des enfants selon les l'élement parent selectionné
				$.each(options, function(index, option) {
					if(option.parent == parent.val()){
						$option = $("<option></option>")
			        		.attr("value", option.value)
			        		.text(option.text);
			      		child.append($option);
					}
			    	
			    });
			});
		})
	};
})(jQuery);
