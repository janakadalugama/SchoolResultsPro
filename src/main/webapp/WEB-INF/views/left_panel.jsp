<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<spring:url value="/resources" var="resourceUrl"/>

<script id="result-template" type="text/x-handlebars-template">
  <table class="table table-striped table-bordered table-condensed">
					<thead>
						<tr>
							<th>school</th>
							<th>Y3</th>
							<th>Y5</th>
							<th>Y7</th>
							<th>Y9</th>
							<th>Raw Gain Y3Y5</th>
							<th>Factored Gain Y3Y5</th>
							<th>GLG Y3Y5</th>
							<th>latestGainInGainY3Y5</th>
						</tr>
					</thead>
					<tbody>
					{{#schools}}
						<tr>
							<td>{{school.name}}</td>
							<td>{{latestY3}}</td>
							<td>{{latestY5}}</td>
							<td>{{latestY7}}</td>
							<td>{{latestY9}}</td>
							<td>{{rawGainY3Y5}}</td>
							<td>{{rawGainY3Y5}}</td>
							<td>{{glgY3Y5}}</td>
							<td>{{latestGainInGainY3Y5}}</td>
						</tr>
					{{/schools}}	 
					</tbody>
				</table>
</script>

<div class="col-xs-12 col-sm-9">
  <p class="pull-right visible-xs">
	<button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
  </p>
  <div class="row" id="content-placeholder">
		
  </div><!--/row-->
</div><!--/span-->