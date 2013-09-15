<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<spring:url value="/resources" var="resourceUrl"/>

        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
          <div class="well sidebar-nav">
        
          
 
  			<ul class="nav">
              <li>  Subject</li>
              <li class="active">
	              <select id="subject" name="subjectId" >
		          	 <option value="-1">Select</option>
			          <c:forEach var="subject" items="${subjects}">
							<option value="${subject.code}">${subject.description}</option>
			          </c:forEach>
		          </select>
              </li>
            </ul>
            
          </div><!--/.well -->
        </div><!--/span-->