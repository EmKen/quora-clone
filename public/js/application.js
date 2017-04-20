$(document).ready(function(){
	$("#add_comment").submit(function(event) {
		event.preventDefault();
		$('form input[type=submit]').attr("disabled", true);
		$.ajax({
			url: "/answer_comments",
			method: "post",
			data: $(this).serialize(),
			dataType: "html",
			success: function(data) {
				$("#comments").html(data);
				$('form input[type=submit]').attr("disabled", false);
			},
			error: function(data) {
				alert("Problem")
			},

			beforeSend: function() {
				$("#add_comment input[type=text]").val("")
			}
		})
	})
});